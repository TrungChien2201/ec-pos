import { useCallback, useEffect, useState } from 'react'

import { useQuery } from '@tanstack/react-query'
import { message } from 'antd'
import { NumericFormat } from 'react-number-format'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'

import ButtonComponent from 'components/Button'

import { getListAddress, getListProvinces } from 'services/address'
import {
  getCart,
  setCart,
  getProductsGift,
  getSettingPoint,
  getProductsGiftColorVariant,
} from 'services/cart'
import { setProductRecommendId, getProductRecommendId } from 'services/recommend'

import * as CONSTANT from 'common/constant'

import CartItem from './components/CartItem'
import UserAddress from './components/UserAddress'
import { initCountCart } from '../../../store/countCart'
import { showModalLogin } from '../../../store/user'
import { shopifyClient } from '../../../utils/shopify.util'
import RecommendForYou from '../Products/components/RecommendForYou'

const Cart = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const [point, setPoint] = useState(0)
  const [cartItems, setCartItems] = useState()
  const [loading, setLoading] = useState(false)
  const [total, setTotal] = useState(0)
  const [currencyCode, setCurrencyCode] = useState('')
  const userInfo = useSelector((state) => state.user)
  const [productRecommends, setProductRecommends] = useState([])
  const [addressSelected, setAddressSelected] = useState(null)
  const [showRequiredCheckMsg, setShowRequiredCheckMsg] = useState(false)
  const locale = useSelector((state) => state.user.locale)

  const { data: address, refetch } = useQuery(['getListAddress', userInfo], getListAddress)
  const { data: provinces } = useQuery(['getListProvinces'], getListProvinces)
  const { data: productGifts } = useQuery(['getProductsGift'], getProductsGift)
  const { data: settingPoint } = useQuery(['getSettingPoint'], getSettingPoint)
  const { data: productGiftColorVariant } = useQuery(['getProductsGiftColorVariant'], getProductsGiftColorVariant)

  useEffect(() => {
    getItemsInCart()
  }, [])

  useEffect(() => {
    getItemsInCart()
  }, [userInfo])

  useEffect(() => {
    getItemsInCart()
  }, [productGifts])

  useEffect(() => {
    getItemsInCart()
  }, [productGiftColorVariant])

  useEffect(() => {
    if (address?.length > 0) {
      const addressDefault = address.find((doc) => doc.default) || address[0]
      setAddressSelected(addressDefault)
    }
  }, [address])

  const getPriceTotalCart = useCallback(() => {
    let price = 0
    cartItems.forEach((doc) => {
      if (doc.checked) {
        if (doc.wrapper) {
          price += doc.wrapper.price.amount * doc.quantity
        }
        if (doc.checkVariant) {
          price += doc.quantity * doc.checkVariant.price.amount
        }
        if (doc.wrapperGiftColor) {
          price += doc.wrapperGiftColor.price.amount * doc.quantity
        }
      }
    })
    return Math.round(price)
  }, [cartItems])

  useEffect(() => {
    const totalPrice = cartItems ? getPriceTotalCart() : 0
    setTotal(totalPrice)
    if (settingPoint?.point_rate > 0) {
      const countPoint = Math.round((Number(settingPoint.point_rate) * total) / 100)
      setPoint(countPoint)
    }
  }, [cartItems, getPriceTotalCart, settingPoint, total])

  const getItemsInCart = async () => {
    setLoading(true)
    let cart = getCart()
    let cartProduct = cart.filter((doc) => doc.type == CONSTANT.TYPE_PRODUCT.PRODUCT)
    const itemDatas = await shopifyClient.product.fetchMultiple(
      cartProduct.map((doc) => {
        return doc.id
      }),
    )
    const items = itemDatas.filter((doc) => !!doc)
    if (items?.length > 0) {
      setCurrencyCode(items[0]?.variants[0]?.price.currencyCode)
    }
    const checkOptionProduct = cartProduct.find((doc) => !doc.shopify_option_id)
    if (checkOptionProduct || items.length != cartProduct.length) {
      const listIdNotFound = []
      cart.map((doc) => {
        const item = items.find((itemData) => itemData.id == doc.id)
        if (!item) {
          listIdNotFound.push(doc.id)
        } else if (!doc.shopify_option_id) {
          doc.shopify_option_id = item.variants[0].id
        }
      })
      cart = cart.filter(
        (doc) =>
          !listIdNotFound.includes(doc.id) && !listIdNotFound.includes(doc.shopify_parent_id),
      )
      setCart(cart, true)
      cartProduct = cart.filter((doc) => doc.type == CONSTANT.TYPE_PRODUCT.PRODUCT)
      dispatch(initCountCart(cartProduct.length))
    }
    const cartWrapped = cart.filter((doc) => doc.type === CONSTANT.TYPE_PRODUCT.WRAPPED)
    const cartGiftColor = cart.filter((doc) => doc.type === CONSTANT.TYPE_PRODUCT.GIFT_COLOR)
    const newItems = []
    cartProduct.forEach((productData) => {
      const itemCart = items.find((item) => item.id === productData.id)
      const newItem = {
        ...itemCart,
      }
      newItem.quantity = productData.quantity
      const wrapper = cartWrapped.find(
        (doc) =>
          doc.shopify_parent_id === productData.id &&
          doc.shopify_option_id === productData.shopify_option_id,
      )
      newItem.checkVariant = itemCart.variants.find(
        (doc) => doc.id === productData.shopify_option_id,
      )
      newItem.shopify_option_id = productData.shopify_option_id
      if (wrapper && productGifts?.length) {
        const variant = productGifts.find((doc) => doc.id === wrapper.id)
        if (variant) {
          newItem.wrapper = variant
        }
      }
      const giftColor = cartGiftColor.find(
        (doc) =>
          doc.shopify_parent_id === productData.id &&
          doc.shopify_option_id === productData.shopify_option_id,
      )
      if (giftColor && productGiftColorVariant) {
        const variantGiftColor = productGiftColorVariant.find((doc) => doc.id === giftColor.id)
        if (variantGiftColor) {
          newItem.wrapperGiftColor = variantGiftColor
        }
      }
      newItem.checked = true
      newItems.push(newItem)
    })
    if (newItems[0]) {
      setProductRecommendId(newItems[0].id)
    }
    setCartItems(newItems)
    setLoading(false)
    getRecommendedProducts()
  }

  const getRecommendedProducts = async () => {
    const productRecommendId = getProductRecommendId()
    const products = await shopifyClient.product.fetchRecommendations(productRecommendId)
    setProductRecommends(products)
  }

  const handleUpdateCartItem = async (lineItemId, quantity) => {
    const cart = getCart()
    const dataCart = cart.find((doc) => doc.shopify_option_id === lineItemId)
    dataCart.quantity = quantity
    setCart(cart)
    const newCartItems = cartItems.map((item) => {
      const el = item
      if (el.shopify_option_id === lineItemId) {
        el.quantity = quantity || 0
      }
      return el
    })
    setCartItems(newCartItems)
  }

  const handleRemoceCartItem = async (
    productId,
    lineItemId,
    wrapper = false,
    wrapperGiftColor = false,
  ) => {
    let cart = getCart()
    if (wrapper) {
      cart = cart.filter(
        (doc) =>
          !(
            doc.shopify_parent_id == productId &&
            doc.shopify_option_id == lineItemId &&
            doc.type == CONSTANT.TYPE_PRODUCT.WRAPPED
          ),
      )
    } else if (wrapperGiftColor) {
      cart = cart.filter(
        (doc) =>
          !(
            doc.shopify_parent_id == productId &&
            doc.shopify_option_id == lineItemId &&
            doc.type == CONSTANT.TYPE_PRODUCT.GIFT_COLOR
          ),
      )
    } else {
      cart = cart.filter((doc) => doc.shopify_option_id != lineItemId)
    }
    setCart(cart)
    dispatch(initCountCart(cart.filter((doc) => doc.type === CONSTANT.TYPE_PRODUCT.PRODUCT).length))
    if (wrapper) {
      const newCartItems = [...cartItems]
      newCartItems.map((doc) => {
        if (doc.shopify_option_id == lineItemId) {
          delete doc.wrapper
        }
      })
      setCartItems(newCartItems)
    } else if (wrapperGiftColor) {
      const newCartItems = [...cartItems]
      newCartItems.map((doc) => {
        if (doc.shopify_option_id == lineItemId) {
          delete doc.wrapperGiftColor
        }
      })
      setCartItems(newCartItems)
    } else {
      const newCartItems = cartItems.filter((doc) => doc.shopify_option_id != lineItemId)
      setCartItems(newCartItems)
    }
  }

  const handleCheckCartItem = async (e, id) => {
    const newCartItems = cartItems.map((doc) => {
      const el = doc
      if (doc.shopify_option_id === id) {
        el.checked = e.target.checked
      }
      return el
    })
    setCartItems(newCartItems)
    const selectedItems = newCartItems.filter((item) => item.checked)
    if (selectedItems?.length !== 0) {
      setShowRequiredCheckMsg(false)
    }
  }

  const handleBuyNow = async () => {
    if (!userInfo.user) {
      dispatch(showModalLogin())
      return
    }
    const selectedItems = cartItems.filter((item) => item.checked)
    if (selectedItems?.length === 0) {
      setShowRequiredCheckMsg(true)
      return
    }
    if (!addressSelected?.id) {
      message.error({
        content: CONSTANT.ERROR_ADDRESS_NOT_FOUND,
        key: CONSTANT.MESSAGE_SYSTEM_ERROR_KEY,
      })
      return
    }
    let newCheckout
    const province = provinces?.find((doc) => doc.value === addressSelected?.prefectures)?.label
    if (!province) {
      message.error({
        content: CONSTANT.ERROR_ADDRESS_NOT_CORRECT,
        key: CONSTANT.MESSAGE_SYSTEM_ERROR_KEY,
      })
      return
    }
    try {
      newCheckout = await shopifyClient.checkout.create({
        email: userInfo.user.email,
        shippingAddress: {
          address1: addressSelected.address1,
          address2: addressSelected.address2,
          city: addressSelected.city,
          company: addressSelected.company,
          country: 'Japan',
          firstName: addressSelected.first_name,
          lastName: addressSelected.last_name,
          phone: addressSelected.phone,
          province,
          zip: addressSelected.post_code,
        },
      })
      setTimeout(() => {
        window.open(newCheckout.webUrl, '_blank')
      })
    } catch (e) {
      message.error({
        content: CONSTANT.ERROR_ADDRESS_NOT_CORRECT,
        key: CONSTANT.MESSAGE_SYSTEM_ERROR_KEY,
      })
      return
    }
    const newList = []
    cartItems
      .filter((doc) => doc.checked)
      .forEach((doc) => {
        newList.push({
          variantId: doc.shopify_option_id,
          quantity: doc.quantity,
        })
        if (doc.wrapper) {
          newList.push({
            variantId: doc.wrapper.id,
            quantity: doc.quantity,
          })
        }
        if (doc.wrapperGiftColor) {
          newList.push({
            variantId: doc.wrapperGiftColor.id,
            quantity: doc.quantity,
          })
        }
      })
    if (newList.length === 0) {
      return
    }
    await shopifyClient.checkout.addLineItems(newCheckout.id, newList)
    const selectIds = cartItems.filter((doc) => doc.checked).map((doc) => doc.shopify_option_id)
    let cart = getCart()
    cart = cart.filter((doc) => !selectIds.includes(doc.shopify_option_id))
    setCart(cart)
    dispatch(initCountCart(cart.filter((doc) => doc.type === CONSTANT.TYPE_PRODUCT.PRODUCT).length))
    let newCartItems = [...cartItems]
    newCartItems = newCartItems.filter((doc) => !doc.checked)
    setCartItems(newCartItems)
  }

  // if (loading) return <Loading />

  return (
    <div className='bg-[#F8F3FF] pt-[30px]'>
      <div className='container mx-auto mb-[30px]'>
        {point > 0 && (
          <p className='text-[#0F4908] font-medium bg-[#168D021A] p-[16px] mb-[11px] text-[14px] leading-[22px]'>
            {locale['cart.when_order']}
            <NumericFormat
              displayType='text'
              value={Math.round(point)}
              thousandSeparator=','
              decimalScale={3}
              className='mr-[5px]'
            />
            {locale['cart.earn_points']}
          </p>
        )}
        {cartItems?.map((item, key) => {
          return (
            <CartItem
              key={key}
              cartItem={item}
              handleUpdateCartItem={handleUpdateCartItem}
              handleRemoceCartItem={handleRemoceCartItem}
              handleCheckCartItem={handleCheckCartItem}
            />
          )
        })}
        <div className='bg-white block lg:flex mb-[11px] p-[16px]'>
          <UserAddress
            userAddress={addressSelected}
            setAddressSelected={setAddressSelected}
            className='w-full lg:w-1/2 mb-[11px] lg:mb-0'
            onCallBack={() => {
              refetch()
            }}
          />
          <div className='w-full lg:w-1/2'>
            <div className='rounded-lg bg-[#EFEFEF] mb-[11px] p-[16px]'>
              <div className='flex justify-between mb-[8px]'>
                <p className='text-[#000000] text-[16px] leading-[24px] font-medium'>{locale['cart.total_amount']}</p>
                <NumericFormat
                  className='text-[20px] leading-[28px] font-medium text-[#9C8C6A]'
                  displayType='text'
                  value={Math.round(total)}
                  prefix='¥ '
                  thousandSeparator=','
                  decimalScale={3}
                />
              </div>
              <p className='text-black opacity-[55%] text-[14px] leading-[22px] font-normal'>
              {locale['cart.tax_included_more']}
              </p>
            </div>
            {showRequiredCheckMsg && (
              <div className='text-red-500 my-4'>{locale['cart.please_check']}</div>
            )}
            <ButtonComponent
              variant='primary'
              className='w-full'
              title={locale['cart.proceed_to_payment']}
              onClick={handleBuyNow}
            />
          </div>
        </div>
      </div>

      {productRecommends?.length > 0 && (
        <RecommendForYou
          className='pb-[30px] lg:pb-[50px]'
          title='Outstanding Collection'
          isShowDesription={false}
          productRecommends={productRecommends}
        />
      )}
    </div>
  )
}

export default Cart

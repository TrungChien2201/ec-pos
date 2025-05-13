/* eslint-disable no-underscore-dangle */
import { useCallback, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'

import { useQuery } from '@tanstack/react-query'
import { notification, Spin } from 'antd'
import cx from 'classnames'
import { useDispatch, useSelector } from 'react-redux'

import AdjustNumberItem from 'components/common/AdjustNumberItem/AdjustNumberItem'
import IconArrowLefV2 from 'resourse/svg/IconArrowLefV2'
import { getCart, getProductsGift, getProductsGiftColorVariant, setCart } from 'services/cart'
import {
  getMetafieldProductsGiftBoxById,
  getProductRecommendId,
  setProductRecommendId,
} from 'services/recommend'
import { initCountCart } from 'store/countCart'
import { showModalLogin } from 'store/user'

import ShowMoreText from 'components/ShowMoreText'
import { ALWAYS_BOX, NO_PRICE, regexBold, TYPE_PRODUCT } from '../../../../common/constant'
import { shopifyClient } from '../../../../utils/shopify.util'
import ModalAddToCart from '../components/ModalAddToCart'
import RecommendForYou from '../components/RecommendForYou'
import GroupAction from './components/GroupAction'
import Price from './components/Price'
import ProductTitle from './components/ProductTitle'
import SelectVariant from './components/Variant'
import ImageSlider from './ImageSlider'
import ModalGallery from './ImageSlider/ModalGallery'

import { useRouter } from 'next/router'
import './styles.scss'

const ProductDetail = () => {
  const locale = useSelector((state) => state.user.locale)
  const dispatch = useDispatch()
  const router = useRouter()
  const { id } = router.query
  const [loading, setLoading] = useState(true)

  const [productDetail, setProductDetail] = useState()
  const [productRecommends, setProductRecommends] = useState([])
  const [textBold, setTextBold] = useState('')

  const [count, setCount] = useState(1)
  const [countGift, setCountGift] = useState([])
  const [api, contextHolder] = notification.useNotification()
  const UserInfo = useSelector((state) => state.user)
  const { data: productGifts } = useQuery(['getProductsGift'], getProductsGift)

  const { data: productGiftColorVariant } = useQuery(
    ['getProductsGiftColorVariant'],
    getProductsGiftColorVariant,
  )

  const [visibleSuccess, setVisibleSuccess] = useState(false)

  const [currentImage, setCurrentImage] = useState()
  const [currentPositionImage, setCurrentPositionImage] = useState(1)
  const [variantProduct, setVariantProduct] = useState(null)
  const [productType, setProductType] = useState('')

  const [currentWrapperSelected, setCurrenWrapperSelected] = useState(null)

  // variant gift
  const [variantGift, setVariantGift] = useState([])

  // variant gift color
  const [variantGiftColor, setVariantGiftColor] = useState([])
  const [variantGiftColorPriceMin, setVariantGiftColorPriceMin] = useState(0)
  const [currentSelectedGiftColor, setCurrentSelectedGiftColor] = useState(null)
  const [currentSelectedGiftWithWrapping, setCurrentSelectedGiftWithWrapping] = useState(null)

  // use in modal gallery
  const [showZoomImage, setShowZoomImage] = useState(false)
  const descriptionContent =
    locale[productDetail?.descriptionHtml] ??
    locale[productDetail?.description] ??
    productDetail?.descriptionHtml ??
    productDetail?.description

  const currentSelectedDataGiftColor = useCallback(
    (isWrapping) => {
      if (isWrapping) {
        return currentSelectedGiftWithWrapping
      }
      if (currentSelectedGiftColor) {
        return currentSelectedGiftColor
      }
      return null
    },
    [currentSelectedGiftWithWrapping, currentSelectedGiftColor],
  )

  const filterProductGift = useCallback(async () => {
    const rsl = await getMetafieldProductsGiftBoxById(`gid://shopify/Product/${id}`)
    if (rsl.length > 0) {
      if (productGifts?.length) {
        const newVariantGift = productGifts.filter((doc) => rsl.includes(doc.id))
        setVariantGift(newVariantGift)
        if (newVariantGift.length) {
          setCountGift(newVariantGift.map(() => 1))
        }
      }
      if (productGiftColorVariant?.length) {
        const newVariantGiftColor = productGiftColorVariant.filter((doc) => rsl.includes(doc.id))
        setVariantGiftColor(newVariantGiftColor)
        let priceMin = 0
        newVariantGiftColor.map((doc) => {
          if (doc?.price.amount) {
            if (!priceMin) {
              priceMin = doc?.price.amount
            } else if (doc?.price.amount < priceMin) {
              priceMin = doc?.price.amount
            }
          }
        })
        setVariantGiftColorPriceMin(priceMin)
      }
    }
  }, [id, productGifts, productGiftColorVariant])

  useEffect(() => {
    if (productGifts?.length || productGiftColorVariant?.length) {
      filterProductGift()
    }
  }, [filterProductGift, productGifts, productGiftColorVariant])

  const openNotification = () => {
    api.info({
      message: `Item was added to cart`,
      placement: 'topRight',
    })
  }

  const getProductPrice = useCallback(
    (giftPrice, isWrapping) => {
      let price = Number(variantProduct?.price?.amount) ?? 0
      if (productDetail?.productType.includes(ALWAYS_BOX) || giftPrice) {
        price += +giftPrice
      }
      if (currentSelectedGiftColor && !isWrapping) {
        price += +currentSelectedGiftColor.price.amount
      }

      if (currentSelectedGiftWithWrapping && isWrapping) {
        price += +currentSelectedGiftWithWrapping.price.amount
      }

      return Math.round(price)
    },
    [
      variantProduct?.price?.amount,
      productDetail?.productType,
      currentSelectedGiftColor,
      currentSelectedGiftWithWrapping,
    ],
  )

  const getRecommendedProducts = async () => {
    const productRecommendId = getProductRecommendId()
    const products = await shopifyClient.product.fetchRecommendations(productRecommendId)
    setProductRecommends(products)
  }

  const getProductById = useCallback(async () => {
    setLoading(true)
    try {
      const product = await shopifyClient.product.fetch(`gid://shopify/Product/${id}`)
      if (!product) {
        router.push('/')
        return
      }
      if (product) {
        const firstVariant = product.variants[0]
        const price = Number(firstVariant.price?.amount || 0)
        const dataLayerItem = {
          event: 'view_item',
          ecommerce: {
            currency: firstVariant.price?.currencyCode || 'JPY',
            value: price,
            items: product.variants.map((variant) => ({
              item_name: product.title,
              item_id: id,
              price: Number(variant.price.amount),
              item_brand: product.vendor,
              item_variant: variant.title,
              quantity: 1,
            })),
          },
        }

        window.dataLayer = window.dataLayer || []
        window.dataLayer.push(dataLayerItem)
      }
      console.log('dataLayer', window.dataLayer)
      if (product?.variants?.length) {
        setVariantProduct(product?.variants[0])
      }
      if (product?.productType?.length) {
        setProductType(product?.productType)
      }
      if (product?.productType.match(regexBold)) {
        setTextBold(product?.productType.match(regexBold)[1])
      }
      setCurrentImage(product?.images?.[0]?.src)
      setProductDetail(product)
      setLoading(false)
    } catch (error) {
      router.push('/')
    }
  }, [id])

  const handleAddItemToCart = async (giftId, variant, countAdd, el, isWrapping = false) => {
    setCurrenWrapperSelected(el)
    if (countAdd > 0) {
      let cart = getCart()
      productDetail.index = variant.index
      if (cart) {
        const productCart = cart.find(
          (doc) => doc.id === productDetail.id && doc.shopify_option_id === variant.id,
        )
        if (productCart) {
          productCart.quantity = countAdd
          cart = cart.filter(
            (doc) =>
              (doc.type !== TYPE_PRODUCT.WRAPPED && doc.type !== TYPE_PRODUCT.GIFT_COLOR) ||
              (doc.shopify_parent_id !== productDetail.id && doc.shopify_option_id !== variant.id),
          )
          if (giftId) {
            cart.unshift({
              id: giftId,
              shopify_parent_id: productDetail.id,
              shopify_option_id: variant.id,
              quantity: countAdd,
              type: TYPE_PRODUCT.WRAPPED,
              productId: id,
            })
          }
          if (currentSelectedDataGiftColor(isWrapping)) {
            cart.unshift({
              id: currentSelectedDataGiftColor(isWrapping).id,
              shopify_parent_id: productDetail.id,
              shopify_option_id: variant.id,
              quantity: countAdd,
              type: TYPE_PRODUCT.GIFT_COLOR,
              productId: id,
            })
          }
        } else {
          cart.unshift({
            id: productDetail.id,
            shopify_option_id: variant.id,
            quantity: countAdd,
            type: TYPE_PRODUCT.PRODUCT,
            productId: id,
          })
          if (giftId) {
            cart.unshift({
              id: giftId,
              shopify_parent_id: productDetail.id,
              shopify_option_id: variant.id,
              quantity: countAdd,
              type: TYPE_PRODUCT.WRAPPED,
              productId: id,
            })
          }
          if (currentSelectedDataGiftColor(isWrapping)) {
            cart.unshift({
              id: currentSelectedDataGiftColor(isWrapping).id,
              shopify_parent_id: productDetail.id,
              shopify_option_id: variant.id,
              quantity: countAdd,
              type: TYPE_PRODUCT.GIFT_COLOR,
              productId: id,
            })
          }
        }
        setCart(cart)
        dispatch(initCountCart(cart.filter((doc) => doc.type === TYPE_PRODUCT.PRODUCT).length))
      } else {
        const newCart = [
          {
            id: productDetail.id,
            shopify_option_id: variant.id,
            quantity: countAdd,
            type: TYPE_PRODUCT.PRODUCT,
            productId: id,
          },
        ]
        if (giftId) {
          newCart.push({
            id: giftId,
            shopify_parent_id: productDetail.id,
            shopify_option_id: variant.id,
            quantity: countAdd,
            type: TYPE_PRODUCT.WRAPPED,
            productId: id,
          })
        }

        if (currentSelectedDataGiftColor(isWrapping)) {
          cart = cart.filter((doc) => doc.type !== TYPE_PRODUCT.GIFT_COLOR)
          cart.unshift({
            id: currentSelectedDataGiftColor(isWrapping).id,
            shopify_parent_id: productDetail.id,
            shopify_option_id: variant.id,
            quantity: countAdd,
            type: TYPE_PRODUCT.GIFT_COLOR,
            productId: id,
          })
        }
        setCart(newCart)
        dispatch(initCountCart(1))
      }
      setVisibleSuccess(true)
      // openNotification()
    }
  }

  const updateCountGift = (index, value) => {
    const newCountGift = [...countGift]
    newCountGift[index] += value
    setCountGift(newCountGift)
  }
  const handleBuyNow = async (giftId, variant, countBuyNow) => {
    if (!UserInfo.user) {
      dispatch(showModalLogin())
      return
    }
    let countBuy = countBuyNow ? countBuyNow : count
    const newCheckout = await shopifyClient.checkout.create({
      email: UserInfo.user.email,
    })

    setTimeout(() => {
      window.open(newCheckout.webUrl, '_blank')
    })

    const listItem = [
      {
        variantId: variant.id,
        quantity: countBuy,
      },
    ]
    if (giftId) {
      listItem.push({
        variantId: giftId,
        quantity: countBuy,
      })
    }

    if (currentSelectedDataGiftColor(giftId)) {
      listItem.push({
        variantId: currentSelectedDataGiftColor(giftId).id,
        quantity: countBuy,
      })
    }

    await shopifyClient.checkout.addLineItems(newCheckout.id, listItem)
  }

  function handleClickGiftColor(doc) {
    setCurrentSelectedGiftColor(currentSelectedGiftColor?.id === doc?.id ? null : doc)
  }

  function handleClickGiftColorWrapping(doc) {
    setCurrentSelectedGiftWithWrapping(currentSelectedGiftWithWrapping?.id === doc?.id ? null : doc)
  }

  useEffect(() => {
    if (id) {
      setProductRecommendId(`gid://shopify/Product/${id}`)
      getProductById()
    }
    getRecommendedProducts()
  }, [getProductById, id])

  useEffect(() => {
    if (showZoomImage) {
      document.body.classList.add('overflow-hidden')
    }
    document.body.classList.remove('overflow-hidden')
  }, [showZoomImage])
  if (loading) return <Spin size='large' fullscreen />
  return (
    <>
      <Helmet>
        <title>{productDetail?.title}</title>
        <meta name='description' content={productDetail?.description} />
      </Helmet>
      <div className={`bg-[#FBFBFB] 'product-detail'}`}>
        <div className='container content-wrapper mx-auto pb-[15px] lg:pb-[40px]'>
          <div className='p-[0.8rem] lg:pt-5 lg:pl-0'>
            <button
              type='button'
              className='bg-[#00000040] rounded-[15px] text-[#fff] border-none flex items-center gap-[7px] text-[16px] cursor-pointer h-[34px]'
              onClick={() => router.push(-1)}
            >
              <IconArrowLefV2 />
              {locale['common.back']}
            </button>
          </div>
          <div className='lg:flex gap-6'>
            <div className={`image-slider w-full mb-[15px] lg:mb-0 product-detail__images`}>
              {currentImage && (
                <div className={`bg-white border-wrapper border-0 lg:border-[0.5px] relative`}>
                  <div className='relative w-full'>
                    <img
                      onClick={() => {
                        setShowZoomImage(true)
                      }}
                      className='w-full cursor-pointer object-cover'
                      src={currentImage}
                    />
                    <span className='absolute bottom-[10px] right-[10px] bg-[#00000040] px-[15px] py-[5px] text-white rounded-[20px]'>
                      {`${currentPositionImage} / ${productDetail?.images.length}`}
                    </span>
                  </div>
                  <div className={`max-w-full px-[10px] py-[50px] mx-[20px] product-detail__thumbnails`}>
                    {productDetail?.images?.length > 3 ? (
                      <ImageSlider>
                        {productDetail?.images?.map((item, index) => (
                          <img
                            className={cx(
                              `aspect-square image-thumbnail w-[100px] h-[100px] lg:w-[145px] lg:h-[145px] object-cover`,
                              {
                                'active': currentImage === item.src,
                              },
                            )}
                            key={index}
                            src={item.src}
                            onClick={() => {
                              setCurrentImage(item.src)
                              setCurrentPositionImage(index + 1)
                            }}
                          />
                        ))}
                      </ImageSlider>
                    ) : (
                      <div className='flex items-center justify-center gap-[10px] lg:gap-[15px]'>
                        {productDetail?.images?.map((item, index) => (
                          <img
                            className={cx(
                              `aspect-square image-thumbnail w-[100px] h-[100px] lg:w-[145px] lg:h-[145px] cursor-pointer object-cover`,
                              {
                                'active': currentImage === item.src,
                              },
                            )}
                            key={index}
                            src={item.src}
                            onClick={() => {
                              setCurrentImage(item.src)
                              setCurrentPositionImage(index + 1)
                            }}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            <div className={`w-full product-detail__contents`}>
              {/* normal */}
              {!productDetail?.productType.includes(ALWAYS_BOX) && (
                <div className={`bg-white p-[16px] mb-[15px] border-wrapper border-0 lg:border-[0.5px]`}>
                  <ProductTitle
                    title={productDetail?.title.toString().replace(textBold, '')}
                    titleBold={textBold}
                  />
                  <div className='flex justify-between items-center gap-12 mb-[8px]'>
                    <Price
                      price={getProductPrice()}
                      wrapping={undefined}
                      noPrice={productDetail?.productType.includes(NO_PRICE)}
                    />
                    <AdjustNumberItem
                      value={count}
                      increaseValue={() => setCount(count + 1)}
                      decreaseValue={() => {
                        if (count > 0) setCount(count - 1)
                      }}
                    />
                  </div>
                  <SelectVariant
                    productDetail={productDetail}
                    setVariant={setVariantProduct}
                    variant={variantProduct}
                  />
                  {variantGiftColor.length > 0 && (
                    <>
                      <div className='flex flex-col md:flex-row justify-start md:items-center mb-[8px] gap-4 md:gap-5'>
                        <div className='text-xs lg:text-base mr-[5px] text-black'>
                          {locale['product.gift_wrapping']}&nbsp;
                          {(currentSelectedGiftColor?.price.amount > 0 ||
                            variantGiftColorPriceMin > 0) && (
                            <>
                              <span className='font-medium mt-[3px] text-[#9C8C6A] text-[20px] leading-[28px] lg:text-[30px] lg:leading-[40px]'>
                                ¥
                                {Math.round(
                                  currentSelectedGiftWithWrapping?.price.amount ||
                                    variantGiftColorPriceMin,
                                ) || 0}
                              </span>
                              &nbsp;
                              <span className='text-xs lg:text-base text-[#555555]'>
                                {locale['cart.tax_included']}
                              </span>
                            </>
                          )}
                        </div>
                        <div className='flex items-center gap-2 mb-[5px]'>
                          {variantGiftColor.map((doc) => (
                            <button
                              className={cx(
                                `cursor-pointer
                         text-black
                        ${
                          currentSelectedGiftColor?.id === doc.id ? '!bg-slate-300' : 'bg-white'
                        } h-10 p-[10px] border border-black text-sm rounded-full min-w-[40px]`,
                              )}
                              type='button'
                              onClick={() => handleClickGiftColor({ ...doc })}
                            >
                              {doc?.title}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className='mb-4 text-base text-black'>
                        {locale['product.gift_wrapping_description.line1']}
                        <br />
                        {locale['product.gift_wrapping_description.line2']}
                        <br />
                        {locale['product.gift_wrapping_description.line3']}
                      </div>
                    </>
                  )}

                  <GroupAction
                    variant={variantProduct}
                    handleAddItemToCart={() =>
                      handleAddItemToCart(undefined, variantProduct, count)
                    }
                    handleBuyNow={() => handleBuyNow(undefined, variantProduct)}
                    productType={productType}
                  />
                </div>
              )}

              {/* end normal */}

              {variantGift.map((el, index) => {
                return (
                  <div
                    key={el?.id}
                    className='bg-white p-[16px] mb-[15px] border-wrapper border-0 lg:border-[0.5px]'
                  >
                    <ProductTitle
                      title={productDetail?.title.toString().replace(textBold, '')}
                      titleBold={textBold}
                    />
                    <div className='flex justify-between items-center gap-12 mb-[8px]'>
                      <Price
                        price={getProductPrice(el?.price?.amount, true)}
                        wrapping={el}
                        noPrice={productDetail?.productType.includes(NO_PRICE)}
                      />
                      <AdjustNumberItem
                        value={countGift[index]}
                        increaseValue={() => updateCountGift(index, +1)}
                        decreaseValue={() => {
                          if (count > 0) updateCountGift(index, -1)
                        }}
                      />
                    </div>
                    {el && (
                      <SelectVariant
                        productDetail={productDetail}
                        setVariant={setVariantProduct}
                        variant={variantProduct}
                      />
                    )}
                    {variantGiftColor.length > 0 && (
                      <>
                        <div className='flex flex-col md:flex-row justify-start md:items-center mb-[8px] gap-4 md:gap-5'>
                          <div className='text-xs lg:text-base mr-[5px] text-black'>
                            {locale['product.gift_wrapping']}&nbsp;
                            {(currentSelectedGiftColor?.price.amount > 0 ||
                              variantGiftColorPriceMin > 0) && (
                              <>
                                <span className='font-medium mt-[3px] text-[#9C8C6A] text-[20px] leading-[28px] lg:text-[30px] lg:leading-[40px]'>
                                  ¥
                                  {Math.round(
                                    currentSelectedGiftWithWrapping?.price.amount ||
                                      variantGiftColorPriceMin,
                                  ) || 0}
                                </span>
                                &nbsp;
                                <span className='text-xs lg:text-base text-[#555555]'>
                                  {locale['cart.tax_included']}
                                </span>
                              </>
                            )}
                          </div>
                          <div className='flex items-center gap-2 mb-[5px]'>
                            {variantGiftColor.map((doc) => (
                              <button
                                type='button'
                                className={cx(
                                  `cursor-pointer
                           text-black
                          ${
                            currentSelectedGiftWithWrapping?.id === doc.id
                              ? '!bg-slate-300'
                              : 'bg-white'
                          }
                          h-10 p-[10px] border border-black text-sm rounded-full min-w-[40px]`,
                                )}
                                onClick={() => handleClickGiftColorWrapping(doc)}
                              >
                                {doc?.title}
                              </button>
                            ))}
                          </div>
                        </div>
                        <div className='mb-4 text-base text-black'>
                          {locale['product.gift_wrapping_description.line1']}
                          <br />
                          {locale['product.gift_wrapping_description.line2']}
                          <br />
                          {locale['product.gift_wrapping_description.line3']}
                        </div>
                      </>
                    )}

                    <GroupAction
                      variant={variantProduct}
                      productType={productType}
                      handleAddItemToCart={() =>
                        handleAddItemToCart(el?.id, variantProduct, countGift[index], el, true)
                      }
                      handleBuyNow={() => handleBuyNow(el?.id, variantProduct, countGift[index])}
                    />
                  </div>
                )
              })}
              <ShowMoreText
                text={descriptionContent}
                className='bg-white p-[16px] border-wrapper font-normal text-black text-[12px] leading-[24px] border-0 lg:border-[0.5px] lg:text-[16px] text-justify'
              />
            </div>
          </div>
        </div>
        {showZoomImage && (
          <ModalGallery
            currentImage={currentImage}
            currentPosition={currentPositionImage}
            images={productDetail?.images || []}
            onClose={() => setShowZoomImage(false)}
          />
        )}
        {visibleSuccess && (
          <ModalAddToCart
            product={productDetail}
            setVisibleSuccess={setVisibleSuccess}
            currentSelectedGiftColor={currentSelectedDataGiftColor(currentWrapperSelected)}
            wrapperSelected={currentWrapperSelected}
          />
        )}
        {productRecommends?.length > 0 && (
          <RecommendForYou
            title='Recommended Products For You'
            productRecommends={productRecommends}
            className='pb-[30px] bg-white lg:pb-[50px] mb-0'
          />
        )}
      </div>
    </>
  )
}

export default ProductDetail

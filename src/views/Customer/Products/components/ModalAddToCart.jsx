import { useSelector } from 'react-redux'
import ProductItem from 'views/Customer/Cart/components/ProductItem'

import ButtonComponent from 'components/Button'

import IconCheckCircleSuccess from 'resourse/svg/IconCheckCircleSuccess'
import { getCart } from 'services/cart'

import { ALWAYS_BOX, CART_PAGE_ROUTE, TYPE_PRODUCT } from 'common/constant'
import { useRouter } from 'next/router'

const ModalAddToCart = ({
  product,
  setVisibleSuccess,
  currentSelectedGiftColor,
  wrapperSelected,
}) => {
  const locale = useSelector((state) => state.user.locale)
  const router = useRouter()
  const cart = getCart()

  const cartFilter = cart.filter((doc) => {
    if (product.productType.includes(ALWAYS_BOX)) {
      return doc.type !== TYPE_PRODUCT.WRAPPED
    }
    return doc.type !== TYPE_PRODUCT.GIFT_COLOR
  })
  const extractNumericId = (gid) => {
    const parts = gid.split('/')
    return parts[parts.length - 1]
  }

  const goToCart = () => {
    const firstVariant = product.variants[0]
    const price = Number(firstVariant.price?.amount || 0)
    const dataLayerAddToCart = {
      event: 'add_to_cart',
      ecommerce: {
        currency: firstVariant.price?.currencyCode || 'JPY',
        value: price,
        items: product.variants.map((variant) => ({
          item_name: product.title,
          item_id: extractNumericId(product.id),
          price: Number(variant.price.amount),
          item_brand: product.vendor,
          item_variant: variant.title,
          quantity: 1,
        })),
      },
    }

    window.dataLayer = window.dataLayer || []
    window.dataLayer.push(dataLayerAddToCart)
    console.log('dataLayer cart', window.dataLayer)
    router.push(CART_PAGE_ROUTE, { state: { productAddedCart: product.id } })
  }

  const onClose = () => {
    if (setVisibleSuccess) setVisibleSuccess(false)
  }

  return (
    <div className='fixed top-0 right-0 left-0 bottom-0 flex items-center justify-center bg-[#00000091] z-[9999999]'>
      <div className='bg-white p-[16px] rounded-[23px] w-[90%] max-w-[565px]'>
        <div className='text-center mb-[8px] bg-[#F5F5F5] p-[10px] rounded-[6px]'>
          <IconCheckCircleSuccess />
          <h3 className='text-[#07A315] text-[16px] font-medium leading-[24px] text-center mb-[12px] lg:text-[20px] lg:leading-[40px]'>
            {locale['modal.add_to_cart.message']}
          </h3>
          <ProductItem
            product={product}
            currentSelectedGiftColor={currentSelectedGiftColor}
            wrapperSelected={wrapperSelected}
          />
        </div>
        <ButtonComponent
          className='w-full mb-[15px] lg:mb-[20px]'
          variant='primary'
          title={`${locale['modal.add_to_cart.view_cart']}: ${cartFilter.length || 0})`}
          onClick={goToCart}
        />
        <p
          className='w-full underline text-[#000] text-center text-[14px] lg:text-[16px] cursor-pointer'
          onClick={onClose}
        >
          {locale['modal.add_to_cart.continue_shopping']}
        </p>
      </div>
    </div>
  )
}

export default ModalAddToCart

import { useCallback } from 'react'

import { Typography } from 'antd'
import cx from 'classnames'
import { NumericFormat } from 'react-number-format'

import { ALWAYS_BOX } from 'common/constant'
import { useRouter } from 'next/router'

const { Title } = Typography

const ProductItem = ({ product, currentSelectedGiftColor, wrapperSelected }) => {
  const router = useRouter()
  const onNagivate = () => {
    router.push(`/products/${product?.id.split('Product/')?.[1]}`)
  }

  const getProductPrice = useCallback(() => {
    let price = 0
    if (product.index !== undefined) {
      price = product?.variants[product.index]?.price?.amount || 0
      price = Number(price)
    }
    if (product.index === undefined) {
      price = product?.variants[0]?.price?.amount || 0
      price = Number(price)
    }
    if (product?.checkVariant) {
      price = product.checkVariant.price.amount
      price = Number(price)
    }
    if (wrapperSelected) {
      let priceProd = Number(wrapperSelected.price?.amount) || 0
      price += priceProd
      price = Number(price)
    }

    // check product type is alway_box
    if (product.productType.includes(ALWAYS_BOX)) {
      // set product price if has wrapper
      if (product && product.wrapper) {
        price = Number(price) + Number(product.wrapper.price?.amount) || 0
        price = Number(price)
      }
      // set product price if has wrapperGiftColor
      if (currentSelectedGiftColor) {
        // set price if use selected gift color
        const priceProd = Number(currentSelectedGiftColor.price?.amount) || 0
        price += priceProd
        price = Number(price)
      }
    } else {
      if (currentSelectedGiftColor) {
        // set price if use selected gift color
        const priceProd = Number(currentSelectedGiftColor.price?.amount) || 0
        price += priceProd
        price = Number(price)
      }
    }
    return Math.round(price)
  }, [product])

  return (
    <div
      className={cx(
        'bg-white flex items-center relative border-solid border-[0.3px] border-gray-200 rounded-[8px] lg:w-[510px]',
      )}
    >
      <img
        className='h-[100px] aspect-square object-cover border-solid border-0 border-r border-gray-200 p-[10px] cursor-pointer'
        cursor-pointer
        src={
          product?.checkVariant?.images?.[0]?.src ||
          product?.images?.[0]?.src ||
          product?.variants?.[0]?.images?.[0]?.src
        }
        onClick={onNagivate}
      />
      <div className='px-[15px] flex-1'>
        <Title
          level={3}
          className='font-medium text-left text-[14px] leading-[22px] lg:text-[16px] lg:leading-[24px] text-black mb-[10px] cursor-pointer min-h-[48px] pt-2'
          onClick={onNagivate}
        >
          {product?.title}
          {product?.checkVariant && product?.checkVariant?.title != 'Default Title'
            ? ` (${product?.checkVariant?.title})`
            : ''}
        </Title>
        <div className='flex items-center justify-between'>
          <NumericFormat
            className='text-[14px] leading-[22px] lg:text-[16px] lg:leading-[24px] text-[#9C8C6A] font-medium mb-0'
            displayType='text'
            value={getProductPrice()}
            prefix='¥ '
            thousandSeparator=','
            decimalScale={3}
          />
          {/* <p className='text-[12px] leading-[20px] lg:text-[16px] lg:leading-[24px] text-[#0000008c] font-medium mb-0'>
            {location?.pathname?.includes('/product') ? (
              <NumericFormat
                displayType='text'
                value={product?.soldout ?? 0}
                suffix=' 個売れた'
                decimalScale={3}
              />
            ) : (
              '税込'
            )}
          </p> */}
        </div>
      </div>
    </div>
  )
}

export default ProductItem

import React, { useEffect, useState } from 'react'

import { useQuery } from '@tanstack/react-query'
import { Typography } from 'antd'
import cx from 'classnames'
import { NumericFormat } from 'react-number-format'
import { useDispatch, useSelector } from 'react-redux'
import { COMING_SOON, NO_PRICE, ALWAYS_BOX, regexBold } from 'common/constant'

import { getProductsGift } from 'services/cart'
import { getMetafieldProductsGiftBoxById } from 'services/recommend'
import { initWarning } from 'store/warning'

import { WARNING_AGE, WARNING_AGE_VAL } from 'common/constant'
import { useRouter } from 'next/router'

const { Title } = Typography
// "ワイン"
const ProductItem = ({ product, className }) => {
  const router = useRouter()
  const dispatch = useDispatch()
  const locale = useSelector((state) => state.user.locale)

  const [variantGift, setVariantGift] = useState([])
  const [textBold, setTextBold] = useState('')

  const { data: productGifts } = useQuery(['getProductsGift'], getProductsGift)

  const onNavigate = (url) => {
    if (
      (product?.title &&
        !product?.title.toString().includes('ワイン') &&
        !product?.title.toString().includes('ジン')) ||
      localStorage.getItem(WARNING_AGE) == WARNING_AGE_VAL.ENOUGH
    ) {
      router.push(`/products/${product?.id.split('Product/')?.[1]}`)
    } else {
      dispatch(
        initWarning({
          showModal: true,
          linkRedriect: `/products/${product?.id.split('Product/')?.[1]}`,
        }),
      )
    }
  }

  useEffect(() => {
    if (productGifts?.length) {
      filterProductGift()
    }
  }, [productGifts])

  useEffect(() => {
    if (product?.productType.match(regexBold)) {
      setTextBold(product?.productType.match(regexBold)[1])
    }
  }, [product])

  const filterProductGift = async () => {
    const rsl = await getMetafieldProductsGiftBoxById(`${product.id}`)

    if (rsl.length > 0) {
      const newVariantGift = productGifts.filter((doc) => rsl.includes(doc.id))
      if (product.productType.includes(ALWAYS_BOX)) {
        const variantWrapper = [].concat(
          newVariantGift.map((item) => ({
            ...item,
            price: {
              ...item.price,
              amount: Number(item.price.amount) + Number(product?.variants[0]?.price.amount || 0),
            },
          })),
        )
        setVariantGift(variantWrapper)
        return
      } else {
        const variantWrapper = (product?.variants || []).concat(
          newVariantGift.map((item) => ({
            ...item,
            price: {
              ...item.price,
              amount: Number(item.price.amount) + Number(product?.variants[0]?.price.amount || 0),
            },
          })),
        )
        setVariantGift(variantWrapper)
        return
      }
    }
    setVariantGift(product?.variants)
  }

  return (
    <div className={cx(className)}>
      <div className='bg-white relative border-[0.715px] border-[#EDEDED] border-solid'>
        <div className='aspect-video'>
          <img
            className='object-cover aspect-square w-full h-[auto] cursor-pointer'
            src={product?.images?.[0]?.src || product?.variants?.[0]?.images?.[0]?.src}
            onClick={onNavigate}
          />
        </div>

        <div className='p-[8px] border-solid border-0 border-t border-gray-200'>
          <Title
            level={3}
            className='font-normal text-black mb-[4px] cursor-pointer text-[12px] leading-[20px] lg:text-[16px] lg:leading-[24px]'
            onClick={onNavigate}
          >
            {String(locale[product?.title] ?? product?.title)
              .toString()
              .replace(textBold, '')}
            {textBold && <strong> {product?.productType.match(regexBold)[1]}</strong>}
          </Title>
          {!product?.productType.includes(NO_PRICE) &&
            variantGift &&
            Array.isArray(variantGift) &&
            variantGift.map((item) => (
              <div key={item.id}>
                <NumericFormat
                  className='text-black font-normal mb-0 text-[12px] leading-[20px] lg:text-[16px] lg:leading-[24px]'
                  displayType='text'
                  value={Math.round(item.price.amount)}
                  prefix={
                    item?.title
                      ? `${
                          item?.title?.toLowerCase() !== 'default title' ? `＜${item?.title}＞` : ''
                        } ¥ `
                      : '¥ '
                  }
                  thousandSeparator=','
                  decimalScale={3}
                />
                <span className='text-black font-normal ml-[5px] text-[12px] leading-[20px] lg:text-[16px] lg:leading-[24px]'>
                  (税込)
                </span>
              </div>
            ))}
          {product?.productType.includes(NO_PRICE) && (
            <span className='text-black ml-[5px] text-[12px] leading-[20px] lg:text-[16px] lg:leading-[24px] font-bold'>
              {product?.productType.includes(ALWAYS_BOX) && (
                <span className='text-black ml-[5px] text-[12px] leading-[20px] lg:text-[16px] lg:leading-[24px] font-normal'>
                  ＜箱 入＞
                </span>
              )}
              {locale['product.price_TBA']}
            </span>
          )}
        </div>

        {!product?.availableForSale && (
          <div
            className='absolute top-0 left-0 right-0 bottom-0 bg-[#00000059] flex items-center justify-center flex-col cursor-pointer'
            onClick={onNavigate}
          >
            <p className='max-md:text-[20px] max-md:leading-[28px] text-white font-bold text-[30px] leading-[40px]'>
              売り切れ
            </p>
            <p className='max-md:text-[20px] max-md:leading-[28px] text-white font-medium text-[30px] leading-[40px]'>
              Sold out
            </p>
          </div>
        )}

        {/* <div className='bg-gray absolute top-0 left-0 right-0 bottom-0 w-full h-full'>
        <p></p>
        <p></p>
      </div> */}

        {product?.productType.includes(COMING_SOON) && (
          <div
            className='absolute top-0 left-0 right-0 bottom-0 bg-[#00000059] flex items-center justify-center flex-col cursor-pointer'
            onClick={onNavigate}
          >
            <p className='max-md:text-[20px] max-md:leading-[28px] text-white font-bold text-[30px] leading-[40px]'>
              近日発売
            </p>
            <p className='max-md:text-[20px] max-md:leading-[28px] text-white font-medium text-[30px] leading-[40px]'>
              Coming soon
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductItem

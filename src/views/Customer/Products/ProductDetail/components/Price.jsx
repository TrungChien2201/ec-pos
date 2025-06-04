import React from 'react'
import { useTranslation } from 'react-i18next'

import { NumericFormat } from 'react-number-format'

const Price = ({ price, wrapping, noPrice = false }) => {
  const { t } = useTranslation()
  return (
    <React.Fragment>
      {!noPrice ? (
        <NumericFormat
          displayType='text'
          value={price}
          thousandSeparator={true}
          decimalScale={0}
          fixedDecimalScale={true}
          renderText={(formattedValue) => (
            <span className='font-medium text-[#9C8C6A] text-[20px] leading-[28px] lg:text-[30px] lg:leading-[40px]'>
              {wrapping ? `＜${wrapping?.title}＞ ¥` : '¥'}
              {formattedValue}
              <span className='relative -top-1 ml-2 font-normal text-[#555] text-[12px] leading-[20px] lg:text-[16px] lg:leading-[24px]'>
                {t('cart.tax_included')}
              </span>
            </span>
          )}
        />
      ) : (
        <span className='font-medium text-[#9C8C6A] text-[20px] leading-[28px] lg:text-[30px] lg:leading-[40px]'>
          {wrapping ? `＜${wrapping?.title}＞ ` : ''}
          {t('product.price_TBA')}
        </span>
      )}
    </React.Fragment>
  )
}
export default Price

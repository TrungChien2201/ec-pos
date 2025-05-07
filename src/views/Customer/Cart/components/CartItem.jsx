import React, { useCallback } from 'react'
import { useSelector } from 'react-redux'

import { Checkbox } from 'antd'
import { NumericFormat } from 'react-number-format'

import AdjustNumberItem from 'components/common/AdjustNumberItem/AdjustNumberItem'

import { ALWAYS_BOX } from 'common/constant'

import GiftItem from './GiftItem'
import ProductItem from './ProductItem'

const CartItem = ({
  cartItem,
  handleUpdateCartItem,
  handleRemoceCartItem,
  handleCheckCartItem,
  handleRemoveWrapped,
}) => {
  const locale = useSelector((state) => state.user.locale)
  const { id } = cartItem.checkVariant
  const productId = cartItem.id
  const { checked } = cartItem
  const value = cartItem.quantity
  const valueWrapped = cartItem.wrapper?.quantity || 0
  const priceTotal =
    cartItem.quantity * (cartItem?.checkVariant && cartItem?.checkVariant.price.amount) ||
    cartItem.variants[0].price.amount
  const getProductPriceTotal = useCallback(() => {
    let price = 0
    if (cartItem.index) {
      price = cartItem?.variants[cartItem.index]?.price?.amount || 0
      price = Number(price)
    }
    if (cartItem.index === undefined) {
      price = cartItem?.variants[0]?.price?.amount || 0
      price = Number(price)
    }
    if (cartItem?.checkVariant) {
      price = cartItem.checkVariant.price.amount
      price = Number(price)
    }
    if (cartItem.productType.includes(ALWAYS_BOX)) {
      // set product price if has wrapper
      if (cartItem && cartItem.wrapper) {
        price = Number(price) + Number(cartItem.wrapper.price?.amount) || 0
        price = Number(price)
      }
    }
    return cartItem.quantity * Math.round(price)
  }, [cartItem])
  const { currencyCode } = cartItem.variants[0].price

  const handleIncreaseAmount = (lineItemId) => {
    handleUpdateCartItem(lineItemId, value + 1)
  }

  const handleDecreaseAmount = (lineItemId) => {
    if (value >= 1) {
      handleUpdateCartItem(lineItemId, value - 1)
    }
  }

  return (
    <div className='bg-white'>
      <div className='items-center py-[16px] lg:py-[30px] px-[20px] mb-[11px] flex gap-[15px]'>
        <Checkbox
          checked={cartItem?.checked}
          name={id}
          onChange={(e) => handleCheckCartItem(e, id)}
          className='scale-[1.3]'
        />
        <div className='flex flex-1 flex-col lg:flex-row lg:justify-between lg:items-center'>
          <ProductItem product={cartItem} />
          <div className='flex flex-row-reverse items-center justify-between mt-[10px] lg:mt-0 lg:block'>
            <div className='flex gap-[8px] lg:mb-[11px] items-center'>
              <AdjustNumberItem
                value={value}
                increaseValue={() => handleIncreaseAmount(id)}
                decreaseValue={() => handleDecreaseAmount(id)}
              />
              <img
                src='images/image-50.svg'
                className='cursor-pointer'
                width={18}
                height={18}
                onClick={() => handleRemoceCartItem(productId, id)}
              />
            </div>
            <div className='flex items-center gap-[5px] text-[14px] leading-[22px] lg:text-[14px] lg:leading-[22px]'>
              <span className='text-black opacity-[85%] font-medium'>
                {locale['cart.subtotal']}
              </span>
              <NumericFormat
                displayType='text'
                className='text-light-yellow'
                value={getProductPriceTotal()}
                thousandSeparator=','
                decimalScale={3}
                prefix='¥ '
              />
            </div>
          </div>
        </div>
      </div>

      {cartItem.wrapper && !cartItem.productType.includes(ALWAYS_BOX) && (
        <div className='items-center pb-[16px] px-[20px] mb-[11px] flex gap-[15px]'>
          <div className='flex flex-1 flex-col lg:flex-row lg:justify-between lg:items-center'>
            <GiftItem product={cartItem.wrapper} />
            <div className='flex flex-row-reverse items-center justify-between mt-[10px] lg:mt-0 lg:block'>
              <div className='flex gap-[8px] lg:mb-[11px] items-center'>
                <AdjustNumberItem
                  value={value}
                  increaseValue={() => handleIncreaseAmount(id)}
                  decreaseValue={() => handleDecreaseAmount(id)}
                />
                <img
                  src='images/image-50.svg'
                  className='cursor-pointer'
                  width={18}
                  height={18}
                  onClick={() => handleRemoceCartItem(productId, id, true)}
                />
              </div>
              <div className='flex items-center gap-[5px] text-[14px] leading-[22px] lg:text-[14px] lg:leading-[22px]'>
                <span className='text-black opacity-[85%] font-medium'>
                  {locale['cart.subtotal']}
                </span>
                <NumericFormat
                  displayType='text'
                  className='text-light-yellow'
                  value={Math.round(cartItem.quantity * cartItem.wrapper.price.amount)}
                  thousandSeparator=','
                  decimalScale={3}
                  prefix='¥ '
                />
              </div>
            </div>
          </div>
        </div>
      )}
      {cartItem.wrapperGiftColor && (
        <div className='items-center pb-[16px] px-[20px] mb-[11px] flex gap-[15px]'>
          <div className='flex flex-1 flex-col lg:flex-row lg:justify-between lg:items-center'>
            <GiftItem product={cartItem.wrapperGiftColor} />
            <div className='flex flex-row-reverse items-center justify-between mt-[10px] lg:mt-0 lg:block'>
              <div className='flex gap-[8px] lg:mb-[11px] items-center'>
                <AdjustNumberItem
                  value={value}
                  increaseValue={() => handleIncreaseAmount(id)}
                  decreaseValue={() => handleDecreaseAmount(id)}
                />
                <img
                  src='images/image-50.svg'
                  className='cursor-pointer'
                  width={18}
                  height={18}
                  onClick={() => handleRemoceCartItem(productId, id, false, true)}
                />
              </div>
              <div className='flex items-center gap-[5px] text-[14px] leading-[22px] lg:text-[14px] lg:leading-[22px]'>
                <span className='text-black opacity-[85%] font-medium'>
                  {locale['cart.subtotal']}
                </span>
                <NumericFormat
                  displayType='text'
                  className='text-light-yellow'
                  value={Math.round(cartItem.quantity * cartItem.wrapperGiftColor.price.amount)}
                  thousandSeparator=','
                  decimalScale={3}
                  prefix='¥ '
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CartItem

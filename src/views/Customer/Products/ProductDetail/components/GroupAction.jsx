import React from 'react'
import { useSelector} from 'react-redux'

import ButtonComponent from 'components/Button'
import { COMING_SOON } from 'common/constant'
import IconCart from 'resourse/svg/IconCart'
import IconCartDisabled from 'resourse/svg/IconCartDisabled'

const GroupAction = ({ variant, handleAddItemToCart, handleBuyNow, productType }) => {
  const locale = useSelector((state) => state.user.locale)
  return (
    <div>
      <ButtonComponent
        variant='ghost'
        className='w-full mb-[8px] flex items-center justify-center gap-[8px]'
        title={locale['common.add_to_cart']}
        prefixIcon={
          variant?.available ? (
            <IconCart className='w-[16px] lg:w-[20px]' />
          ) : (
            <IconCartDisabled className='w-[16px] lg:w-[20px]' />
          )
        }
        onClick={handleAddItemToCart}
        disabled={!variant?.available || productType.includes(COMING_SOON)}
      />
      <ButtonComponent
        variant='primary'
        className='w-full'
        title={locale['common.buy_now']}
        onClick={handleBuyNow}
        disabled={!variant?.available || productType.includes(COMING_SOON)}
      />
    </div>
  )
}

export default GroupAction

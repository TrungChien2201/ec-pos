import React from 'react'
import { useTranslation } from 'react-i18next'

import ButtonComponent from 'components/Button'
import { COMING_SOON } from 'common/constant'
import IconCart from 'resourse/svg/IconCart'
import IconCartDisabled from 'resourse/svg/IconCartDisabled'

const GroupAction = ({ variant, handleAddItemToCart, handleBuyNow, productType }) => {
  const { t } = useTranslation()
  return (
    <div>
      <ButtonComponent
        variant='ghost'
        className='w-full mb-[8px] flex items-center justify-center gap-[8px]'
        title={t('common.add_to_cart')}
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
        title={t('common.buy_now')}
        onClick={handleBuyNow}
        disabled={!variant?.available || productType.includes(COMING_SOON)}
      />
    </div>
  )
}

export default GroupAction

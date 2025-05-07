import { useDispatch, useSelector } from 'react-redux'

import { initWarning } from 'store/warning'

import { WARNING_AGE, WARNING_AGE_VAL } from 'common/constant'
import { useRouter } from 'next/router'

const ProductItemSlider = ({ type, product }) => {
  const router = useRouter()
  const dispatch = useDispatch()
  const locale = useSelector((state) => state.user.locale)

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

  return (
    <div
      className='h-full border-[0.75px] border-solid border-gray-200 cursor-pointer relative'
      onClick={onNavigate}
    >
      <div className='aspect-video'>
        <img
          className='object-cover aspect-square w-full h-[auto] cursor-pointer'
          src={product?.images?.[0]?.src || product?.variants?.[0]?.images?.[0]?.src}
          onClick={onNavigate}
        />
      </div>
      <div className='p-[8px] border-solid border-0 border-t border-gray-200 bg-white'>
        <p className='font-medium text-[16px] leading-[24px] text-black two-line min-h-[50px] mt-[8px] mb-[4px]'>
          {locale[product?.title] ?? product?.title}
        </p>
        {type && (
          <div className='min-w-[123px] text-center bg-[#E8E8E8] text-[#232323] px-[8px] py-[4px] rounded-[8px] w-fit text-[12px] leading-[22px] lg:text-[14px]'>
            {type}
          </div>
        )}
      </div>
      {!product?.availableForSale && (
        <div
          className='absolute top-0 left-0 right-0 bottom-0 bg-[#00000059] flex items-center justify-center flex-col cursor-pointer'
          onClick={onNavigate}
        >
          <p className='text-white font-bold text-[30px] leading-[40px]'>
            {locale[common.sold_out]}
          </p>
        </div>
      )}
    </div>
  )
}

export default ProductItemSlider

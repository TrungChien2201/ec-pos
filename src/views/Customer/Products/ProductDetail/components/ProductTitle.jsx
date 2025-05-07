import React from 'react'
import { useSelector } from 'react-redux'

const ProductTitle = ({ title, titleBold }) => {
  const locale = useSelector((state) => state.user.locale)
  return (
    <div className='mb-[8px]'>
      <p className='font-normal text-[#000000] text-[14px] leading-[22px] lg:text-[30px] lg:leading-[40px]'>
        {locale[title] ?? title} {titleBold ? <strong> {locale[titleBold] ?? titleBold}</strong> : ''}
      </p>
    </div>
  )
}

export default ProductTitle

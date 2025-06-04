import React from 'react'

const ProductTitle = ({ title, titleBold }) => {
  return (
    <div className='mb-[8px]'>
      <p className='font-normal text-[#000000] text-[14px] leading-[22px] lg:text-[30px] lg:leading-[40px]'>
        {title} {titleBold ? <strong> {titleBold}</strong> : ''}
      </p>
    </div>
  )
}

export default ProductTitle

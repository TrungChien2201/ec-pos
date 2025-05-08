import React from 'react'

// Use string paths for images
const Img1 = 'images/bucking-ham/baner.png'
const Img2 = 'images/bucking-ham/baner-mb.png'
const Img3 = 'images/bucking-ham/logo.png'
const Img4 = 'images/bucking-ham/logo-mb.png'
const Img5 = 'images/bucking-ham/section1.png'
const Img6 = 'images/bucking-ham/section1-mb.png'
const Img7 = 'images/bucking-ham/section2.png'
const Img8 = 'images/bucking-ham/section2-mb.png'
const Img9 = 'images/bucking-ham/section3.png'
const Img10 = 'images/bucking-ham/section3-mb.png'
const Img11 = 'images/bucking-ham/1.webp'
const ImgHorizontalDivide = 'images/horizontal-divide.png'

const BuckinghamSelection = () => {
  return (
    <div className='bg-white'>
      <div className='hidden md:block'>
        <img src={Img1} alt='' className='w-full' />
      </div>
      <div className='md:hidden'>
        <img src={Img2} alt='' className='w-full' />
      </div>
      <div className='container container--medium mx-auto'>
        <div className='flex justify-center py-[24px] overflow-x-hidden'>
          <img
            src={ImgHorizontalDivide}
            alt=''
            className='object-cover object-center h-[45px] max-md:h-[32px] w-full'
          />
        </div>
        <div className='flex justify-center'>
          <div className='hidden md:block'>
            <img src={Img3} alt='' className='w-full' />
          </div>
          <div className='md:hidden'>
            <img src={Img4} alt='' className='w-full' />
          </div>
        </div>
        <div className='flex justify-center py-[24px] overflow-x-hidden'>
          <img
            src={ImgHorizontalDivide}
            alt=''
            className='object-cover object-center h-[45px] max-md:h-[32px] w-full'
          />
        </div>
        <div className='hidden md:block'>
          <img src={Img5} alt='' className='w-full' />
        </div>
        <div className='md:hidden'>
          <img src={Img6} alt='' className='w-full' />
        </div>
        <div className='hidden md:block'>
          <img src={Img7} alt='' className='w-full' />
        </div>
        <div className='md:hidden'>
          <img src={Img8} alt='' className='w-full' />
        </div>
        <div className='hidden md:block'>
          <img src={Img9} alt='' className='w-full' />
        </div>
        <div className='md:hidden'>
          <img src={Img10} alt='' className='w-full' />
        </div>
        <div className='flex justify-center py-[24px] overflow-x-hidden'>
          <img
            src={ImgHorizontalDivide}
            alt=''
            className='object-cover object-center h-[45px] max-md:h-[32px] w-full'
          />
        </div>
        <div className='flex justify-center'>
          <img src={Img11} alt='' className='w-full max-w-[433px] h-auto' />
        </div>
      </div>
    </div>
  )
}

export default BuckinghamSelection

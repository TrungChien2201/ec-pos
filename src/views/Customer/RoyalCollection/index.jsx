import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'

import BaseAnimation from 'components/common/BaseAnimation/BaseAnimation'

// Use string paths instead of direct imports
const ImgHorizontalDivide = 'images/horizontal-divide.png'
const Img1 = 'images/royal/1.webp'
import BuyOnline from './components/BuyOnline'

const RoyalCollection = () => {
  const router = useRouter()
  const locale = useSelector((state) => state.user.locale)
  const menus = useSelector((state) => state.menus.menus)

  const collectionId = useMemo(() => {
    const premiumWines = menus.find((item) => item.title === locale['menu.premium_wines.value'])

    if (!premiumWines?.childs) return ''
    const wine = premiumWines?.childs.find((item) => item.title === 'Van Biljon Cinq Wines')
    return wine?.id
  }, [menus])

  return (
    <BaseAnimation>
      <div className='bg-white overflow-hidden'>
        <div className='w-full p-[20px] flex flex-col items-center justify-center text-center '>
          <p className='text-basic text-[38px] leading-[46px] max-md:text-[20px] max-md:leading-[28px] font-["Spectral"]'>
            {locale['premium_wines.title']}
          </p>
          <p className='text-basic text-[20px] leading-[28px] max-md:text-[14px] max-md:leading-[22px]'>
            {locale['premium_wines.description']}
          </p>
        </div>

        <div className='flex justify-center '>
          <img src='images/image-78.svg' className='w-full lg:w-[unset] h-auto' />
        </div>
        <div className=''>
          <div className='flex justify-center w-full max-[1160px]:hidden'>
            <img src='images/image-91.svg' className='w-full h-auto' />
          </div>

          <div className='flex justify-center w-full min-[1161px]:hidden'>
            <img src='images/image-82.svg' className='w-full h-auto' />
          </div>

          <div className=''>
            <div className='w-full p-[20px] flex flex-col items-center justify-center text-center pt-8 lg:pt-16'>
              <p className='text-basic text-[38px] leading-[46px] max-md:text-[20px] max-md:leading-[28px] font-["Spectral"]'>
                {locale['premium_wines.heading_1']}
              </p>
              <p className='text-basic text-[20px] leading-[28px] max-md:text-[14px] max-md:leading-[22px] mt-[10px]'>
                {locale['premium_wines.sub_heading']}
              </p>
            </div>

            <div className='h-auto flex flex-wrap lg:flex-nowrap px-[16px] xl:px-[unset] gap-[10px] lg:gap-[20px] max-w-[1280px] mx-auto max-lg:flex-col-reverse'>
              <div className='lg:basis-1/2 w-full h-auto'>
                <img src='images/image-94.svg' className='w-full h-auto' />
              </div>

              <div className='lg:basis-1/2 w-full h-auto'>
                <img src='images/image-95.svg' className='w-full h-auto' />
              </div>
            </div>

            <div className='h-auto flex flex-wrap lg:flex-nowrap px-[16px] xl:px-[unset] gap-[10px] lg:gap-[20px] max-w-[1280px] mx-auto mt-[10px]'>
              <p className='text-[11px] lg:text-[14px]'>{locale['premium_wines.two_col_desc']}</p>
            </div>

            <div className='w-full p-[20px] flex flex-col items-center justify-center text-center pt-8 lg:pt-16'>
              <p className='text-basic text-[38px] leading-[46px] max-md:text-[20px] max-md:leading-[28px] font-["Spectral"]'>
                {locale['premium_wines.heading_2']}
              </p>
            </div>

            <div className='max-w-[1280px] mx-auto h-auto flex flex-wrap lg:flex-nowrap px-[16px] xl:px-[unset] py-[30px] max-[650px]:pb-0 text-[14px] md:text-[16px] leading-[32px] gap-[20px] lg:gap-[unset] lg:gap-x-[20px]'>
              <div className='lg:basis-1/2 w-full h-auto max-[650px]:whitespace-pre-line text-[1rem]'>
                <p className='mb-2 lg:mb-8 text-center lg:text-left'>
                  {locale['premium_wines.section1_col1_line1']}
                </p>
                <p className='text-[0.875rem]'>{locale['premium_wines.section1_col1_line2']}</p>
              </div>

              <div className='lg:basis-1/2 w-full h-auto'>
                <p className='mb-2 lg:mb-4 max-[650px]:whitespace-pre-line max-[650px]:text-[14px]'>
                  {locale['premium_wines.section1_col2_line1']}
                  <br />
                  {locale['premium_wines.section1_col2_line2']}
                </p>

                <p className='text-[0.75rem] md:text-[14px] max-[650px]:whitespace-pre-line'>
                  {locale['premium_wines.section1_col2_line3']}
                  <br />
                  {locale['premium_wines.section1_col2_line4']}
                </p>
              </div>
            </div>

            <div className='max-w-[1280px] h-auto flex flex-wrap lg:flex-nowrap mx-auto pt-[16px] s:pt-1 max-xl:px-[15px] justify-left lg:justify-center lg:gap-x-[20px]'>
              <div className='md:basis-1/3 basis-1/2 p-[5px] lg:p-[unset] h-auto'>
                <img
                  src='images/image-129.svg'
                  className='w-full h-auto max-[650px]:rounded-[0.5rem]'
                />
              </div>
              <div className='md:basis-1/3 basis-1/2 p-[5px] lg:p-[unset] h-auto'>
                <img
                  src='images/image-130.svg'
                  className='w-full h-auto max-[650px]:rounded-[0.5rem]'
                />

                <p className='text-[11px] lg:text-[14px] mt-2'>{locale['premium_wines.name']}</p>
              </div>
              <div className='md:basis-1/3 basis-1/2 p-[5px] lg:p-[unset] h-auto'>
                <img
                  src='images/image-131.svg'
                  className='w-full h-auto  max-[650px]:rounded-[0.5rem]'
                />
              </div>
            </div>

            <div className='max-w-[1280px] mx-auto h-auto flex flex-wrap lg:flex-nowrap px-[16px] xl:px-[unset] py-[30px] max-[650px]:pt-[20px] lg:pb-28 text-[14px] md:text-[16px] leading-[32px] gap-x-[20px]'>
              <div className='lg:basis-1/2 w-full h-auto'>
                <p className='mb-2 lg:mb-[unset] max-[650px]:whitespace-pre-line max-[650px]:text-[0.875rem]'>
                  {locale['premium_wines.section2_col1_line1']}
                </p>
              </div>
              <div className='lg:basis-1/2 w-full h-auto max-[650px]:text-[1rem]'>
                <p>
                  {locale['premium_wines.section2_col2_line1']}
                  <p>{locale['premium_wines.section2_col2_line2']}</p>
                  <p>{locale['premium_wines.section2_col2_line3']}</p>
                  <p>{locale['premium_wines.section2_col2_line4']}</p>
                  <p>{locale['premium_wines.section2_col2_line5']}</p>
                </p>
              </div>
            </div>
          </div>

          <BuyOnline />

          <div className='flex justify-center lg:mb-6'>
            <img src='images/image-98.svg' className='h-auto' />
          </div>

          <div className='w-full'>
            <img src='images/image-114.svg' className='w-full h-auto' />
          </div>

          <div className='w-full p-[20px] flex flex-col items-center justify-center text-center pt-8 lg:pt-16'>
            <p className='text-basic text-[38px] leading-[46px] max-md:text-[20px] max-md:leading-[28px] font-["Spectral"]'>
              {locale['premium_wines.heading_3']}
            </p>
            <p className='text-basic text-[20px] leading-[28px] max-md:text-[14px] max-md:leading-[22px] mt-[10px]'>
              {locale['premium_wines.sub_heading_3']}
            </p>
          </div>

          <div className='max-w-[1280px] mx-auto h-auto flex flex-wrap lg:flex-nowrap px-[16px] xl:px-[unset] lg:pb-1 gap-x-[10px] mb-4 gap-[10px] lg:gap-[20px]'>
            <div className='lg:basis-1/2 w-full h-auto'>
              <img src='images/image-99.svg' className='w-full h-auto' />
            </div>

            <div className='lg:basis-1/2 w-full h-auto'>
              <img src='images/image-100.svg' className='w-full h-auto' />
              <p className='text-[11px] lg:text-[14px] mt-2 text-right'>
                {locale['premium_wines.section3_name']}
              </p>
            </div>
          </div>

          <div className='max-w-[1280px] mx-auto h-auto flex flex-wrap lg:flex-nowrap px-[16px] xl:px-[unset] lg:pb-28 text-[16px] leading-[32px] lg:gap-x-[20px]'>
            <div className='lg:basis-1/2 w-full h-auto whitespace-pre-line max-[650px]:text-[0.75rem]'>
              <p>
                {locale['premium_wines.section3_col1_line1']}
                <p className='text-[0.75rem] mb-3'>{locale['premium_wines.section3_col1_line2']}</p>
                <p className='text-[0.875rem] max-[650px]:text-[0.75rem]'>
                  {locale['premium_wines.section3_col1_line3']}
                  <span className='text-[0.75rem]'>
                    {locale['premium_wines.section3_col1_line4']}
                  </span>
                </p>
              </p>
            </div>

            <div className='lg:basis-1/2 w-full h-auto max-[650px]:text-[14px]'>
              <p>
                {locale['premium_wines.section3_col2_line1']}
                <br />
                {locale['premium_wines.section3_col2_line2']}
                <br />
                {locale['premium_wines.section3_col2_line3']}
                <br />
                {locale['premium_wines.section3_col2_line4']}
                <br />
                {locale['premium_wines.section3_col2_line5']}
                <br />
                {locale['premium_wines.section3_col2_line6']}
              </p>
            </div>
          </div>

          <div className='flex justify-center mb-6'>
            <div className="bg-[url('/images/image-109.svg')] lg:bg-[url('/images/image-101.svg')] bg-no-repeat h-[185px] lg:h-[343px] w-[343px] lg:w-[632px]" />
          </div>

          <div className='max-w-[1280px] mx-auto h-auto flex flex-wrap lg:flex-nowrap px-[16px] xl:px-[unset] text-[16px] leading-[32px] lg:gap-x-[20px]'>
            <div className='lg:basis-1/2 w-full h-auto max-[650px]:whitespace-pre-line max-[650px]:text-[0.875rem]'>
              <p>{locale['premium_wines.section4_col1_line1']}</p>
            </div>

            <div className='lg:basis-1/2 w-full h-auto max-[650px]:text-[0.875rem]'>
              <p>
                {locale['premium_wines.section4_col2_line1']}
                <br />
                {locale['premium_wines.section4_col2_line2']}
              </p>
            </div>
          </div>

          <div className='max-w-[1280px] mx-auto h-auto flex flex-wrap lg:flex-nowrap pt-[30px] max-xl:px-[15px] mb-6 lg:gap-x-[20px]'>
            <div className='xl:basis-1/4 max-lg:p-[5px] basis-1/2'>
              <img src='images/image-104.svg' className='h-auto w-full' />
            </div>
            <div className='xl:basis-1/4 max-lg:p-[5px] basis-1/2'>
              <img src='images/image-105.svg' className='h-auto w-full' />
              <p className='text-[11px] lg:text-[14px] mt-2 max-lg:text-right'>
                {locale['premium_wines.section5_name']}
              </p>
            </div>
            <div className='xl:basis-1/4 max-lg:p-[5px] basis-1/2'>
              <img src='images/image-106.svg' className='h-auto w-full' />
            </div>
            <div className='xl:basis-1/4 max-lg:p-[5px] basis-1/2'>
              <img src='images/image-108.svg' className='h-auto w-full' />
            </div>
          </div>

          <div className='max-w-[1280px] mx-auto h-auto flex flex-wrap lg:flex-nowrap max-xl:px-[20px] lg:pb-28 text-[16px] leading-[32px] lg:gap-x-[20px]'>
            <div className='lg:basis-1/2 w-full h-auto whitespace-pre-line max-[650px]:text-[0.73rem]'>
              <p>{locale['premium_wines.section5_col1']}</p>
            </div>

            <div className='lg:basis-1/2 w-full h-auto max-[650px]:text-[0.73rem]'>
              <p>
                {locale['premium_wines.section5_col2_line1']}
                <br />
                {locale['premium_wines.section5_col2_line2']}
                <br />
                {locale['premium_wines.section5_col2_line3']}
                <br />
                {locale['premium_wines.section5_col2_line4']}
              </p>
            </div>
          </div>

          <div className='flex flex-col max-xl:px-[15px]'>
            <div className='flex justify-center w-full py-[24px] overflow-x-hidden'>
              <img
                src={ImgHorizontalDivide}
                alt=''
                className='object-cover object-center w-full max-w-[1280px] h-[45px] max-md:h-[32px]'
              />
            </div>
            <p className='text-center  text-[24px] lg:text-[32px] leading-[40px] text-[#514F4E]  font-["Spectral"]'>
              {locale['hal_caviar.title_footer']}
            </p>
            <div
              className='flex flex-col items-center justify-end mx-auto mb-[38px] w-full max-w-[343px] md:max-w-[433px] h-[140px] md:h-[174px] rounded-[4px] bg-cover border-[1px] border-solid border-[#ABABAB] cursor-pointer'
              onClick={() => collectionId && router.push(`/products?collectionId=${collectionId}`)}
            >
              <img src={Img1} alt='' className='w-full h-full rounded-t' />
              <p className=' leading-[22px]  text-[14px] max-md:leading-[20px] max-md:text-[12px] mb-0 max-md:mb-[0px] text-[#514F4E]   font-semibold'>
                {locale['premium_wines.footer']}
              </p>
            </div>
          </div>
        </div>
      </div>
    </BaseAnimation>
  )
}

export default RoyalCollection

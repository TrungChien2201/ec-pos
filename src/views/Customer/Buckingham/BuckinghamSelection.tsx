import React from 'react'
import Img1 from 'resourse/images/bucking-ham/baner.png'
import Img2 from 'resourse/images/bucking-ham/baner-mb.png'
import Img3 from 'resourse/images/bucking-ham/logo.png'
import Img4 from 'resourse/images/bucking-ham/logo-mb.png'
import Img5 from 'resourse/images/bucking-ham/section1.png'
import Img6 from 'resourse/images/bucking-ham/section1-mb.png'
import Img7 from 'resourse/images/bucking-ham/section2.png'
import Img8 from 'resourse/images/bucking-ham/section2-mb.png'
import Img9 from 'resourse/images/bucking-ham/section3.png'
import Img10 from 'resourse/images/bucking-ham/section3-mb.png'
import Img11 from 'resourse/images/bucking-ham/1.webp'
import ImgHorizontalDivide from 'resourse/images/horizontal-divide.png'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
const BuckinghamSelection = () => {
  const router = useRouter()
  const locale = useSelector((state) => state.user.locale)
  const menus = useSelector((state) => state.menus.menus)
  const menuCollection = menus.find((menu) => menu.title === 'Royal Collection')

  const collection = menuCollection?.childs?.length
    ? menuCollection?.childs.find((doc) => !!doc.id)
    : null
  return (
    <div className='bg-white'>
      <div className='container mx-auto text-center font-roboto pt-[44px] max-md:pt-[40px]'>
        <h1 className='font-["Spectral"] text-[#000] text-[52px] leading-[52px]  font-normal max-md:text-[20px] max-md:leading-[20px] '>
          {locale['buckingham.title']}
        </h1>
        <p className='mt-[12px] max-md:mt-[4px] text-[#000000] text-[26px] leading-[30px] font-semibold max-md:text-[14px] max-md:leading-[22px]'>
          {locale['buckingham.description']}
        </p>
      </div>

      <div className='max-sm:hidden mt-[24px]'>
        <div className='flex justify-center'>
          <img src={Img1} className='w-full h-auto ' />
        </div>
      </div>
      <div className='sm:hidden mt-[24px]'>
        <div className='flex justify-center'>
          <img src={Img2} className='w-full  h-auto' />
        </div>
      </div>

      <div className='container mx-auto font-roboto text-center'>
        <div className='mt-[28px] max-md:mt-[20px] text-[#575757] font-bold text-[20px] leading-[36px]  max-md:text-[16px] max-md:leading-[24px] '>
          <p>{locale['buckingham.heading_1']}</p>
          <p>{locale['buckingham.heading_2']}</p>
        </div>

        <div className='max-sm:hidden mt-[24px]'>
          <div className='flex justify-center'>
            <img src={Img3} className='w-[308px] h-[211px] ' />
          </div>
        </div>
        <div className='sm:hidden mt-[32px]'>
          <div className='flex justify-center'>
            <img src={Img4} className='w-[200px] h-[137px]' />
          </div>
        </div>

        <div className='mt-[10px] h-[40px]  bg-[#AB292F] w-full max-w-[1076px] mx-auto flex justify-center items-center'>
          <p className='text-[26px] leading-[36px] max-md:text-[14px] max-md:leading-[36px] font-semibold text-white'>
            {locale['buckingham.description']}
          </p>
        </div>

        <div
          className='mt-[24px] tracking-[1px] max-md:mt-[20px] text-[18px] leading-[30px] font-medium text-[#575757]  max-md:text-[14px] max-md:leading-[22px] max-md:text-[#575757D9] max-md:font-normal'
          dangerouslySetInnerHTML={{ __html: locale['buckingham.content1'] }}
        />

        <div className='max-sm:hidden mt-[28px]'>
          <div className='flex justify-center'>
            <img src={Img5} className='max-w-[1076px] w-full  ' />
          </div>
        </div>
        <div className='sm:hidden mt-[32px]'>
          <div className='flex justify-center'>
            <img src={Img6} className='min-w-[343px] w-full' />
          </div>
        </div>

        <div
          className='mt-[28px] max-md:mt-[20px] tracking-[1px] text-[18px] leading-[30px] font-medium text-[#575757]  max-md:text-[14px] max-md:leading-[22px] max-md:text-[#575757D9] max-md:font-normal'
          dangerouslySetInnerHTML={{ __html: locale['buckingham.content2'] }}
        />

        <div className='max-sm:hidden mt-[24px]'>
          <div className='flex justify-center'>
            <img src={Img7} className='max-w-[1076px] w-full  ' />
          </div>
        </div>
        <div className='sm:hidden mt-[32px]'>
          <div className='flex justify-center'>
            <img src={Img8} className='min-w-[343px] w-full' />
          </div>
        </div>
        <div className='mt-[24px] max-md:mt-[20px] text-[18px] leading-[30px] font-medium text-[#575757]  max-md:text-[14px] max-md:leading-[22px] max-md:text-[#575757D9]'>
          <p className='mt-1'>{locale['buckingham.content3.line2']}</p>
          <p className='mt-1'>{locale['buckingham.content3.line3']}</p>
          <p className='max-md:mt-5 mt-1'>
            {locale['buckingham.content3.line4']}
            <a
              href='https://lit.link/en/signatureginza'
              className='max-md:text-[12px] max-md:leading-[30px] text-[#575757]'
            >
              {locale['buckingham.content3.line4_link']}
            </a>
          </p>
          <p className='mt-[30px]'>{locale['buckingham.content3.line5']}</p>
        </div>

        <div className='max-sm:hidden mt-[24px]'>
          <div className='flex justify-center'>
            <img src={Img9} className='max-w-[1076px] w-full  ' />
          </div>
        </div>
        <div className='sm:hidden mt-[32px]'>
          <div className='flex justify-center'>
            <img src={Img10} className='min-w-[343px] w-full' />
          </div>
        </div>

        <div className='mt-[12px] max-md:mt-[24px] pb-[39px]'>
          <h2 className='text-[32px] leading-[38px] font-medium text-[#575757] max-md:text-[24px] max-md:leading-[28px]  '>
            {locale['buckingham.heading_3']}
          </h2>

          <div
            className='mt-[12px] tracking-[1px] text-[18px] leading-[30px] text-[#575757] font-medium max-md:text-[14px] max-md:leading-[22px]'
            dangerouslySetInnerHTML={{ __html: locale['buckingham.content4'] }}
          />

          <div className='mt-[20px] text-[12px] tracking-[1px] leading-[20px] font-medium text-[#575757]'>
            <p>{locale['buckingham.footer_line1']}</p>
            <p>{locale['buckingham.footer_line2']}</p>
            <p className='text-[18px] leading-[30px] font-medium text-[#ED2129] max-md:text-[14px] max-md:leading-[22px]'>
              {locale['buckingham.footer_line3']}
            </p>
          </div>

          <div className='flex justify-center pt-[36px] max-md:pt-[30px] pb-[24px] overflow-x-hidden'>
            <img
              src={ImgHorizontalDivide}
              alt=''
              className='object-cover object-center max-w-[1076px] h-[45px] max-md:h-[32px] '
            />
          </div>

          <p className='text-center font-["Spectral"] text-[32px] max-md:text-[24px] font-medium leading-[27px] text-[#514f4e]  '>
            {locale['nova_caviar.footer']}
          </p>

          <div
            onClick={() => {
              router.push(`/products?collectionId=${collection?.id}`)
            }}
            className='mx-auto mt-[8px]  overflow-hidden flex flex-col justify-between items-center  cursor-pointer h-[164px] w-[433px] max-md:w-[343px] max-md:h-[140px] rounded-[4px] bg-cover border-[1px] border-solid border-[#ABABAB]'
          >
            <img src={Img11} alt='banner' className=' w-full' />
            <p className=' leading-[22px] max-md:leading-[24px]  text-[14px] text-[#514f4e] max-md:text-[12px]  font-semibold '>
              {locale['buckingham.description']}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BuckinghamSelection

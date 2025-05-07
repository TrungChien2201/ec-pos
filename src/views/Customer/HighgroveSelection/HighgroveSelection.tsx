import React from 'react'

import { useSelector } from 'react-redux'

import BaseAnimation from 'components/common/BaseAnimation/BaseAnimation'
import { useRouter } from 'next/router'
import Img15 from 'resourse/images/2.webp'
import Img1 from 'resourse/images/highgrova_1.png'
import Img10 from 'resourse/images/highgrova_10.png'
import Img11 from 'resourse/images/highgrova_11.png'
import Img12 from 'resourse/images/highgrova_12.png'
import Img2 from 'resourse/images/highgrova_2.png'
import Img3 from 'resourse/images/highgrova_3.png'
import Img4 from 'resourse/images/highgrova_4.png'
import Img5 from 'resourse/images/highgrova_5.png'
import Img6 from 'resourse/images/highgrova_6.png'
import Img7 from 'resourse/images/highgrova_7.png'
import Img8 from 'resourse/images/highgrova_8.png'
import Img9 from 'resourse/images/highgrova_9.png'
import Img13 from 'resourse/images/highgrove_17.png'
import ImgHorizontalDivide from 'resourse/images/horizontal-divide.png'

const getCollectionInMenu = (menus, collectionTitle) => {
  const collection = (menus || [])
    .map((item) => item.childs)
    .flat()
    .find((item) => item.title === collectionTitle)

  return collection
}

const HighgroveSelection = () => {
  const locale = useSelector((state) => state.user.locale)
  const menus = useSelector((state) => state.menus.menus)

  const collection = getCollectionInMenu(menus, 'Highgrove Selection')

  const router = useRouter()
  return (
    <BaseAnimation className='bg-white font-["Roboto"] '>
      <div className='text-center pt-[44px] pb-[24px] '>
        <p className='text-black text-[52px] font-meidum leading-[46px] max-md:text-[20px] max-md:leading-[28px] font-["Spectral"]'>
          {locale['highgrove.title']}
        </p>
        <p className='mt-2 max-md:mt-0 text-[26px] leading-[28px] max-md:text-[14px] max-md:leading-[22px] font-semibold text-[#000000]'>
          {locale['highgrove.description']}
        </p>
      </div>

      <div className='max-sm:hidden'>
        <div className='flex justify-center'>
          <img src={Img1} className='w-full h-auto ' />
        </div>
      </div>
      <div className='sm:hidden'>
        <div className='flex justify-center'>
          <img src={Img2} className='w-full  h-auto' />
        </div>
      </div>

      <div className='w-[90%] max-md:w-fit mx-auto max-md:mx-4 '>
        <div className='text-center font-bold font-["A_OTF_A1_Mincho_Std"] pt-[43px] text-[21px] leading-[28px] text-[#3D3D3D] max-md:text-[16px] max-md:leading-[24px] max-md:text-[#000000D9]'>
          <p>{locale['highgrove.heading_1']}</p>
          <p>{locale['highgrove.heading_2']}</p>
        </div>

        <div className='max-sm:hidden my-8'>
          <div className='flex justify-center'>
            <img src={Img3} className='w-full max-w-[278px] h-auto ' />
          </div>
        </div>
        <div className='sm:hidden  mt-6 mb-8'>
          <div className='flex justify-center'>
            <img src={Img4} className='w-full max-w-[231px] h-auto' />
          </div>
        </div>

        <div className='max-sm:hidden flex justify-center items-center mx-auto h-[40px] w-full max-w-[1076px]  bg-[#436143]  text-[26px] leading-[32px]  text-white  font-semibold'>
          <p>{locale['highgrove.description']}</p>
        </div>
        <div className='sm:hidden flex justify-center items-center text-[20px] leading-[28px] w-[343px] mx-auto h-[44px] bg-[#436143]  text-white font-semibold'>
          <p>{locale['highgrove.description']}</p>
        </div>

        {/*  */}
        <div className='w-full max-w-[1058px] mx-auto text-center mt-8 font-medium text-[18px] leading-[22px] text-[#514F4E] max-md:text-[14px] max-md:leading-[22px] max-md:text-[#000000D9]  flex flex-col gap-3 justify-center '>
          <p className='tracking-wider'>{locale['highgrove.content.line1']}</p>
          <p>{locale['highgrove.content.line2']}</p>
          <p className='tracking-wider'>{locale['highgrove.content.line3']}</p>
          <p className='tracking-widest'>{locale['highgrove.content.line4']}</p>
          <p className='tracking-tigh'>{locale['highgrove.content.line5']}</p>
          <p className='tracking-tigh'>{locale['highgrove.content.line6']}</p>
          <p className='tracking-[-1px]'>{locale['highgrove.content.line7']}</p>
          <p>{locale['highgrove.content.line8']}</p>
          <p>{locale['highgrove.content.line9']}</p>
          <p className='flex justify-center gap-10 max-md:flex-col max-md:justify-center max-md:items-center max-md:gap-0  '>
            <a
              className='text-[#514F4E] max-md:text-[#000000D9]'
              href='https://www.kings-foundation.org/'
            >
              {locale['highgrove.content.line10']}
            </a>
            <a
              className='text-[#514F4E] max-md:text-[#000000D9]'
              href='https://www.highgrovegardens.com/'
            >
              {locale['highgrove.content.line11']}
            </a>
          </p>
        </div>

        <div className='max-sm:hidden mt-10 mb-8'>
          <div className='flex justify-center'>
            <img src={Img5} className='w-1/2 max-w-[538px] h-[352px] max:md:h-auto ' />
            <img src={Img6} className='w-1/2 max-w-[538px] h-[352px] max:md:h-auto ' />
          </div>
        </div>
        <div className='sm:hidden  mt-6 mb-8'>
          <div className=' flex justify-center'>
            <img src={Img7} className='w-full max-w-[343px] h-auto' />
          </div>
        </div>

        <div className='my-8'>
          <div className='  mb-6 max-md:mb-4 text-[21px] leading-[28px] max-md:text-[16px] max-md:leading-[24px] text-[#3D3D3D] text-center font-["A_OTF_A1_Mincho_Std"] font-bold'>
            <p className='tracking-tighter max-md:tracking-wide'>
              {locale['highgrove.content.line12']}
            </p>
            <p className='max-md:tracking-[-1px] tracking-normal '>
              {locale['highgrove.content.line13']}
            </p>
          </div>

          <div className='flex flex-col gap-3 text-[18px] leading-[22px] text-[#514F4E] max-md:text-[14px] max-md:leading-[22px] max-md:text-[#000000D9] font-medium text-center'>
            <p className='tracking-tight'>{locale['highgrove.content.line14']}</p>
            <p className='tracking-tight'>{locale['highgrove.content.line15']}</p>
            <p>{locale['highgrove.content.line16']}</p>
            <p>{locale['highgrove.content.line17']}</p>
            <p>{locale['highgrove.content.line18']}</p>
            <p>{locale['highgrove.content.line19']}</p>
            <p>{locale['highgrove.content.line20']}</p>
            <p>{locale['highgrove.content.line21']}</p>
          </div>
        </div>

        <div className='max-sm:hidden mt-8 mb-[33px]'>
          <div className='flex justify-center'>
            <img src={Img8} className='w-1/2 max-w-[538px] h-[352px] max:md:h-auto  ' />
            <img src={Img9} className='w-1/2 max-w-[538px] h-[352px] max:md:h-auto ' />
          </div>
        </div>
        <div className='sm:hidden  mt-6 mb-8'>
          <div className=' flex justify-center'>
            <img src={Img10} className='w-full max-w-[343px] h-auto' />
          </div>
        </div>

        <div className='flex flex-col gap-3 mb-8 text-center text-[18px] leading-[22px] max-md:text-[14px] max-md:leading-[22px] max-md:text-[#000000D9] text-[#514F4E] font-medium '>
          <p className='tracking-normal max-md:tracking-[-2px]'>
            {locale['highgrove.content.line22']}
          </p>
          <p>{locale['highgrove.content.line23']}</p>
          <p>{locale['highgrove.content.line24']}</p>
          <p>{locale['highgrove.content.line25']}</p>
        </div>

        <div className='max-sm:hidden mt-8 mb-[33px]'>
          <div className='flex justify-center'>
            <img src={Img11} className='w-1/2 max-w-[538px] h-[352px] max:md:h-auto ' />
            <img src={Img12} className='w-1/2 max-w-[538px] h-[352px] max:md:h-auto ' />
          </div>
        </div>
        <div className='sm:hidden  mt-6 mb-8 max-md:mb-[29px]'>
          <div className=' flex justify-center'>
            <img src={Img13} className='w-full max-w-[343px] h-auto' />
          </div>
        </div>

        <div className='flex justify-center py-[24px] overflow-x-hidden '>
          <img
            src={ImgHorizontalDivide}
            alt=''
            className='object-cover object-center  max-w-[1076px] w-[1076px] mx-auto max-md:w-[100%] h-[32px]'
          />
        </div>

        <div className='text-center font-["spectral"] pb-[38px]'>
          <p className='text-center  text-[24px] lg:text-[32px] leading-[40px] text-[#514F4E]  font-["Spectral"]'>
            {locale['nova_caviar.footer']}
          </p>
          <div
            onClick={() => collection?.id && router.push(`/products?collectionId=${collection?.id}`)}
            className='cursor-pointer flex flex-col  items-center mx-auto w-[433px] h-[174px] max-md:w-[343px] max-md:h-[140px] border-[1px] border-solid border-[#ABABAB] rounded-[4px]'
          >
            <img src={Img15} alt='' className='w-full h-full' />
            <p className=' leading-[24px] font-roboto  text-[14px] max-md:leading-[20px] max-md:text-[12px]  text-[#514F4E]   font-semibold'>
              {locale['highgrove.description']}
            </p>
          </div>
        </div>
      </div>
    </BaseAnimation>
  )
}

export default HighgroveSelection

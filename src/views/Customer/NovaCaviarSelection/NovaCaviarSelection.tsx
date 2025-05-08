import React from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'

import BaseAnimation from 'components/common/BaseAnimation/BaseAnimation'

// Use string paths instead of direct imports
const ImgHorizontalDivide = 'images/horizontal-divide.png'
const ImgNova1 = 'images/nova_1.png'
const ImgNova11 = 'images/nova_11.png'
const ImgNova13 = 'images/nova_13.png'
const ImgNova14 = 'images/nova_14.png'
const ImgNova15 = 'images/nova_15.png'
const ImgNova17 = 'images/nova_17.png'
const ImgNova3 = 'images/nova_18.png'
const ImgNova10 = 'images/nova_19.png'
const ImgNova16 = 'images/nova_20.png'
const ImgNova12 = 'images/nova_21.png'
const ImgNova2 = 'images/nova_22.png'
const ImgNova4 = 'images/nova_4.png'
const ImgNova5 = 'images/nova_5.png'
const ImgNova6 = 'images/nova_6.png'
const ImgNova7 = 'images/nova_7.png'
const ImgNova8 = 'images/nova_8.png'
const ImgNova9 = 'images/nova_9.png'

const getCollectionInMenu = (menus, collectionTitle) => {
  const collection = (menus || [])
    .map((item) => item.childs)
    .flat()
    .find((item) => item.title === collectionTitle)

  return collection
}

const NovaCaviarSelection = () => {
  const locale = useSelector((state) => state.user.locale)
  const menus = useSelector((state) => state.menus.sections)

  const collection = getCollectionInMenu(menus, 'NOVA Caviar')
  const router = useRouter()

  return (
    <BaseAnimation className='bg-white'>
      <div className=' w-full pb-[24px] pt-[44px]  flex flex-col items-center justify-center text-center text-[#000000]'>
        <p className='text-[52px] font-meidum leading-[46px] max-md:text-[20px] max-md:leading-[28px] font-["Spectral"]'>
          {locale['nova_caviar.title']}
        </p>
        <p className='text-[26px] leading-[28px] max-md:text-[14px] max-md:leading-[22px] font-semibold text-[#000000]'>
          {locale['nova_caviar.description']}
        </p>
      </div>

      <div className='max-sm:hidden'>
        <div className='flex justify-center'>
          <img src={ImgNova1} className='w-full h-auto ' />
        </div>
      </div>

      <div className='sm:hidden'>
        <div className='flex justify-center'>
          <img src={ImgNova2} className='w-full h-auto' />
        </div>
      </div>

      <div className=' flex font-["roboto"] flex-col justify-center items-center mt-[40px] max-md:mt-[30px] ml-[18px] mr-[15px] pb-[38px]  '>
        <div className='flex flex-col justify-center items-center gap-[15px] text-center'>
          <h2 className='font-["A_OTF_A1_Mincho_Std"] font-bold  text-[40px] leading-[48px] text-[#514F4E] max-md:text-[24px] max-md:leading-[32px] max-md:text-[#000000] '>
            {locale['nova_caviar.heading_1']}
          </h2>
          <h3
            dangerouslySetInnerHTML={{ __html: locale['nova_caviar.sub_heading_1'] }}
            className='w-full max-w-[980px] tracking-normal gap-[11px]   text-center font-["A_OTF_A1_Mincho_Std"] font-bold  text-[21px] leading-[35px] text-[#514F4E] max-md:text-[16px] max-md:leading-[24px] max-md:text-[#000000D9] '
          />
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: locale['nova_caviar.paragraph1_heading_1'] }}
          className='max-sm:hidden tracking-[1px] w-full max-w-[1274px]  mt-[35px] max-md:mt-[25px]  flex flex-col  text-center gap-[15px] max-md:gap-[10px] font-medium text-[18px] leading-[22px] text-[#514F4E] max-md:text-[14px] max-md:leading-[22px] max-md:text-[#000000D9]'
        />
        <div
          dangerouslySetInnerHTML={{ __html: locale['nova_caviar.res_paragraph1_heading_1'] }}
          className='sm:hidden w-full max-w-[1274px] mb-[24px] mt-[35px] max-md:mt-[25px]  flex flex-col  text-center gap-[15px] max-md:gap-[10px] font-normal text-[16px] leading-[24px] text-[#514F4E] max-md:text-[14px] max-md:leading-[22px] max-md:text-[#000000D9]'
        />
        <div className='sm:hidden my-[10px]'>
          <img src={ImgNova3} className='w-full min-w-[343px]' />
        </div>
        <div className='max-sm:hidden flex gap-[22px] pt-[30px] '>
          <div className='flex-1 overflow-hidden'>
            <img src={ImgNova4} className='w-full max-w-[348px] h-[348px]  ' />
          </div>
          <div className='flex-1 overflow-hidden'>
            <img src={ImgNova5} className='w-full max-w-[348px] h-[348px] ' />
          </div>
          <div className='flex-1 overflow-hidden'>
            <img src={ImgNova6} className='w-full h-full max-w-[348px] h-[348px]  ' />
          </div>
        </div>
        <div className=' pt-[35px] max-md:pt-[30px] flex flex-col justify-center items-center text-center font-normal'>
          <h2
            dangerouslySetInnerHTML={{ __html: locale['nova_caviar.heading_2'] }}
            className='max-sm:hidden  font-["A_OTF_A1_Mincho_Std"] max-md:tracking-[0px] tracking-[1px] font-bold  mb-9 max-md:mb-[25px] text-[34px] leading-[40px] text-[#514F4E]  max-md:text-[24px] max-md:leading-[32px] max-md:text-[#000000]'
          />

          <h2
            dangerouslySetInnerHTML={{ __html: locale['nova_caviar.res_heading_2'] }}
            className='sm:hidden font-["A_OTF_A1_Mincho_Std"] max-md:tracking-[0px] tracking-[0px] font-semibold  mb-9 max-md:mb-[25px] text-[40px] leading-[48px] text-[#514F4E] max-md:text-[24px] max-md:leading-[32px] max-md:text-[#000000]'
          />
          <div
            dangerouslySetInnerHTML={{ __html: locale['nova_caviar.paragraph1_heading_2'] }}
            className='max-sm:hidden flex flex-col justify-center items-center gap-[15px] max-md:gap-[10px] tracking-[-1px] text-[16px] leading-[23px] font-medium text-[#514F4E] max-md:text-[14px] max-md:leading-[22px] max-md:text-[#000000D9] '
          />
          <div
            className='sm:hidden flex flex-col justify-center items-center gap-[15px] max-md:gap-[10px] tracking-[-1px] text-[16px] leading-[23px] font-medium text-[#514F4E] max-md:text-[14px] max-md:leading-[22px] max-md:text-[#000000D9]'
            dangerouslySetInnerHTML={{ __html: locale['nova_caviar.paragraph1_heading_2_mobile'] }}
          />
        </div>
        <div className='sm:hidden my-[10px]'>
          <img src={ImgNova10} className='w-full min-w-[343px]' />
        </div>
        <div className='max-sm:hidden flex gap-[22px] pt-[35px] '>
          <div className='flex-1 overflow-hidden'>
            <img src={ImgNova7} className='w-full max-w-[348px] h-[348px]' />
          </div>
          <div className='flex-1 overflow-hidden'>
            <img src={ImgNova8} className='w-full max-w-[348px] h-[348px]' />
          </div>
          <div className='flex-1 overflow-hidden'>
            <img src={ImgNova9} className='w-full  max-w-[348px] h-[348px]' />
          </div>
        </div>
        <div className=' mt-9 max-md:mt-[30px] text-center font-normal'>
          <h2 className='font-["A_OTF_A1_Mincho_Std"] font-semibold  mb-9 max-md:mb-[25px] text-[34px] leading-[48px] text-[#514F4E] tracking-[-2px] max-md:text-[24px] max-md:leading-[32px] max-md:text-[#000000]'>
            {locale['nova_caviar.heading_3']}
          </h2>
          <div
            dangerouslySetInnerHTML={{ __html: locale['nova_caviar.paragraph1_heading_3'] }}
            className='max-sm:hidden flex tracking-[1px] flex-col justify-center items-center gap-[15px] max-md:gap-[10px]  text-[18px] font-medium leading-[22px] text-[#514F4E] max-md:text-[14px] max-md:leading-[22px] max-md:text-[#000000D9]  '
          />
          <div
            className='sm:hidden flex flex-col justify-center items-center gap-[15px] max-md:gap-[10px] tracking-[-1px] text-[16px] leading-[23px] font-medium text-[#514F4E] max-md:text-[14px] max-md:leading-[22px] max-md:text-[#000000D9]'
            dangerouslySetInnerHTML={{ __html: locale['nova_caviar.paragraph1_heading_3_mobile'] }}
          />
        </div>
        <div className='sm:hidden my-[10px]'>
          <img src={ImgNova12} className='w-full min-w-[343px]' />
          <p className='mt-2 text-right text-[12px] leading-[20px] text-[#514F4E]'>
            {locale['nova_caviar.heading_4_mobile']}
          </p>
        </div>
        <div className='max-sm:hidden pt-[35px] pb-[10px] '>
          <img src={ImgNova11} className='w-full max-w-[724px]' />
        </div>
        <div className=' mt-9 max-md:mt-[30px] text-center font-normal'>
          <h2 className='font-["A_OTF_A1_Mincho_Std"] font-semibold  mb-9 max-md:mb-[25px] text-[40px]  leading-[48px] text-[#514F4E] tracking-[-1px] max-md:text-[24px] max-md:leading-[32px] max-md:text-[#000000]'>
            {locale['nova_caviar.heading_4']}
          </h2>
          <div
            dangerouslySetInnerHTML={{ __html: locale['nova_caviar.paragraph1_heading_4'] }}
            className='max-sm:hidden flex tracking-[1px] flex-col justify-center items-center gap-[15px] max-md:gap-[10px] font-medium text-[18px] leading-[22px] text-[#514F4E] max-md:text-[14px] max-md:leading-[22px] max-md:text-[#000000D9]  '
          />
        </div>
        <div className='sm:hidden flex text-center tracking-[1px] flex-col justify-center items-center gap-[15px] max-md:gap-[10px] font-medium text-[18px] leading-[22px] text-[#514F4E] max-md:text-[14px] max-md:leading-[22px] max-md:text-[#000000D9]  '>
          {locale['nova_caviar.paragraph1_heading_4_mobile']}
        </div>
        <div className='sm:hidden my-[10px]'>
          <img src={ImgNova16} className='w-full min-w-[343px]' />
        </div>
        <div className='max-sm:hidden flex gap-[22px] pt-[35px] '>
          <div className='flex-1 overflow-hidden'>
            <img src={ImgNova13} className='w-full max-w-[205px]' />
          </div>
          <div className='flex-1 overflow-hidden'>
            <img src={ImgNova14} className='w-full max-w-[205px]' />
          </div>
          <div className='flex-1 overflow-hidden'>
            <img src={ImgNova15} className='w-full h-full max-w-[205px] ' />
          </div>
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: locale['nova_caviar.paragraph2_heading_4'] }}
          className='max-sm:hidden mt-[35px] tracking-[1px] max-md:mt-[20px] text-center flex flex-col gap-[10px] max-md:gap-[8px] text-[18px] leading-[22px] text-[#514F4E] max-md:text-[14px] max-md:leading-[22px] max-md:text-[#000000D9] '
        />
        <div
          className='sm:hidden mt-[35px] tracking-[1px] max-md:mt-[20px] text-center flex flex-col gap-[10px] max-md:gap-[8px] text-[18px] leading-[22px] text-[#514F4E] max-md:text-[14px] max-md:leading-[22px] max-md:text-[#000000D9]'
          dangerouslySetInnerHTML={{ __html: locale['nova_caviar.paragraph2_heading_4_mobile'] }}
        />

        <div className='flex justify-center py-[24px] overflow-x-hidden w-full'>
          <img
            src={ImgHorizontalDivide}
            alt=''
            className='object-cover object-center w-full max-w-[1280px] h-[45px] max-md:h-[32px]'
          />
        </div>
        <p className='text-center  text-[24px] lg:text-[32px] leading-[40px] text-[#514F4E]  font-["Spectral"]'>
          {locale['nova_caviar.footer']}
        </p>
        <div
          className='mx-auto  flex flex-col justify-end items-center  cursor-pointer h-[174px] w-[433px] max-md:w-[343px]  max-md:h-[140px] rounded-[4px] bg-cover border-[1px] border-solid border-[#ABABAB]'
          onClick={() => collection?.id && router.push(`/products?collectionId=${collection?.id}`)}
          style={{
            backgroundImage: `url(${ImgNova17})`,
          }}
        >
          <p className=' leading-[22px]  text-[14px] max-md:leading-[20px] max-md:text-[12px] mb-0 max-md:mb-[0px] text-[#514F4E]   font-semibold'>
            {locale['nova_caviar.paragraph1_footer']}
          </p>
        </div>
      </div>
    </BaseAnimation>
  )
}

export default NovaCaviarSelection

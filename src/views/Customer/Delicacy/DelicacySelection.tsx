import React from 'react'
import { useSelector } from 'react-redux'

import BaseAnimation from 'components/common/BaseAnimation/BaseAnimation'
import { useRouter } from 'next/router'
import imgFooter from 'resourse/images/delicacy/5.webp'
import imgBanner from 'resourse/images/delicacy/banner.png'
import imgLogo from 'resourse/images/delicacy/logo.png'
import imgTowCol1 from 'resourse/images/delicacy/two-col-1.png'
import imgTowCol2 from 'resourse/images/delicacy/two-col-2.png'
import imgTowColLeft from 'resourse/images/delicacy/two-col-left.png'
import imgTowColRight from 'resourse/images/delicacy/two-col-right.png'
import ImgHorizontalDivide from 'resourse/images/horizontal-divide.png'

const getCollectionInMenu = (menus, collectionTitle) => {
  const collection = (menus || [])
    .map((item) => item.childs)
    .flat()
    .find((item) => item.title === collectionTitle || item.titleOther === collectionTitle)

  return collection
}

const DelicacySelection = () => {
  const locale = useSelector((state) => state.user.locale)
  const menus = useSelector((state) => state.menus.sections)
  const collection = getCollectionInMenu(menus, 'Delicacy')
  const router = useRouter()

  return (
    <BaseAnimation className='bg-white text-black-light-5 font-roboto delicacy-selection'>
      <div className='w-full px-6 pt-[44px] flex flex-col items-center justify-center text-center'>
        <p className='text-[20px] md:text-[52px] tracking-[0.5px] leading-none text-black font-spectral'>
          {locale['delicacy.title']}
        </p>
        <p className='md:mt-2 text-sm md:text-[26px] leading-[30px] font-semibold text-black'>
          {locale['delicacy.description']}
        </p>
      </div>
      <div className='mt-6'>
        <img src={imgBanner} className='w-full h-auto' />
      </div>
      <div className='flex justify-center bg-white mt-5 md:mt-7 pb-[38px]'>
        <div className='container container--small-desktop'>
          <div className='w-full flex flex-col items-center text-center max-md:text-[#000000] '>
            <div
              dangerouslySetInnerHTML={{ __html: locale['delicacy.heading_1'] }}
              className='text-base leading-[28px] md:text-[20px] md:leading-[36px] text-black-light-5 font-bold'
            />
            <img
              src={imgLogo}
              className='w-full max-w-[350px] md:max-w-[529px] h-auto mt-[60px] md:mt-6'
            />
            <div
              className='flex items-center justify-center w-full mt-10 min-h-[26px] md:min-h-[40px] text-sm md:text-[26px] bg-li text-white font-semibold'
              style={{
                background:
                  'linear-gradient(90deg, #E2C18A 0%, #CA9C64 16.92%, #F7D896 37.43%, #C59A5A 64.05%, #F4DEA4 100%)',
              }}
            >
              {locale['delicacy.description']}
            </div>
            <div className='flex flex-col gap-2 md:gap-0 mt-5 md:mt-6'>
              <div
                dangerouslySetInnerHTML={{ __html: locale['delicacy.sub_heading_2'] }}
                className='text-sm leading-[22px] md:text-lg md:leading-[30px] text-black-light-5'
              />
            </div>
          </div>
          <div className='grid md:grid-cols-2 mt-8 md:mt-4'>
            <div className='image--banner image--two-col'>
              <img src={imgTowColLeft} className='w-full' />
            </div>
            <div className='image--banner image--two-col'>
              <img src={imgTowColRight} className='w-full' />
            </div>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: locale['delicacy.two_description'] }}
            className='mt-10 text-center flex justify-center items-center gap-[15px] max-md:gap-[8px] flex-col text-sm leading-[22px] md:text-lg md:leading-[30px]'
          />
          <div className='grid md:grid-cols-2 md:gap2 mt-8 md:mt-4'>
            <div className='flex-1 overflow-hidden'>
              <img src={imgTowCol1} className='w-full' />
            </div>
            <div className='flex-1 overflow-hidden'>
              <img src={imgTowCol2} className='w-full' />
            </div>
          </div>

          <div
            dangerouslySetInnerHTML={{ __html: locale['delicacy.two_col_footer'] }}
            className='text-center flex flex-col justify-center items-center mt-[25px] text-sm leading-[22px] md:text-lg md:leading-[30px]'
          />
          <div className='flex justify-center py-[24px] overflow-x-hidden'>
            <img
              src={ImgHorizontalDivide}
              alt='divide'
              className='w-full h-[32px] lg:h-[45px] object-cover object-center'
            />
          </div>

          <p className='text-center text-2xl md:text-[32px] leading-[40px] text-[#514F4E] font-spectral'>
            {locale['delicacy.title_footer']}
          </p>
          <div
            className='flex flex-col items-center justify-center max-w-[343px] md:max-w-[433px] mx-auto bg-white border-[1px] border-solid border-[#ABABAB] rounded-[4px] text-xs font-medium cursor-pointer'
            onClick={() => collection?.id && router.push(`/products?collectionId=${collection?.id}`)}
          >
            <div className='w-full image--banner image--rosey-footer'>
              <img className='rounded-t-[4px]' src={imgFooter} />
            </div>
            <p className='pt-[1px] text-xs leading-[20px] md:text-sm md:leading-[22px] text-[#514F4E] font-semibold'>
              {locale['delicacy.description']}
            </p>
          </div>
        </div>
      </div>
    </BaseAnimation>
  )
}

export default DelicacySelection

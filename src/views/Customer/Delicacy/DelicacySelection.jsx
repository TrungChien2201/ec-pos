import React from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import BaseAnimation from 'components/common/BaseAnimation/BaseAnimation'
import BannerCollection from 'components/BannerCollection'
const imgBanner = 'images/delicacy/banner.png'
const imgFooter = 'images/delicacy/5.webp'
const imgLogo = 'images/delicacy/logo.png'
const imgTowColLeft = 'images/delicacy/two-col-left.png'
const imgTowColRight = 'images/delicacy/two-col-right.png'
const imgTowCol1 = 'images/delicacy/two-col-1.png'
const imgTowCol2 = 'images/delicacy/two-col-2.png'
const ImgHorizontalDivide = 'images/horizontal-divide.png'

const getCollectionInMenu = (menus, collectionTitle) => {
  const collection = (menus || [])
    .map((item) => item.childs)
    .flat()
    .find((item) => item.title === collectionTitle || item.titleOther === collectionTitle)

  return collection
}

const DelicacySelection = () => {
  const { t } = useTranslation()
  const menus = useSelector((state) => state.menus.sections)
  const collection = getCollectionInMenu(menus, 'Delicacy')

  return (
    <BaseAnimation className='bg-white text-black-light-5 font-roboto delicacy-selection'>
      <div className='w-full px-6 pt-[44px] flex flex-col items-center justify-center text-center'>
        <p className='text-[20px] md:text-[52px] tracking-[0.5px] leading-none text-black font-spectral'>
          {t('delicacy.title')}
        </p>
        <p className='md:mt-2 text-sm md:text-[26px] leading-[30px] font-semibold text-black'>
          {t('delicacy.description')}
        </p>
      </div>
      <div className='mt-6'>
        <img src={imgBanner} className='w-full h-auto' />
      </div>
      <div className='flex justify-center bg-white mt-5 md:mt-7'>
        <div className='container container--small-desktop'>
          <div className='w-full flex flex-col items-center text-center max-md:text-[#000000] '>
            <div
              dangerouslySetInnerHTML={{ __html: t('delicacy.heading_1') }}
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
              {t('delicacy.description')}
            </div>
            <div className='flex flex-col gap-2 md:gap-0 mt-5 md:mt-6'>
              <div
                dangerouslySetInnerHTML={{ __html: t('delicacy.sub_heading_2') }}
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
            dangerouslySetInnerHTML={{ __html: t('delicacy.two_description') }}
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
            dangerouslySetInnerHTML={{ __html: t('delicacy.two_col_footer') }}
            className='text-center flex flex-col justify-center items-center mt-10 text-sm leading-[22px] md:text-lg md:leading-[30px]'
          />
          <div className='flex justify-center py-[24px] overflow-x-hidden'>
            <img
              src={ImgHorizontalDivide}
              alt='divide'
              className='w-full h-[32px] lg:h-[45px] object-cover object-center'
            />
          </div>
          <BannerCollection
            className='pb-10'
            title={t('mushroom.title_footer')}
            image={imgFooter}
            description={t('delicacy.description')}
            collectionId={collection?.id}
          />
        </div>
      </div>
    </BaseAnimation>
  )
}

export default DelicacySelection

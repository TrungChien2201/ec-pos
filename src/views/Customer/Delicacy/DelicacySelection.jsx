import React from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import BaseAnimation from 'components/common/BaseAnimation/BaseAnimation'
import { useRouter } from 'next/router'

// Use string paths for images
const imgFooter = 'images/delicacy/5.webp'
const imgBanner = 'images/delicacy/banner.png'
const imgLogo = 'images/delicacy/logo.png'
const imgTowCol1 = 'images/delicacy/two-col-1.png'
const imgTowCol2 = 'images/delicacy/two-col-2.png'
const imgTowColLeft = 'images/delicacy/two-col-left.png'
const imgTowColRight = 'images/delicacy/two-col-right.png'
const ImgHorizontalDivide = 'images/horizontal-divide.png'

const getCollectionInMenu = (menus, collectionTitle) => {
  const collection = (menus || [])
    .map((item) => item.childs)
    .flat()
    .find((item) => item.title === collectionTitle)

  return collection
}

const DelicacySelection = () => {
  const { t } = useTranslation()
  const menus = useSelector((state) => state.menus.menus)
  const collection = getCollectionInMenu(menus, 'Delicacy')

  const router = useRouter()
  return (
    <BaseAnimation className='bg-white font-["Roboto"] text-black-light-7 text-justify'>
      <div className='text-center pt-[44px] pb-[24px] '>
        <p className='text-black text-[52px] font-medium leading-[46px] max-md:text-[20px] max-md:leading-[28px] font-["Spectral"]'>
          {t('delicacy.title')}
        </p>
        <p className='mt-2 max-md:mt-0 text-[26px] leading-[28px] max-md:text-[14px] max-md:leading-[22px] font-semibold text-[#000000]'>
          {t('delicacy.description')}
        </p>
      </div>
      <img src={imgBanner} className='w-full h-auto ' />
      <div className='container container--medium mx-auto'>
        <div className='px-2 text-center font-bold pt-[43px] text-[20px] leading-[28px] text-[#3D3D3D] max-md:text-[16px] max-md:leading-[24px]'>
          <p>{t('delicacy.heading_1')}</p>
          <p>{t('delicacy.heading_2')}</p>
        </div>

        <div className='flex justify-center my-8'>
          <img src={imgLogo} className='w-full max-w-[278px] h-auto ' />
        </div>

        <div className='flex justify-center items-center mx-auto h-[40px] w-full max-w-[1076px] bg-[#AA998E] text-sm lg:text-[26px] leading-[32px] text-white font-semibold'>
          <p>{t('delicacy.description')}</p>
        </div>

        <div className='w-full max-w-[1058px] mx-auto text-center mt-8 lg:font-medium text-[14px] leading-[22px] lg:text-[24px] lg:leading-[30px] text-[#514F4E] flex flex-col gap-1 justify-center'>
          <p className='tracking-wider'>{t('delicacy.content.line1')}</p>
          <p>{t('delicacy.content.line2')}</p>
        </div>

        <div className='mt-10 mb-8'>
          <div className='flex flex-col lg:flex-row justify-center'>
            <img src={imgTowColLeft} className='lg:w-1/2' />
            <img src={imgTowColRight} className='lg:w-1/2' />
          </div>
        </div>

        <div className='lg:px-20 mt-8 lg:font-medium text-lg leading-[22px] text-[#514F4E] lg:text-[26px] lg:leading-[36px]'>
          <div
            className='leading-8 lg:tracking-[1px]'
            dangerouslySetInnerHTML={{ __html: t('delicacy.content.line3') }}
          />
          <p className='flex justify-center text-sm leading-[26px] lg:text-lg lg:leading-7 lg:font-medium'>
            {t('delicacy.content.line4')}
          </p>
        </div>

        <div className='mt-10 mb-8'>
          <div className='flex flex-col lg:flex-row justify-center'>
            <img src={imgTowCol1} className='lg:w-1/2' />
            <img src={imgTowCol2} className='lg:w-1/2' />
          </div>
        </div>

        <div className='flex flex-col gap-4 lg:px-20 mt-8 lg:font-medium text-lg leading-[22px] text-[#514F4E] lg:text-[26px] lg:leading-[36px]'>
          <div
            className='max-w-[846px] mx-auto text-center leading-8 lg:tracking-[1px]'
            dangerouslySetInnerHTML={{ __html: t('delicacy.content.line5') }}
          />
          <div
            className='flex justify-center text-sm leading-[26px] lg:text-lg lg:leading-7 lg:font-medium'
            dangerouslySetInnerHTML={{ __html: t('delicacy.content.line6') }}
          />
        </div>

        <div className='flex justify-center py-[24px] overflow-x-hidden'>
          <img
            src={ImgHorizontalDivide}
            alt=''
            className='object-cover object-center h-[45px] max-md:h-[32px] w-full'
          />
        </div>

        <div className='text-center font-["spectral"] pb-[38px]'>
          <p className='text-center text-[24px] lg:text-[32px] leading-[40px] text-[#514F4E] font-["Spectral"]'>
            {t('nova_caviar.footer')}
          </p>
          <div
            onClick={() => collection?.id && router.push(`/products?collectionId=${collection?.id}`)}
            className='cursor-pointer flex flex-col items-center mx-auto w-[433px] h-[166px] max-md:w-[343px] max-md:h-[135px] border-[1px] border-solid border-[#ABABAB] rounded-[4px]'
          >
            <img src={imgFooter} alt='img footer' className='w-full h-full' />
            <p className=' leading-[24px] font-roboto text-[14px] max-md:leading-[20px] max-md:text-[12px] text-[#514F4E] font-semibold'>
              {t('delicacy.description')}
            </p>
          </div>
        </div>
      </div>
    </BaseAnimation>
  )
}

export default DelicacySelection

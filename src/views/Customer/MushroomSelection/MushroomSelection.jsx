import React from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import BaseAnimation from 'components/common/BaseAnimation/BaseAnimation'
import useWindowSize from 'hooks/useWindowSize'
import { useRouter } from 'next/router'

// Use string paths for images
const ImgHorizontalDivide = 'images/horizontal-divide.png'
const ImgMushroom1 = 'images/mushroom-1.png'
const ImgMushroom10 = 'images/mushroom-10.png'
const ImgMushroom11 = 'images/mushroom-11.png'
const ImgMushroom15 = 'images/mushroom-15.png'
const ImgMushroom16 = 'images/mushroom-16.png'
const ImgMushroom19 = 'images/mushroom-19.jpg'
const ImgMushroom2 = 'images/mushroom-2.png'
const ImgMushroom20 = 'images/mushroom-20.png'
const ImgMushroom21 = 'images/mushroom-21.png'
const ImgMushroom24 = 'images/mushroom-24.png'
const ImgMushroom3 = 'images/mushroom-3.png'
const ImgMushroom6 = 'images/mushroom-6.png'
const ImgMushroom7 = 'images/mushroom-7.png'
const ImgMushroom8 = 'images/mushroom-8.png'
const ImgMushroom9 = 'images/mushroom-9.png'
const ImgMushroom25 = 'images/mushroom_fix.png'

const getCollectionInMenu = (menus, collectionTitle) => {
  const collection = (menus || [])
    .map((item) => item.childs)
    .flat()
    .find((item) => item.title === collectionTitle)

  return collection
}

const MushroomSelection = () => {
  const { t } = useTranslation()
  const menus = useSelector((state) => state.menus.menus)
  const collection = getCollectionInMenu(menus, 'Mushroom')
  const { width } = useWindowSize()
  const router = useRouter()
  return (
    <BaseAnimation className='bg-white font-["Roboto"] text-black-light-7 text-justify'>
      <div className='text-center pt-[44px] pb-[24px] '>
        <p className='text-black text-[52px] font-medium leading-[46px] max-md:text-[20px] max-md:leading-[28px] font-["Spectral"]'>
          {t('mushroom.title')}
        </p>
        <p className='mt-2 max-md:mt-0 text-[26px] leading-[28px] max-md:text-[14px] max-md:leading-[22px] font-semibold text-[#000000]'>
          {t('mushroom.description')}
        </p>
      </div>
      <img src={ImgMushroom1} className='w-full h-auto ' />
      <div className='container container--medium mx-auto'>
        <div className='px-2 text-center font-bold pt-[43px] text-[20px] leading-[28px] text-[#3D3D3D] max-md:text-[16px] max-md:leading-[24px]'>
          <p>{t('mushroom.heading_1')}</p>
          <p>{t('mushroom.heading_2')}</p>
        </div>

        <div className='flex justify-center my-8'>
          <img src={ImgMushroom2} className='w-full max-w-[278px] h-auto ' />
        </div>

        <div className='flex justify-center items-center mx-auto h-[40px] w-full max-w-[1076px] bg-[#AA998E] text-sm lg:text-[26px] leading-[32px] text-white font-semibold'>
          <p>{t('mushroom.description')}</p>
        </div>

        <div className='w-full max-w-[1058px] mx-auto text-center mt-8 lg:font-medium text-[14px] leading-[22px] lg:text-[24px] lg:leading-[30px] text-[#514F4E] flex flex-col gap-1 justify-center'>
          <p className='tracking-wider'>{t('mushroom.content.line1')}</p>
          <p>{t('mushroom.content.line2')}</p>
        </div>

        <div className='mt-10 mb-8'>
          <div className='flex flex-col lg:flex-row justify-center'>
            <img src={ImgMushroom3} className='lg:w-1/2' />
            <img src={ImgMushroom6} className='lg:w-1/2' />
          </div>
        </div>

        <div className='lg:px-20 mt-8 lg:font-medium text-lg leading-[22px] text-[#514F4E] lg:text-[26px] lg:leading-[36px]'>
          <div
            className='leading-8 lg:tracking-[1px]'
            dangerouslySetInnerHTML={{ __html: t('mushroom.content.line3') }}
          />
          <p className='flex justify-center text-sm leading-[26px] lg:text-lg lg:leading-7 lg:font-medium'>
            {t('mushroom.content.line4')}
          </p>
        </div>

        <div className='mt-10 mb-8'>
          <div className='flex flex-col lg:flex-row justify-center'>
            <img src={ImgMushroom7} className='lg:w-1/2' />
            <img src={ImgMushroom8} className='lg:w-1/2' />
          </div>
        </div>

        <div className='flex flex-col gap-4 lg:px-20 mt-8 lg:font-medium text-lg leading-[22px] text-[#514F4E] lg:text-[26px] lg:leading-[36px]'>
          <div
            className='max-w-[846px] mx-auto text-center leading-8 lg:tracking-[1px]'
            dangerouslySetInnerHTML={{ __html: t('mushroom.content.line5') }}
          />
          <div
            className='flex justify-center text-sm leading-[26px] lg:text-lg lg:leading-7 lg:font-medium'
            dangerouslySetInnerHTML={{ __html: t('mushroom.content.line6') }}
          />
        </div>

        <div className='mt-10 mb-8'>
          <div className='flex flex-col lg:flex-row justify-center'>
            <img src={ImgMushroom9} className='lg:w-1/2' />
            <img src={ImgMushroom10} className='lg:w-1/2' />
          </div>
        </div>
        <div
          className='lg:px-20 flex justify-center mx-auto text-sm leading-[26px] lg:text-lg lg:leading-7 lg:font-medium'
          dangerouslySetInnerHTML={{ __html: t('mushroom.content.line7') }}
        />

        <div className='mt-10 mb-8'>
          <div className='flex flex-col lg:flex-row justify-center'>
            <img src={ImgMushroom11} className='lg:w-1/2' />
            <img src={ImgMushroom15} className='lg:w-1/2' />
          </div>
        </div>
        <div className='flex flex-col lg:px-20 justify-center mx-auto text-sm leading-[26px] lg:text-lg lg:leading-7 lg:font-medium'>
          <div dangerouslySetInnerHTML={{ __html: t('mushroom.content.line8') }} />
          <div dangerouslySetInnerHTML={{ __html: t('mushroom.content.line9') }} />
        </div>

        <div className='mt-10 mb-8'>
          <div className='flex flex-col lg:flex-row justify-center'>
            <img src={ImgMushroom16} className='lg:w-1/2' />
            <img src={ImgMushroom19} className='lg:w-1/2' />
          </div>
        </div>
        <div className='flex flex-col lg:px-20 justify-center mx-auto text-sm leading-[26px] lg:text-lg lg:leading-7 lg:font-medium'>
          <div dangerouslySetInnerHTML={{ __html: t('mushroom.content.line10') }} />
          <div dangerouslySetInnerHTML={{ __html: t('mushroom.content.line11') }} />
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
            <img src={ImgMushroom25} alt='img footer' className='w-full h-full' />
            <p className=' leading-[24px] font-roboto text-[14px] max-md:leading-[20px] max-md:text-[12px] text-[#514F4E] font-semibold'>
              {t('mushroom.description')}
            </p>
          </div>
        </div>
      </div>
    </BaseAnimation>
  )
}

export default MushroomSelection

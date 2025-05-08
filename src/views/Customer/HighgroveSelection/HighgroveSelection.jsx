import React from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import BaseAnimation from 'components/common/BaseAnimation/BaseAnimation'
import { useRouter } from 'next/router'

// Use string paths for images
const Img15 = 'images/2.webp'
const Img1 = 'images/highgrova_1.png'
const Img10 = 'images/highgrova_10.png'
const Img11 = 'images/highgrova_11.png'
const Img12 = 'images/highgrova_12.png'
const Img2 = 'images/highgrova_2.png'
const Img3 = 'images/highgrova_3.png'
const Img4 = 'images/highgrova_4.png'
const Img5 = 'images/highgrova_5.png'
const Img6 = 'images/highgrova_6.png'
const Img7 = 'images/highgrova_7.png'
const Img8 = 'images/highgrova_8.png'
const Img9 = 'images/highgrova_9.png'
const Img13 = 'images/highgrove_17.png'
const ImgHorizontalDivide = 'images/horizontal-divide.png'

const getCollectionInMenu = (menus, collectionTitle) => {
  const collection = (menus || [])
    .map((item) => item.childs)
    .flat()
    .find((item) => item.title === collectionTitle)

  return collection
}

const HighgroveSelection = () => {
  const { t } = useTranslation()
  const menus = useSelector((state) => state.menus.menus)
  const collection = getCollectionInMenu(menus, 'Highgrove')

  const router = useRouter()
  return (
    <BaseAnimation className='bg-white font-["Roboto"] text-black-light-7 text-justify'>
      <div className='text-center pt-[44px] pb-[24px] '>
        <p className='text-black text-[52px] font-medium leading-[46px] max-md:text-[20px] max-md:leading-[28px] font-["Spectral"]'>
          {t('highgrove.title')}
        </p>
        <p className='mt-2 max-md:mt-0 text-[26px] leading-[28px] max-md:text-[14px] max-md:leading-[22px] font-semibold text-[#000000]'>
          {t('highgrove.description')}
        </p>
      </div>
      <img src={Img1} className='w-full h-auto ' />
      <div className='container container--medium mx-auto'>
        <div className='px-2 text-center font-bold pt-[43px] text-[20px] leading-[28px] text-[#3D3D3D] max-md:text-[16px] max-md:leading-[24px]'>
          <p>{t('highgrove.heading_1')}</p>
          <p>{t('highgrove.heading_2')}</p>
        </div>

        <div className='flex justify-center my-8'>
          <img src={Img2} className='w-full max-w-[278px] h-auto ' />
        </div>

        <div className='flex justify-center items-center mx-auto h-[40px] w-full max-w-[1076px] bg-[#AA998E] text-sm lg:text-[26px] leading-[32px] text-white font-semibold'>
          <p>{t('highgrove.description')}</p>
        </div>

        <div className='w-full max-w-[1058px] mx-auto text-center mt-8 lg:font-medium text-[14px] leading-[22px] lg:text-[24px] lg:leading-[30px] text-[#514F4E] flex flex-col gap-1 justify-center'>
          <p className='tracking-wider'>{t('highgrove.content.line1')}</p>
          <p>{t('highgrove.content.line2')}</p>
        </div>

        <div className='mt-10 mb-8'>
          <div className='flex flex-col lg:flex-row justify-center'>
            <img src={Img3} className='lg:w-1/2' />
            <img src={Img4} className='lg:w-1/2' />
          </div>
        </div>

        <div className='lg:px-20 mt-8 lg:font-medium text-lg leading-[22px] text-[#514F4E] lg:text-[26px] lg:leading-[36px]'>
          <div
            className='leading-8 lg:tracking-[1px]'
            dangerouslySetInnerHTML={{ __html: t('highgrove.content.line3') }}
          />
          <p className='flex justify-center text-sm leading-[26px] lg:text-lg lg:leading-7 lg:font-medium'>
            {t('highgrove.content.line4')}
          </p>
        </div>

        <div className='mt-10 mb-8'>
          <div className='flex flex-col lg:flex-row justify-center'>
            <img src={Img5} className='lg:w-1/2' />
            <img src={Img6} className='lg:w-1/2' />
          </div>
        </div>

        <div className='flex flex-col gap-4 lg:px-20 mt-8 lg:font-medium text-lg leading-[22px] text-[#514F4E] lg:text-[26px] lg:leading-[36px]'>
          <div
            className='max-w-[846px] mx-auto text-center leading-8 lg:tracking-[1px]'
            dangerouslySetInnerHTML={{ __html: t('highgrove.content.line5') }}
          />
          <div
            className='flex justify-center text-sm leading-[26px] lg:text-lg lg:leading-7 lg:font-medium'
            dangerouslySetInnerHTML={{ __html: t('highgrove.content.line6') }}
          />
        </div>

        <div className='mt-10 mb-8'>
          <div className='flex flex-col lg:flex-row justify-center'>
            <img src={Img7} className='lg:w-1/2' />
            <img src={Img8} className='lg:w-1/2' />
          </div>
        </div>
        <div
          className='lg:px-20 flex justify-center mx-auto text-sm leading-[26px] lg:text-lg lg:leading-7 lg:font-medium'
          dangerouslySetInnerHTML={{ __html: t('highgrove.content.line7') }}
        />

        <div className='mt-10 mb-8'>
          <div className='flex flex-col lg:flex-row justify-center'>
            <img src={Img9} className='lg:w-1/2' />
            <img src={Img10} className='lg:w-1/2' />
          </div>
        </div>
        <div className='flex flex-col lg:px-20 justify-center mx-auto text-sm leading-[26px] lg:text-lg lg:leading-7 lg:font-medium'>
          <div dangerouslySetInnerHTML={{ __html: t('highgrove.content.line8') }} />
          <div dangerouslySetInnerHTML={{ __html: t('highgrove.content.line9') }} />
        </div>

        <div className='mt-10 mb-8'>
          <div className='flex flex-col lg:flex-row justify-center'>
            <img src={Img11} className='lg:w-1/2' />
            <img src={Img12} className='lg:w-1/2' />
          </div>
        </div>
        <div className='flex flex-col lg:px-20 justify-center mx-auto text-sm leading-[26px] lg:text-lg lg:leading-7 lg:font-medium'>
          <div dangerouslySetInnerHTML={{ __html: t('highgrove.content.line10') }} />
          <div dangerouslySetInnerHTML={{ __html: t('highgrove.content.line11') }} />
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
            <img src={Img13} alt='img footer' className='w-full h-full' />
            <p className=' leading-[24px] font-roboto text-[14px] max-md:leading-[20px] max-md:text-[12px] text-[#514F4E] font-semibold'>
              {t('highgrove.description')}
            </p>
          </div>
        </div>
      </div>
    </BaseAnimation>
  )
}

export default HighgroveSelection

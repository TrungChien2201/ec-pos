import React from 'react'

import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import BaseAnimation from 'components/common/BaseAnimation/BaseAnimation'
import banner from 'resourse/images/gorilla/banner.webp'
import logo from 'resourse/images/gorilla/logo.webp'
import Img1 from 'resourse/images/gorilla/1.webp'
import Img2 from 'resourse/images/gorilla/2.webp'
import Img3 from 'resourse/images/gorilla/3.webp'
import Img4 from 'resourse/images/gorilla/4.webp'
import Img5 from 'resourse/images/gorilla/5.webp'
import Img6 from 'resourse/images/gorilla/6.webp'
import Img7 from 'resourse/images/gorilla/7.webp'
import Img8 from 'resourse/images/gorilla/8.webp'
import ImgHorizontalDivide from 'resourse/images/horizontal-divide.png'
import ImgFooter from 'resourse/images/gorilla/footer.webp'
import { useRouter } from 'next/router'

const getCollectionInMenu = (menus, collectionTitle) => {
  const collection = (menus || [])
    .map((item) => item.childs)
    .flat()
    .find((item) => item.title === collectionTitle)

  return collection
}

const AboutGorilla = () => {
  const { t } = useTranslation()
  const menus = useSelector((state) => state.menus.menus)
  const collection = getCollectionInMenu(menus, 'Gorilla Spirits Co.')

  const router = useRouter()
  return (
    <BaseAnimation className='bg-white font-["Roboto"] text-black-light-7 text-justify'>
      <div className='text-center pt-[44px] pb-[24px] '>
        <p className='text-black text-[52px] font-medium leading-[46px] max-md:text-[20px] max-md:leading-[28px] font-["Spectral"]'>
          {t('gorilla.title')}
        </p>
        <p className='mt-2 max-md:mt-0 text-[26px] leading-[28px] max-md:text-[14px] max-md:leading-[22px] font-semibold text-[#000000]'>
          {t('gorilla.description')}
        </p>
      </div>
      <img src={banner} className='w-full h-auto ' />
      <div className='container container--medium mx-auto'>
        <div className='px-2 text-center font-bold pt-[43px] text-[20px] leading-[28px] text-[#3D3D3D] max-md:text-[16px] max-md:leading-[24px]'>
          <p>{t('gorilla.heading_1')}</p>
          <p>{t('gorilla.heading_2')}</p>
        </div>

        <div className='flex justify-center my-8'>
          <img src={logo} className='w-full max-w-[278px] h-auto ' />
        </div>

        <div className='flex justify-center items-center mx-auto h-[40px] w-full max-w-[1076px] bg-[#AA998E] text-sm lg:text-[26px] leading-[32px] text-white font-semibold'>
          <p>{t('gorilla.description')}</p>
        </div>

        <div className='w-full max-w-[1058px] mx-auto text-center mt-8 lg:font-medium text-[14px] leading-[22px] lg:text-[24px] lg:leading-[30px] text-[#514F4E] flex flex-col gap-1 justify-center'>
          <p className='tracking-wider'>{t('gorilla.content.line1')}</p>
          <p>{t('gorilla.content.line2')}</p>
        </div>

        <div className='mt-10 mb-8'>
          <div className='flex flex-col lg:flex-row justify-center'>
            <a
              className='w-full'
              href='https://gorillas.org/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img className='w-full' src={Img1} />
            </a>
            <a
              className='w-full'
              href='https://gorillas.org/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img className='w-full' src={Img2} />
            </a>
          </div>
        </div>

        <div className='lg:px-20 mt-8 lg:font-medium text-lg leading-[22px] text-[#514F4E] lg:text-[26px] lg:leading-[36px]'>
          <div
            className='leading-8 lg:tracking-[1px]'
            dangerouslySetInnerHTML={{ __html: t('gorilla.content.line3') }}
          />
          <p className='flex justify-center text-sm leading-[26px] lg:text-lg lg:leading-7 lg:font-medium'>
            {t('gorilla.content.line4')}
          </p>
        </div>

        <div className='mt-10 mb-8'>
          <div className='flex flex-col lg:flex-row justify-center'>
            <img src={Img3} className='lg:w-1/2' />
            <img src={Img4} className='lg:w-1/2' />
          </div>
        </div>

        <div className='flex flex-col gap-4 lg:px-20 mt-8 lg:font-medium text-lg leading-[22px] text-[#514F4E] lg:text-[26px] lg:leading-[36px]'>
          <div
            className='max-w-[846px] mx-auto text-center leading-8 lg:tracking-[1px]'
            dangerouslySetInnerHTML={{ __html: t('gorilla.content.line5') }}
          />
          <div
            className='flex justify-center text-sm leading-[26px] lg:text-lg lg:leading-7 lg:font-medium'
            dangerouslySetInnerHTML={{ __html: t('gorilla.content.line6') }}
          />
        </div>

        <div className='mt-10 mb-8'>
          <div className='flex flex-col lg:flex-row justify-center'>
            <img src={Img5} className='lg:w-1/2' />
            <img src={Img6} className='lg:w-1/2' />
          </div>
        </div>
        <div
          className='lg:px-20 flex justify-center mx-auto text-sm leading-[26px] lg:text-lg lg:leading-7 lg:font-medium'
          dangerouslySetInnerHTML={{ __html: t('gorilla.content.line7') }}
        />

        <div className='mt-10 mb-8'>
          <div className='flex flex-col lg:flex-row justify-center'>
            <img src={Img7} className='lg:w-1/2' />
            <img src={Img8} className='lg:w-1/2' />
          </div>
        </div>
        <div className='flex flex-col lg:px-20 justify-center mx-auto text-sm leading-[26px] lg:text-lg lg:leading-7 lg:font-medium'>
          <div dangerouslySetInnerHTML={{ __html: t('gorilla.content.line8') }} />
          <div dangerouslySetInnerHTML={{ __html: t('gorilla.content.line9') }} />
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
            <img src={ImgFooter} alt='img footer' className='w-full h-full' />
            <p className=' leading-[24px] font-roboto text-[14px] max-md:leading-[20px] max-md:text-[12px] text-[#514F4E] font-semibold'>
              {t('gorilla.description')}
            </p>
          </div>
        </div>
      </div>
    </BaseAnimation>
  )
}

export default AboutGorilla

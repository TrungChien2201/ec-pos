import React from 'react'

import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'

import BaseAnimation from 'components/common/BaseAnimation/BaseAnimation'

// Use string paths for images
const ImgHorizontalDivide = 'images/horizontal-divide.png'
const Img1 = 'images/maraba/1.webp'
const Img2 = 'images/maraba/2.webp'
const Img3 = 'images/maraba/3.webp'
const Img4 = 'images/maraba/4.webp'
const Img5 = 'images/maraba/5.webp'
const Img6 = 'images/maraba/6.webp'
const Img7 = 'images/maraba/7.webp'
const Img8 = 'images/maraba/8.webp'
const banner = 'images/maraba/banner.webp'
const ImgFooter = 'images/maraba/footer.webp'
const logo = 'images/maraba/logo.webp'

const getCollectionInMenu = (menus, collectionTitle) => {
  const collection = (menus || [])
    .map((item) => item.childs)
    .flat()
    .find((item) => item.title === collectionTitle)

  return collection
}

const AboutMaraba = () => {
  const { t } = useTranslation()
  const menus = useSelector((state) => state.menus.menus)
  const collection = getCollectionInMenu(menus, 'Maraba')

  const router = useRouter()
  return (
    <BaseAnimation className='bg-white font-["Roboto"] text-black-light-7 text-justify'>
      <div className='text-center pt-[44px] pb-[24px] '>
        <p className='text-black text-[52px] font-medium leading-[46px] max-md:text-[20px] max-md:leading-[28px] font-["Spectral"]'>
          {t('maraba.title')}
        </p>
        <p className='mt-2 max-md:mt-0 text-[26px] leading-[28px] max-md:text-[14px] max-md:leading-[22px] font-semibold text-[#000000]'>
          {t('maraba.description')}
        </p>
      </div>
      <img src={banner} className='w-full h-auto ' />
      <div className='container container--medium mx-auto'>
        <div className='text-center font-bold pt-[43px] text-[20px] leading-[28px] text-[#3D3D3D] max-md:text-[16px] max-md:leading-[24px]'>
          <p>{t('maraba.heading_1')}</p>
          <p>{t('maraba.heading_2')}</p>
        </div>

        <div className='flex justify-center my-8'>
          <img src={logo} className='w-full max-w-[278px] h-auto ' />
        </div>

        <div className='flex justify-center items-center mx-auto h-[40px] w-full max-w-[1076px] bg-[#7D2224] text-sm lg:text-[26px] leading-[32px] text-white font-semibold'>
          <p>{t('maraba.description')}</p>
        </div>

        <div className='w-full max-w-[1058px] mx-auto text-center mt-8 lg:font-medium text-[14px] leading-[22px] lg:text-[24px] lg:leading-[30px] text-[#514F4E] flex flex-col gap-1 justify-center'>
          <p className='tracking-wider'>{t('maraba.content.line1')}</p>
          <p>{t('maraba.content.line2')}</p>
        </div>

        <div className='mt-10 mb-8'>
          <div className='flex flex-col lg:flex-row justify-center'>
            <img src={Img1} className='lg:w-1/2' />
            <img src={Img2} className='lg:w-1/2' />
          </div>
        </div>
        <div className='flex flex-col items-center lg:px-[108px] mt-8 lg:font-medium text-lg leading-[22px] text-[#514F4E] lg:text-2xl lg:leading-[36px]'>
          <div
            className='leading-8 lg:tracking-[1px]'
            dangerouslySetInnerHTML={{ __html: t('maraba.content.line3') }}
          />
          <div
            className='text-sm leading-[22px] lg:text-lg lg:leading-7 lg:font-medium'
            dangerouslySetInnerHTML={{ __html: t('maraba.content.line4') }}
          />
          <p className='mt-5 lg:leading-8 lg:tracking-[1px]'>{t('maraba.content.line5')}</p>
        </div>

        <div className='mt-10 mb-8'>
          <div className='flex flex-col lg:flex-row justify-center'>
            <img src={Img3} className='lg:w-1/2' />
            <img src={Img4} className='lg:w-1/2' />
          </div>
        </div>

        <div className='xl:px-[108px] mt-8 lg:font-medium text-lg leading-[22px] text-[#514F4E] lg:text-2xl lg:leading-[36px]'>
          <div
            className='max-w-[846px] mx-auto text-center'
            dangerouslySetInnerHTML={{ __html: t('maraba.content.line6') }}
          />
          <div
            className='flex justify-center mt-5 text-sm leading-6 lg:text-lg lg:leading-7 lg:font-medium'
            dangerouslySetInnerHTML={{ __html: t('maraba.content.line7') }}
          />
        </div>

        <div className='mt-10 mb-8'>
          <div className='flex flex-col lg:flex-row justify-center'>
            <a
              className='w-full'
              href='https://www.kulaproject.org/of-land-and-women'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img className='w-full' src={Img5} />
            </a>
            <a
              className='w-full'
              href='https://www.kulaproject.org/of-land-and-women'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img className='w-full' src={Img6} />
            </a>
          </div>
        </div>
        <div
          className='flex justify-center mx-auto xl:px-[108px] text-sm leading-[26px] lg:text-lg lg:leading-7 lg:font-medium'
          dangerouslySetInnerHTML={{ __html: t('maraba.content.line8') }}
        />

        <div className='mt-10 mb-8'>
          <div className='flex flex-col lg:flex-row justify-center'>
            <img src={Img7} className='lg:w-1/2' />
            <img src={Img8} className='lg:w-1/2' />
          </div>
        </div>
        <div className='flex flex-col items-center mx-auto text-sm leading-[26px] lg:text-lg lg:leading-9 lg:font-medium text-left'>
          <div
            className='flex justify-center w-full xl:px-[108px] leading-7'
            dangerouslySetInnerHTML={{ __html: t('maraba.content.line9') }}
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
            className='cursor-pointer flex flex-col items-center mx-auto w-[433px] h-[174px] max-md:w-[343px] max-md:h-[140px] border-[1px] border-solid border-[#ABABAB] rounded-[4px]'
          >
            <img src={ImgFooter} alt='img footer' className='w-full h-full' />
            <p className='leading-[24px] font-roboto text-[14px] max-md:leading-[20px] max-md:text-[12px] text-[#514F4E] font-semibold'>
              {t('maraba.description')}
            </p>
          </div>
        </div>
      </div>
    </BaseAnimation>
  )
}

export default AboutMaraba

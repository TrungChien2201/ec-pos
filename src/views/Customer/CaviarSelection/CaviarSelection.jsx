import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import BaseAnimation from 'components/common/BaseAnimation/BaseAnimation'
import BannerCollection from 'components/BannerCollection'

// Use string paths instead of direct imports
const ImgHalCaviar1 = 'images/halcaviar-1.png'
const ImgHalCaviar2 = 'images/halcaviar-2.png'
const ImgHalCaviar3 = 'images/halcaviar-3.png'
const ImgHalCaviar4 = 'images/halcaviar-4.png'
const ImgHalCaviar6 = 'images/halcaviar-6.png'
const ImgHalCaviar7 = 'images/halcaviar-7.webp'
const ImgHorizontalDivide = 'images/horizontal-divide.png'

const getCollectionInMenu = (menus, collectionTitle) => {
  const collection = (menus || [])
    .map((item) => item.childs)
    .flat()
    .find((item) => item.title === collectionTitle)

  return collection
}

const CaviarSelection = () => {
  const { t } = useTranslation()
  const menus = useSelector((state) => state.menus.sections)
  const collection = getCollectionInMenu(menus, 'HAL CAVIAR')

  return (
    <BaseAnimation className='bg-white text-basic font-roboto'>
      <div className='w-full p-[24px] pt-[44px] flex flex-col items-center justify-center text-center'>
        <p className='text-[52px] font-medium leading-[46px] max-md:text-[20px] max-md:leading-[28px] font-["Spectral"]'>
          {t('hal_caviar.title')}
        </p>
        <p className='text-[26px] leading-[28px] max-md:text-[14px] max-md:leading-[22px] font-semibold text-[#000000]'>
          {t('hal_caviar.description')}
        </p>
      </div>
      <div className='max-sm:hidden'>
        <div className='flex justify-center'>
          <img src={ImgHalCaviar4} className='w-full h-auto ' />
        </div>
      </div>
      <div className='sm:hidden'>
        <div className='flex justify-center'>
          <img src={ImgHalCaviar6} className='w-full h-auto' />
        </div>
      </div>
      <div className='flex justify-center bg-white pt-5'>
        <div className='container'>
          <div className='w-full flex flex-col items-center text-center text-[#514F4E] max-md:text-[#000000] '>
            <div className='text-[34px] font-black leading-[48px] max-md:text-[24px] font-roboto text-[#514F4E]'>
              {t('hal_caviar.heading_1')}
            </div>
            <div className='flex font-black lg:flex-row lg:flex-wrap flex-col  flex-nowrap justify-center items-center  text-[21px] leading-[32px] max-md:text-[16px] pt-2 md:px-3 font-roboto text-[#514F4E]'>
              <span>{t('hal_caviar.sub1_heading_1')}</span>
              <span>{t('hal_caviar.sub2_heading_1')}</span>
              <span className='max-md:tracking-widest'>{t('hal_caviar.sub3_heading_1')}</span>
            </div>

            <div
              dangerouslySetInnerHTML={{ __html: t('hal_caviar.paragraph_1') }}
              className='mt-9  flex flex-col gap-[15px] max-md:gap-2 font-roboto font-medium text-[18px] leading-[22px] max-md:text-[14px] text-[#514F4E] max-md:text-[#000000D9]  max-md:leading-[22px] '
            />
          </div>

          <div className='md:hidden py-[10px] pt-[32px] '>
            <img src='images/image-59.png' className='w-full' />
          </div>
          <div className='max-md:hidden flex gap-[22px] pt-10 pb-3'>
            <div className='flex-1 overflow-hidden'>
              <img src={ImgHalCaviar1} className='w-full' />
            </div>
            <div className='flex-1 overflow-hidden'>
              <img src={ImgHalCaviar2} className='w-full' />
            </div>
            <div className='flex-1 overflow-hidden'>
              <img src={ImgHalCaviar3} className='w-full' />
            </div>
          </div>

          <div
            dangerouslySetInnerHTML={{ __html: t('hal_caviar.paragraph_2') }}
            className='flex items-center justify-center w-full max-lg:px-[20px] font-medium text-center gap-[15px] max-md:gap-[8px] flex-col font-roboto text-[18px] leading-[22px] max-md:text-[14px] max-md:leading-[22px] text-[#514F4E] max-md:text-[#000000D9] cursor-pointer'
          />
          <div className='flex justify-center py-[24px] overflow-x-hidden'>
            <img
              src={ImgHorizontalDivide}
              alt=''
              className='object-cover object-center h-[45px] max-md:h-[32px] w-full'
            />
          </div>
          <BannerCollection
            className='pb-10'
            title={t('hal_caviar.title_footer')}
            image={ImgHalCaviar7}
            description={t('hal_caviar.description')}
            collectionId={collection?.id}
          />
        </div>
      </div>
    </BaseAnimation>
  )
}

export default CaviarSelection

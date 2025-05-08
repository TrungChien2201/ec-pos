import React from 'react'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'

// Use string paths for images
const ImgHorizontalDivide = 'images/horizontal-divide.png'
const Img9 = 'images/table-ware/1.webp'
const Img2 = 'images/table-ware/baner-mb.png'
const Img1 = 'images/table-ware/baner.png'
const Img4 = 'images/table-ware/logo-mb.png'
const Img3 = 'images/table-ware/logo.png'
const Img6 = 'images/table-ware/section1-mb.png'
const Img5 = 'images/table-ware/section1.png'

const getCollectionInMenu = (menus, collectionTitle) => {
  const collection = (menus || [])
    .map((item) => item.childs)
    .flat()
    .find((item) => item.title === collectionTitle)

  return collection
}

const TablewareSelection = () => {
  const { t } = useTranslation()
  const menus = useSelector((state) => state.menus.menus)
  const collection = getCollectionInMenu(menus, 'Tableware')

  const router = useRouter()
  return (
    <div className='bg-white'>
      <div className='hidden md:block'>
        <img src={Img1} alt='' className='w-full' />
      </div>
      <div className='md:hidden'>
        <img src={Img2} alt='' className='w-full' />
      </div>
      <div className='container container--medium mx-auto'>
        <div className='flex justify-center py-[24px] overflow-x-hidden'>
          <img
            src={ImgHorizontalDivide}
            alt=''
            className='object-cover object-center h-[45px] max-md:h-[32px] w-full'
          />
        </div>
        <div className='flex justify-center'>
          <div className='hidden md:block'>
            <img src={Img3} alt='' className='w-full' />
          </div>
          <div className='md:hidden'>
            <img src={Img4} alt='' className='w-full' />
          </div>
        </div>
        <div className='flex justify-center py-[24px] overflow-x-hidden'>
          <img
            src={ImgHorizontalDivide}
            alt=''
            className='object-cover object-center h-[45px] max-md:h-[32px] w-full'
          />
        </div>
        <div className='hidden md:block'>
          <img src={Img5} alt='' className='w-full' />
        </div>
        <div className='md:hidden'>
          <img src={Img6} alt='' className='w-full' />
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
            <img src={Img9} alt='img footer' className='w-full h-full' />
            <p className=' leading-[24px] font-roboto text-[14px] max-md:leading-[20px] max-md:text-[12px] text-[#514F4E] font-semibold'>
              {t('tableware.description')}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TablewareSelection

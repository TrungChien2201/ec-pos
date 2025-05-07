import { useRouter } from 'next/router'
import React from 'react'
import { useSelector } from 'react-redux'
import ImgHorizontalDivide from 'resourse/images/horizontal-divide.png'
import Img9 from 'resourse/images/table-ware/1.webp'
import Img2 from 'resourse/images/table-ware/baner-mb.png'
import Img1 from 'resourse/images/table-ware/baner.png'
import Img4 from 'resourse/images/table-ware/logo-mb.png'
import Img3 from 'resourse/images/table-ware/logo.png'
import Img6 from 'resourse/images/table-ware/section1-mb.png'
import Img5 from 'resourse/images/table-ware/section1.png'

const getCollectionInMenu = (menus, collectionTitle) => {
  const collection = (menus || [])
    .map((item) => item.childs)
    .flat()
    .find((item) => item.title === collectionTitle)

  return collection
}

const TablewareSelection = () => {
  const router = useRouter()
  const locale = useSelector((state) => state.user.locale)
  const menus = useSelector((state) => state.menus.menus)

  const collection = getCollectionInMenu(menus, `Signature's Original Tableware`)

  return (
    <div className='bg-white text-center pb-[36px] max-md:pb-[29px]'>
      <div className='container mx-auto text-center font-roboto pt-[44px] max-md:pt-[40px]'>
        <h1 className='font-["Spectral"] text-[#000] text-[52px] leading-[46px]  font-normal max-md:text-[20px] max-md:leading-[20px] '>
          {locale['table_ware.title']}
        </h1>
        <p className='mt-[12px] max-md:mt-[4px] text-[#000000] text-[26px] leading-[30px] font-semibold max-md:text-[14px] max-md:leading-[22px]'>
          {locale['table_ware.description']}
        </p>
      </div>

      <div className='max-sm:hidden mt-[24px]'>
        <div className='flex justify-center'>
          <img src={Img1} className='w-full h-auto ' />
        </div>
      </div>
      <div className='sm:hidden mt-[24px]'>
        <div className='flex justify-center'>
          <img src={Img2} className='w-full  h-[200px] object-fit object-cover' />
        </div>
      </div>

      <div className='max-md:px-4'>
        <div className='mt-[28px] text-[#58595B] text-[20px] leading-[36px] max-md:text-[16px] max-md:leading-[28px] font-bold '>
          <p>
            {locale['table_ware.heading_1_line1']}
            <br className='hidden max-md:block' />
            {locale['table_ware.heading_1_line2']}
          </p>
          <p>{locale['table_ware.heading_1_line3']}</p>
        </div>

        <div className='max-sm:hidden mt-[20px]'>
          <div className='flex justify-center '>
            <img src={Img3} className='w-[303px] h-[216px] p-4' />
          </div>
        </div>
        <div className='sm:hidden mt-[32px]'>
          <div className='flex justify-center'>
            <img src={Img4} className='w-[200px] h-[143px] p-4 ' />
          </div>
        </div>
      </div>

      <div className='mt-[12px] h-[40px]  bg-[#231F20] w-full max-md:w-[343px] max-w-[1076px] mx-auto flex justify-center items-center'>
        <p className='text-[26px] leading-[36px] max-md:text-[14px] max-md:leading-[22px] font-semibold text-white'>
          {locale['table_ware.description']}
        </p>
      </div>

      <p className='mt-[24px] max-md:mt-[20px] text-[26px] leading-[31px] font-semibold text-[#231F20] max-md:text-[16px] max-md:leading-[22px]'>
        {locale['table_ware.heading_2']}
      </p>

      <div className='max-md:px-4'>
        <div className='tracking-[1px]  mt-[24px] max-md:mt-[20px] text-[#6D6E71] text-[18px] leading-[30px] font-normal  max-md:text-[14px] max-md:leading-[22px] max-md:text-[#575757D9] '>
          <p>{locale['table_ware.content.line1']}</p>
          <p>{locale['table_ware.content.line2']}</p>
          <p>{locale['table_ware.content.line3']}</p>
          <p>{locale['table_ware.content.line4']}</p>
          <p>{locale['table_ware.content.line5']}</p>
          <p>{locale['table_ware.content.line6']}</p>
          <p>{locale['table_ware.content.line7']}</p>
          <p>{locale['table_ware.content.line8']}</p>
          <p>{locale['table_ware.content.line9']}</p>
          <p>{locale['table_ware.content.line10']}</p>
          <p>{locale['table_ware.content.line11']}</p>
          <p>{locale['table_ware.content.line12']}</p>
        </div>

        <div className='max-sm:hidden mt-[36px]'>
          <img src={Img5} className='w-full max-w-[1076px] ' alt='' />
        </div>

        <div className='sm:hidden mt-[32px]'>
          <img src={Img6} className='w-full max-w-[343px] ' alt='' />
        </div>
      </div>

      <div className='flex justify-center pt-[36px] max-md:pt-[30px] pb-[24px] overflow-x-hidden'>
        <img
          src={ImgHorizontalDivide}
          alt=''
          className='object-cover object-center max-w-[1076px] h-[45px] max-md:h-[32px]'
        />
      </div>

      <p className='text-center font-["Spectral"] text-[32px] max-md:text-[24px] font-medium leading-[27px] text-[#514f4e]  '>
        {locale['hal_caviar.title_footer']}
      </p>

      <div
        onClick={() => {
          router.push(`/products?collectionId=${collection?.id}`)
        }}
        className='mx-auto mt-[8px]  overflow-hidden flex flex-col justify-between items-center  cursor-pointer h-[174px] w-[433px] max-md:w-[343px] max-md:h-[140px] rounded-[4px] bg-cover border-[1px] border-solid border-[#ABABAB]'
      >
        <img src={Img9} alt='' className='w-full h-[145px]' />
        <p className=' leading-[22px] max-md:leading-[22px]  text-[14px] text-[#514f4e] max-md:text-[12px]  font-semibold '>
          {locale['table_ware.description']}
        </p>
      </div>
    </div>
  )
}

export default TablewareSelection

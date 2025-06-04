import { Layout } from 'antd'
import { useTranslation } from 'react-i18next'

const { Footer } = Layout

const CustomFooter = ({ isHomePage }) => {
  const { t } = useTranslation()
  return isHomePage ? (
    <Footer className='w-full h-full p-0 pt-2 text-center overflow-hidden !bg-white'>
      <div className='p-0 flex flex-col justify-center items-center !bg-white'>
        <div className='container flex justify-center'>
          <div className='relative image--footer overflow-hidden w-[100%] max-w-[450px] lg:max-w-[calc(632/1280*100%)]'>
            <img className='w-full md:hidden' src='images/footer-mobile.png' />
            <img className='w-full max-md:hidden' src='images/footer-desktop.png' />
          </div>
        </div>

        <img src='images/image-19.png' alt='bg' className='block w-full h-1 lg:h-2 mt-10' />
        <div className='font-normal container mx-auto text-[16px] leading-[28.5px] mt-4 mb-4 md:my-5 md:mb-5 px-3 md:px-8 xl:px-6 text-[#1074BC]'>
          <p className='leading-[28.5px]'>
            <span>Signature Ginza（シグニチャー銀座）：GSIX | 銀座シックス| B2階 | 銀座店</span>
            <span className='pl-8'>
              Signature Tokyo（シグニチャー馬込）：東京馬込 | 金子コード株式会社（本社）| 1階'
            </span>
          </p>
          <p className='leading-[28.5px]'>
            ※シグニチャーのご予約は直接店舗へご連絡ください。銀座シックスSignature: 080-1252-1390
          </p>
        </div>
      </div>
    </Footer>
  ) : (
    <Footer className='flex items-center h-[60px] justify-center  px-4 text-base lg:text-xl text-[#4F4F4F] bg-[#E6E7E9]'>
      <p>{t('mushroom.url_page')}</p>
    </Footer>
  )
}

export default CustomFooter

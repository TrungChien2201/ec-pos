import React from 'react'

import { useSelector } from 'react-redux'

import BaseAnimation from 'components/common/BaseAnimation/BaseAnimation'
import useWindowSize from 'hooks/useWindowSize'
import { useRouter } from 'next/router'
import ImgHorizontalDivide from 'resourse/images/horizontal-divide.png'
import ImgMushroom1 from 'resourse/images/mushroom-1.png'
import ImgMushroom10 from 'resourse/images/mushroom-10.png'
import ImgMushroom11 from 'resourse/images/mushroom-11.png'
import ImgMushroom15 from 'resourse/images/mushroom-15.png'
import ImgMushroom16 from 'resourse/images/mushroom-16.png'
import ImgMushroom19 from 'resourse/images/mushroom-19.jpg'
import ImgMushroom2 from 'resourse/images/mushroom-2.png'
import ImgMushroom20 from 'resourse/images/mushroom-20.png'
import ImgMushroom21 from 'resourse/images/mushroom-21.png'
import ImgMushroom24 from 'resourse/images/mushroom-24.png'
import ImgMushroom3 from 'resourse/images/mushroom-3.png'
import ImgMushroom6 from 'resourse/images/mushroom-6.png'
import ImgMushroom7 from 'resourse/images/mushroom-7.png'
import ImgMushroom8 from 'resourse/images/mushroom-8.png'
import ImgMushroom9 from 'resourse/images/mushroom-9.png'
import ImgMushroom25 from 'resourse/images/mushroom_fix.png'

const getCollectionInMenu = (menus, collectionTitle) => {
  const collection = (menus || [])
    .map((item) => item.childs)
    .flat()
    .find((item) => item.title === collectionTitle)

  return collection
}

const MushroomSelection = () => {
  const locale = useSelector((state) => state.user.locale)
  const menus = useSelector((state) => state.menus.menus)
  const collection = getCollectionInMenu(menus, 'Bhutan Premium 7 Matsutake')
  const router = useRouter()
  const { width } = useWindowSize()

  function checkScreenWidth() {
    if (window.innerWidth === 1024) {
      return true
    }
    if (window.innerWidth <= 1355 && window.innerWidth >= 1024) {
      return 'custom_size'
    } else {
      return false
    }
  }

  return (
    <BaseAnimation className='bg-white text-basic font-roboto '>
      <div className='p-[24px] pt-[44px]  flex flex-col items-center justify-center text-center'>
        <p className='text-[52px] font-meidum leading-[46px] max-md:text-[20px] max-md:leading-[28px] font-["Spectral"]'>
          {locale['mushroom.title']}
        </p>
        <p className='mt-2 max-md:mt-0 text-[26px] leading-[28px] max-md:text-[14px] max-md:leading-[22px] font-semibold text-[#000000]'>
          {locale['mushroom.sub_title']}
        </p>
      </div>

      <div className='max-sm:hidden'>
        <div className='flex justify-center'>
          <img src={ImgMushroom1} className='w-full h-[438px] object-cover ' />
        </div>
      </div>

      <div className='sm:hidden'>
        <div className='flex justify-center'>
          <img src={ImgMushroom2} className=' w-full  h-[144px] ' />
        </div>
      </div>

      <div className='ml-[107px] mr-[108px] mb-[49px] mt-[76px] max-md:m-0 max-md:mt-[24px] max-md:mb-0   flex flex-col gap-3 max-md:gap-0'>
        <h3
          className={`max-md:ml-[47px] max-md:mr-[45px]  max-md:pb-[12px] font-["A_OTF_A1_Mincho_Std"] text-center font-normal   text-[#000000] ${
            checkScreenWidth()
              ? 'text-[38px] leading-[46px]'
              : 'lg:text-[40px] lg:leading-[48px] md:text-[38px] md:leading-[46px] text-[20px] leading-[28px]'
          } `}
        >
          {locale['mushroom.heading_1']}
        </h3>
        <p
          dangerouslySetInnerHTML={{ __html: locale['mushroom.sub1_heading_1'] }}
          className={`max-md:flex max-md:flex-col font-["A_OTF_A1_Mincho_Std"] text-center font-normal   text-[#000000D9] ${
            checkScreenWidth()
              ? 'text-[22px] leading-[30px]'
              : 'lg:text-[24px] lg:leading-[32px] md:text-[22px] md:leading-[30px] text-[16px] leading-[24px]'
          } `}
        />

        <p
          dangerouslySetInnerHTML={{ __html: locale['mushroom.sub2_heading_1'] }}
          className={` max-md:flex max-md:flex-col font-["A_OTF_A1_Mincho_Std"] text-center font-normal   text-[#000000D9] ${
            checkScreenWidth()
              ? 'text-[22px] leading-[30px]'
              : 'lg:text-[24px] lg:leading-[32px] md:text-[22px] md:leading-[30px] text-[16px] leading-[24px]'
          } `}
        />

        <div className=' flex gap-[45px] max-md:gap-[17px]   lg:flex-row md:flex-row flex-col justify-center items-center  mt-[30px] h-fit  '>
          <div className='flex justify-end '>
            <img
              src={ImgMushroom3}
              alt=''
              className=' max-w-[384px]  w-[100%] max-h-[255px]  max-md:w-[289px] max-md:h-[191px] max-md:mx-auto  object-cover '
            />{' '}
          </div>
          <p
            dangerouslySetInnerHTML={{ __html: locale['mushroom.sub_img_heading1'] }}
            className={`max-md:w-[343px] max-md:tracking-widest max-md:mx-[16px] font-["roboto"]    text-[#000000] flex flex-col gap-1 font-normal ${
              checkScreenWidth()
                ? 'text-[22px] leading-[30px]'
                : 'lg:text-[24px] lg:leading-[32px] md:text-[22px] md:leading-[30px]  text-[16px] leading-[24px]'
            } `}
          />
        </div>
      </div>
      <div className='bg-[url("/images/mushroom-5.png")] py-5  max-md:py-0 mt-[32px] bg-cover bg-center max-md:bg-right max-md:bg-[url("/images/mushroom-23.png")]  bg-no-repeat '>
        <div className='  flex flex-col justify-center items-center'>
          <div className='text-center mb-[56px] mt-[34px] max-md:mb-[30px]'>
            <h4
              className={`font-["A_OTF_A1_Mincho_Std"] text-center font-normal   text-[#000000] ${
                checkScreenWidth()
                  ? 'text-[36px] leading-[44px]'
                  : 'lg:text-[38px] lg:leading-[46px] md:text-[36px] md:leading-[44px]  text-[20px] leading-[28px]'
              }`}
            >
              {locale['mushroom.heading_2']}
            </h4>
            <h3
              dangerouslySetInnerHTML={{ __html: locale['mushroom.sub1_heading_2'] }}
              className={`flex max-md:flex-col flex-wrap justify-center font-["A_OTF_A1_Mincho_Std"] text-center font-normal   text-[#F05430] ${
                checkScreenWidth()
                  ? 'text-[36px] leading-[44px]'
                  : 'lg:text-[38px] lg:leading-[46px] md:text-[36px] md:leading-[44px]  text-[20px] leading-[28px]'
              } `}
            />
            <h4
              className={`font-["A_OTF_A1_Mincho_Std"] text-center font-normal   text-[#000000] ${
                checkScreenWidth()
                  ? 'text-[36px] leading-[44px]'
                  : 'lg:text-[38px] lg:leading-[46px] md:text-[36px] md:leading-[44px]  text-[20px] leading-[28px]'
              }`}
            >
              {locale['mushroom.sub2_heading_2']}
            </h4>
          </div>
          <div className='flex justify-center max-md:flex-col gap-[44px]   ml-[100px] mr-[134px] max-md:pl-[16px] max-md:pr-[16px] max-md:mx-0'>
            <div className='  flex flex-col gap-[35px] basis-1/2'>
              <p
                dangerouslySetInnerHTML={{ __html: locale['mushroom.paragraph1_heading_2'] }}
                className={`flex flex-col gap-3 font-["A_OTF_A1_Mincho_Std"] text-left font-normal   text-[#000000D9] ${
                  checkScreenWidth()
                    ? 'text-[18px] leading-[30px]'
                    : 'lg:text-[20px] lg:leading-[32px] md:text-[18px] md:leading-[30px] text-[16px] leading-[24px]'
                } `}
              />

              <p
                dangerouslySetInnerHTML={{ __html: locale['mushroom.paragraph2_heading_2'] }}
                className={`flex flex-col gap-3 font-["A_OTF_A1_Mincho_Std"] text-left font-normal   text-[#000000D9] ${
                  checkScreenWidth()
                    ? 'text-[18px] leading-[30px]'
                    : 'lg:text-[20px] lg:leading-[32px] md:text-[18px] md:leading-[30px] text-[16px] leading-[24px]'
                } `}
              />
            </div>
            <div className='basis-1/2'>
              <p
                dangerouslySetInnerHTML={{ __html: locale['mushroom.paragraph3_heading_2'] }}
                className={`flex flex-col gap-3 font-["A_OTF_A1_Mincho_Std"] text-left font-normal   text-[#000000D9] ${
                  checkScreenWidth()
                    ? 'text-[18px] leading-[30px]'
                    : 'lg:text-[20px] lg:leading-[32px] md:text-[18px] md:leading-[30px] text-[16px] leading-[24px]'
                }`}
              />
              <img
                src={ImgMushroom6}
                alt='map_bhutan'
                className='w-full max-w-[418px]  h-[274px] max-md:w-[343px] max-md:h-[225px]'
              />
            </div>
          </div>
          <div className='mt-[35px] flex flex-col gap-2 pb-[38px] max-md:pb-[50px]'>
            <p
              dangerouslySetInnerHTML={{ __html: locale['mushroom.footer1_heading_2'] }}
              className={`flex justify-center gap-2 max-md:gap-1 flex-row max-md:flex-col font-["A_OTF_A1_Mincho_Std"] text-center font-normal   text-[#252161] ${
                checkScreenWidth()
                  ? 'text-[18px] leading-[30px]'
                  : 'lg:text-[20px] lg:leading-[32px] md:text-[18px] md:leading-[30px] text-[16px] leading-[24px]'
              }`}
            />
            <p
              dangerouslySetInnerHTML={{ __html: locale['mushroom.footer2_heading_2'] }}
              className={`flex justify-center gap-2 max-md:gap-1 flex-row max-md:flex-col font-["A_OTF_A1_Mincho_Std"] text-center font-normal  text-[#252161] ${
                checkScreenWidth()
                  ? 'text-[18px] leading-[30px]'
                  : 'lg:text-[20px] lg:leading-[32px] md:text-[18px] md:leading-[30px] text-[16px] leading-[24px] '
              }`}
            />
          </div>
        </div>
      </div>
      <div className='bg-[#FFFDE5]  max-md:pb-[10px] '>
        <div className=' '>
          {' '}
          <h3
            dangerouslySetInnerHTML={{ __html: locale['mushroom.heading_3'] }}
            className={`font-["A_OTF_A1_Mincho_Std"] text-center flex justify-center items-center flex-wrap max-md:text-center max-md:flex-col max-md:gap-3  pt-[40px] pb-[48px] max-md:pt-[20px] max-md:pb-[12px]  font-normal   text-[#F05430] ${
              checkScreenWidth()
                ? 'text-[38px] leading-[46px]'
                : 'lg:text-[40px] lg:leading-[48px] md:text-[38px] md:leading-[46px]  text-[20px] leading-[28px]'
            }`}
          />
          <div className='flex gap-4 justify-center items-center  pb-[48px] ml-[72px] mr-[80px] max-md:m-0  max-md:flex-col overflow-hidden'>
            <img
              src={ImgMushroom7}
              className='max-w-[414px] w-1/3 max-h-[301px] max-md:w-[343px] max-md:h-[249px]   '
              alt=''
            />
            <img
              src={ImgMushroom8}
              className='max-w-[414px]  w-1/3 max-h-[301px] max-md:w-[343px] max-md:h-[249px] '
              alt=''
            />
            <img
              src={ImgMushroom9}
              className='max-w-[414px]  w-1/3 max-h-[301px] max-md:w-[343px] max-md:h-[249px] '
              alt=''
            />
          </div>
          <div className='flex justify-center flex-col  gap-[48px] max-md:gap-[35px] ml-[72px] mr-[80px] max-md:my-0  max-md:ml-[16px] max-md:mr-[16px] '>
            <div className='flex max-md:flex-col justify-center max-md:items-center gap-16 text-left'>
              <div className=''>
                <p
                  dangerouslySetInnerHTML={{ __html: locale['mushroom.paragraph1_heading_3'] }}
                  className={`font-["roboto"] font-meidum  flex flex-col gap-2 max-md:gap-0 ${
                    checkScreenWidth()
                      ? 'text-[18px] leading-[26px]'
                      : 'lg:text-[20px] lg:leading-[28px] md:text-[18px] md:leading-[26px] text-[16px] leading-[24px]'
                  }`}
                />
                <div
                  className={`mt-3 flex flex-col  font-["roboto"] max-md:mb-[46px] font-semibold  text-[#505050]  ${
                    checkScreenWidth()
                      ? 'text-[24px] leading-[32px]'
                      : 'lg:text-[26px] lg:leading-[34px] md:text-[24px] md:leading-[32px] text-[20px] leading-[28px]'
                  }`}
                >
                  <p
                    className='flex flex-col  max-sm:hidden'
                    dangerouslySetInnerHTML={{ __html: locale['mushroom.paragraph2_heading_3'] }}
                  />
                  <p
                    className='flex flex-col sm:hidden  tracking-tighter'
                    dangerouslySetInnerHTML={{
                      __html: locale['mushroom.responsive_paragraph2_heading_3'],
                    }}
                  />
                  <span
                    className={`font-["roboto"] font-normal   text-[#000000D9] max-md:text-[#000000]  ${
                      checkScreenWidth()
                        ? 'text-[18px] leading-[26px]'
                        : 'lg:text-[20px] lg:leading-[28px] md:text-[18px] md:leading-[26px] text-[16px] leading-[24px]'
                    }`}
                  >
                    {locale['mushroom.sub_paragraph2_heading_3']}
                  </span>
                </div>
                <p
                  dangerouslySetInnerHTML={{ __html: locale['mushroom.paragraph3_heading_3'] }}
                  className={`flex flex-col gap-1 max-md:gap-0 mt-5 font-[roboto] font-medium  text-[#000000] max-md:text-[#000000D9] ${
                    checkScreenWidth()
                      ? 'text-[18px] leading-[26px]'
                      : 'lg:text-[20px] lg:leading-[28px] md:text-[18px] md:leading-[26px] text-[16px] leading-[24px]'
                  }`}
                />
              </div>
              <div className='flex flex-col '>
                <p
                  dangerouslySetInnerHTML={{ __html: locale['mushroom.paragraph4_heading_3'] }}
                  className={`font-["roboto"] font-meidum  flex flex-col gap-2 max-md:gap-0 text-[#000000D9] ${
                    checkScreenWidth()
                      ? 'text-[18px] leading-[26px]'
                      : 'lg:text-[20px] lg:leading-[28px] md:text-[18px] md:leading-[26px] text-[16px] leading-[24px]'
                  }`}
                />
                <p
                  dangerouslySetInnerHTML={{ __html: locale['mushroom.paragraph5_heading_3'] }}
                  className={`mt-[40px] flex flex-col gap-2 max-md:gap-0 font-["roboto"] font-meidum  flex flex-col gap-2 text-[#000000D9] ${
                    checkScreenWidth()
                      ? 'text-[18px] leading-[26px]'
                      : 'lg:text-[20px] lg:leading-[28px] md:text-[18px] md:leading-[26px] text-[16px] leading-[24px]'
                  }`}
                />

                <div
                  className={`flex mt-[38px]  ${
                    checkScreenWidth() ? 'flex-col' : 'lg:flex-row md:flex-col flex-col gap-2'
                  }`}
                >
                  <img
                    src={ImgMushroom10}
                    alt=''
                    className='max-sm:hidden max-w-[265px] object-contain w-2/3 h-auto  '
                  />
                  <img
                    src={ImgMushroom24}
                    alt=''
                    className='sm:hidden w-[343px] h-[413px]  ml-[6px]  '
                  />
                  <div
                    className={` flex flex-col  ${
                      checkScreenWidth()
                        ? 'mt-[20px]'
                        : 'lg:mt-[50px] md:mt-0 max-md:mt-[10px] lg:gap-[48px] md:gap-0 max-md:gap-4'
                    }`}
                  >
                    <p
                      dangerouslySetInnerHTML={{ __html: locale['mushroom.paragraph6_heading_3'] }}
                      className={`max-md:ml-[6px]  max-md:gap-0 font-["A_OTF_A1_Mincho_Std"] font-normal tracking-tighter  flex flex-col gap-2 text-[#000000D9] ${
                        checkScreenWidth()
                          ? 'text-[14px] leading-[22px]'
                          : 'lg:text-[16px] lg:leading-[24px]  text-[14px] leading-[22px]'
                      } `}
                    />
                    <p
                      dangerouslySetInnerHTML={{ __html: locale['mushroom.paragraph7_heading_3'] }}
                      className={`max-md:ml-[6px]  max-md:gap-0 font-["A_OTF_A1_Mincho_Std"] font-normal tracking-tighter text-[12px] leading-[24px] flex flex-col gap-2 text-[#000000D9] `}
                    />
                  </div>
                </div>
              </div>
            </div>
            <p
              dangerouslySetInnerHTML={{ __html: locale['mushroom.heading_4'] }}
              className={`max-sm:hidden   pb-5 font-["A_OTF_A1_Mincho_Std"] font-normal   flex justify-center items-center text-center flex-col gap-2 text-[#000000] ${
                checkScreenWidth()
                  ? 'text-[30px] leading-[38px] my-[30px]'
                  : 'lg:text-[32px] lg:leading-[40px]  md:text-[30px] md:leading-[38px] text-[32px] leading-[40px] my-[48px]'
              }`}
            />
            <p
              dangerouslySetInnerHTML={{ __html: locale['mushroom.responsive_heading_4'] }}
              className='sm:hidden mb-[40px] mt-[5px]  tracking-[-2px]  font-["A_OTF_A1_Mincho_Std"] font-normal text-[32px] leading-[40px] max-md:text-[20px] max-md:leading-[28px] flex justify-center items-center text-center flex-col gap-2 text-[#000000]'
            />
          </div>
          <div className='flex justify-center mx-[40px]'>
            <img src={ImgMushroom11} alt='' className='w-full  max-w-[1290px]   max-sm:hidden ' />
          </div>
          <div className='flex flex-col justify-center items-center sm:hidden'>
            <img src={ImgMushroom21} alt='' className='w-[343px]   px-2' />
            <img src={ImgMushroom20} alt='' className='w-[343px]   px-2' />
          </div>
          <p
            dangerouslySetInnerHTML={{ __html: locale['mushroom.heading_5'] }}
            className={`max-w-[1390px] w-[95%] mx-auto  py-[48px] font-["A_OTF_A1_Mincho_Std"]    font-normal  flex justify-center items-center text-center  flex-col gap-2 text-[#000000] ${
              checkScreenWidth()
                ? 'text-[30px] leading-[38px] tracking-[-4px] '
                : 'lg:tracking-[-3px] md:tracking-[-3px] tracking-normal lg:text-[32px] lg:leading-[40px] md:text-[30px] md:leading-[38px] text-[20px] leading-[26px]'
            }`}
          />
          <div className='mx-auto w-fit max-sm:hidden flex flex-col justify-center  items-start  pb-20 '>
            <div className='flex gap-5 mx-10 justify-center '>
              <img src={ImgMushroom25} className='max-w-[1290px]  w-[100%]' alt='' />
            </div>
            <p className=' max-w-[1246px] mx-10 mt-10 flex flex-col gap-3 font-["roboto"] font-normal lg:text-[20px] lg:leading-[28px] md:text-[18px] md:leading-[26px] text-[16px] leading-[24px] flex flex-col gap-2 text-[#000000D9]'>
              <span>{locale['mushroom.contact']}</span>
              <span>{locale['mushroom.email']}</span>
            </p>
          </div>
          <div className='pt-5 flex flex-col gap-5 justify-center items-center sm:hidden'>
            <img src={ImgMushroom15} alt='' className='w-[343px]  ' />
            <img src={ImgMushroom16} alt='' className='w-[343px]  ' />
            <p className='w-[343px] mt-10 flex flex-col gap-2 font-["roboto"] font-normal text-[20px] leading-[28px] max-md:text-[16px] max-md:leading-[24px] text-[#000000D9]'>
              <span>{locale['mushroom.contact']}</span>
              <span>{locale['mushroom.email']}</span>
            </p>
          </div>
        </div>
      </div>
      <div className='flex justify-center mt-4 py-[24px] px-5 overflow-x-hidden'>
        <div className='flex justify-center pt-[24px]  overflow-x-hidden w-full'>
          <img
            src={ImgHorizontalDivide}
            alt=''
            className='object-cover object-center w-full max-w-[1280px] h-[45px] max-md:h-[32px]'
          />
        </div>
      </div>
      <div className='pb-[38px] '>
        <p className='text-center font-medium text-[24px] lg:text-[32px] leading-[40px] text-[#535253]  font-["Spectral"]'>
          {locale['mushroom.title_footer']}
        </p>
        <div
          className='flex flex-col justify-between items-center mx-auto h-[174px] w-[433px] max-md:w-[343px] max-md:h-[140px] rounded-[4px] bg-cover border-[1px] border-solid border-[#ABABAB] cursor-pointer'
          onClick={() => collection?.id && router.push(`/products?collectionId=${collection?.id}`)}
        >
          <img
            src={ImgMushroom19}
            alt='footer-banner'
            className='w-full h-[145px] max-md:h-[120px] rounded-t'
          />
          <p className='leading-[22px] text-[14px] max-md:leading-[20px] max-md:text-[12px] mb-0 text-[#514F4E] font-semibold'>
            {locale['mushroom.paragraph_footer']}
          </p>
        </div>
      </div>
    </BaseAnimation>
  )
}

export default MushroomSelection

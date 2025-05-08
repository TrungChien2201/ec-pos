import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'

import BaseAnimation from 'components/common/BaseAnimation/BaseAnimation'

// Use string paths instead of direct imports
const ImgHorizontalDivide = 'images/horizontal-divide.png'
const imgFooter = 'images/roseys-mark/3.webp'
const imgBanner = 'images/roseys-mark/banner.png'
const imgFour1 = 'images/roseys-mark/four1.png'
const imgFour2 = 'images/roseys-mark/four2.png'
const imgFour3 = 'images/roseys-mark/four3.png'
const imgFour4 = 'images/roseys-mark/four4.png'
const imgLogo = 'images/roseys-mark/logo.png'
const imgTowCol2 = 'images/roseys-mark/two-col-1.png'
const imgTowCol1 = 'images/roseys-mark/two-col-2.png'
const imgTowColLeft = 'images/roseys-mark/two-col-left.png'
const imgTowColRight = 'images/roseys-mark/two-col-right.png'

const getCollectionInMenu = (menus, collectionTitle) => {
  const collection = (menus || [])
    .map((item) => item.childs)
    .flat()
    .find((item) => item.title === collectionTitle)

  return collection
}

const RoseysMarkSelection = () => {
  const locale = useSelector((state) => state.user.locale)
  const menus = useSelector((state) => state.menus.sections)
  const collection = getCollectionInMenu(menus, 'Rosey’s Mark')
  const router = useRouter()

  return (
    <BaseAnimation className='bg-white text-black-light-5 font-roboto'>
      <div className='w-full px-6 pt-[44px] flex flex-col items-center justify-center text-center'>
        <p className='text-[20px] md:text-[52px] tracking-[0.5px] leading-none text-black font-spectral'>
          {locale['roses_mark.title']}
        </p>
        <p className='md:mt-2 text-sm md:text-[26px] leading-[30px] font-semibold text-black'>
          {locale['roses_mark.description']}
        </p>
      </div>
      <div className='mt-6'>
        <img src={imgBanner} className='w-full h-auto' />
      </div>
      <div className='flex justify-center bg-white mt-5 md:mt-7 pb-[38px]'>
        <div className='container container--small-desktop'>
          <div className='w-full flex flex-col items-center text-center max-md:text-[#000000] '>
            <div
              dangerouslySetInnerHTML={{ __html: locale['roses_mark.heading_1'] }}
              className='text-base md:text-[20px] md:leading-[36px] text-black-light-5 font-bold'
            />
            <img
              src={imgLogo}
              className='w-full max-w-[200px] md:max-w-[303px] h-auto mt-8 md:mt-6'
            />
            <div className='flex items-center justify-center w-full mt-3 min-h-[40px] text-sm md:text-[26px] bg-black-light-4 text-white font-semibold'>
              {locale['roses_mark.description']}
            </div>
            <div className='flex flex-col gap-2 md:gap-0 mt-5 md:mt-6'>
              <div
                dangerouslySetInnerHTML={{ __html: locale['roses_mark.sub_heading_1'] }}
                className='text-sm leading-[22px] md:text-lg md:leading-[30px] text-black-light-5 font-medium'
              />
              <div
                dangerouslySetInnerHTML={{ __html: locale['roses_mark.sub_heading_2'] }}
                className='text-sm leading-[22px] md:text-lg md:leading-[30px] text-black-light-5 font-medium'
              />
              <div
                dangerouslySetInnerHTML={{ __html: locale['roses_mark.sub_heading_3'] }}
                className='text-sm leading-[22px] md:text-lg md:leading-[30px] text-black-light-5 font-medium'
              />
              <div
                dangerouslySetInnerHTML={{ __html: locale['roses_mark.sub_heading_4'] }}
                className='text-sm leading-[22px] md:text-lg md:leading-[30px] text-black-light-5 font-medium'
              />
            </div>
          </div>
          <div className='grid md:grid-cols-2 gap-4 md:gap-0 mt-8 md:mt-4'>
            <div className='flex flex-col gap-6 overflow-hidden'>
              <div className='image--banner image--two-col'>
                <img src={imgTowColLeft} className='w-full' />
              </div>
              <div className='flex flex-col px-4'>
                <h3 className='text-xl md:text-[26px] text-black leading-[30px] font-semibold'>
                  {locale['roses_mark.two_col.left.title']}
                </h3>
                <div
                  dangerouslySetInnerHTML={{
                    __html: locale['roses_mark.two_col.left.description'],
                  }}
                  className='mt-[2px] text-sm leading-[22px] md:text-lg md:leading-[30px]'
                />
                <div className='flex flex-col'>
                  {Array.from(
                    ['list1', 'list2'].map((item) => (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: locale[`roses_mark.two_col.left.list.${item}`],
                        }}
                        className='text-sm leading-[22px] md:text-lg md:leading-[30px]'
                      />
                    )),
                  )}
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-6 overflow-hidden'>
              <div className='image--banner image--two-col'>
                <img src={imgTowColRight} className='w-full' />
              </div>
              <div className='flex flex-col px-4'>
                <h3 className='text-xl md:text-[26px] text-black leading-[30px] font-semibold'>
                  {locale['roses_mark.two_col.right.title']}
                </h3>
                <div
                  dangerouslySetInnerHTML={{
                    __html: locale['roses_mark.two_col.right.description'],
                  }}
                  className='text-sm leading-[22px] md:text-lg md:leading-[30px]'
                />
                <div
                  dangerouslySetInnerHTML={{ __html: locale['roses_mark.two_col.right.list'] }}
                  className='text-sm leading-[22px] md:text-lg md:leading-[30px]'
                />
              </div>
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 mt-8 md:mt-4'>
            <div className='flex-1 overflow-hidden'>
              <img src={imgFour1} className='w-full' />
            </div>
            <div className='flex-1 overflow-hidden'>
              <img src={imgFour2} className='w-full' />
            </div>
            <div className='flex-1 overflow-hidden'>
              <img src={imgFour3} className='w-full' />
            </div>
            <div className='flex-1 overflow-hidden'>
              <img src={imgFour4} className='w-full' />
            </div>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: locale['roses_mark.four_description'] }}
            className='mt-[25px] font-medium text-center flex justify-center items-center gap-[15px] max-md:gap-[8px] flex-col text-sm leading-[22px] md:text-lg md:leading-[30px]'
          />
          <div className='grid md:grid-cols-2 md:gap2 mt-8 md:mt-4'>
            <div className='flex-1 overflow-hidden'>
              <img src={imgTowCol1} className='w-full' />
            </div>
            <div className='flex-1 overflow-hidden'>
              <img src={imgTowCol2} className='w-full' />
            </div>
          </div>

          <div
            dangerouslySetInnerHTML={{ __html: locale['roses_mark.two_col_footer'] }}
            className='text-center flex flex-col justify-center items-center mt-[25px] font-medium text-sm leading-[22px] md:text-lg md:leading-[30px]'
          />
          <div className='flex justify-center py-[24px] overflow-x-hidden'>
            <img
              src={ImgHorizontalDivide}
              alt='divide'
              className='w-full h-[32px] lg:h-[45px] object-cover object-center'
            />
          </div>

          <p className='text-center text-2xl md:text-[32px] leading-[40px] text-[#514F4E] font-spectral'>
            {locale['roses_mark.title_footer']}
          </p>
          <div
            className='flex flex-col items-center justify-center max-w-[343px] md:max-w-[433px] mx-auto bg-white border-[1px] border-solid border-[#ABABAB] rounded-[4px] text-xs font-medium cursor-pointer'
            onClick={() => collection?.id && router.push(`/products?collectionId=${collection?.id}`)}
          >
            <div className='w-full image--banner image--rosey-footer'>
              <img className='rounded-t-[4px]' src={imgFooter} />
            </div>
            <p className='pt-[1px] text-xs leading-[20px] md:text-sm md:leading-[22px] text-[#514F4E] font-semibold'>
              {locale['roses_mark.description']}
            </p>
          </div>
        </div>
      </div>
    </BaseAnimation>
  )
}

export default RoseysMarkSelection

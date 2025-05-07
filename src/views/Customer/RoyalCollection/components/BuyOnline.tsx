import { useRouter } from 'next/router'
import { useMemo } from 'react'

import { useSelector } from 'react-redux'
import ImgHorizontalDivide from 'resourse/images/horizontal-divide.png'

const BuyOnline = () => {
  const router = useRouter()
  const locale = useSelector((state) => state.user.locale)
  const menus = useSelector((state) => state.menus.menus)

  const items = useMemo(() => {
    const premiumWines = menus.find((item) => item.title === 'Premium Wines')
    if (!menus && !premiumWines) return options

    const findItem = (title) => {
      if (!premiumWines?.childs) return ''
      return premiumWines?.childs?.find((item) => item.title === title)
    }
    return options.map((item) => ({
      ...item,
      id: findItem(item.title).id,
      description: findItem(item.title)?.data?.description,
    }))
  }, [menus])

  return (
    <div className='mb-8 lg:mb-8'>
      <div className='px-4'>
        <div className='flex justify-center py-[24px] overflow-x-hidden w-full'>
          <img
            src={ImgHorizontalDivide}
            alt=''
            className='object-cover object-center w-full max-w-[1280px] h-[45px] max-md:h-[32px]'
          />
        </div>
        <p className='text-center text-[24px] lg:text-[32px] leading-[40px] text-[#514F4E] font-Spectral'>
          {locale['hal_caviar.title_footer']}
        </p>
      </div>

      <div className='flex flex-col lg:flex-row items-center gap-[20px] w-full px-4 xl:px-[unset] max-w-[1292px] justify-center mx-auto'>
        {items?.map((item, index) => {
          return (
            <div
              className='w-full max-w-[433px] lg:max-w-auto bg-white border-[1px] border-solid border-[#ABABAB] rounded-[6px] cursor-pointer'
              onClick={() => item.id && router.push(`/products?collectionId=${item.id}`)}
            >
              <img className='w-full rounded-t-[6px]' src={item.imageUrl} />
              <div className='flex items-center justify-center text-center w-full min-w-[100px] min-h-[22px] lg:min-h-[24px] px-[15px]'>
                <p
                  className={`pt-1 px-3 font-semibold leading-[16px] text-sm md:text-[12px] xl:text-[14px] md:leading-[18px] text-[#514F4E]`}
                >
                  {item?.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default BuyOnline

const options = [
  {
    title: 'Luxury Wine Range',
    imageUrl: 'images/home/premium_wines/1.webp',
  },
  {
    title: 'Premium Wine Range',
    imageUrl: 'images/home/premium_wines/2.webp',
  },
  {
    title: 'Icon Wine Range',
    imageUrl: 'images/home/premium_wines/3.webp',
  },
]

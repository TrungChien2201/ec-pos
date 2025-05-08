import React, { useMemo } from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'

// Use string paths for images
const ImgHorizontalDivide = 'images/horizontal-divide.png'

const BuyOnline = () => {
  const router = useRouter()
  const menus = useSelector((state) => state.menus.menus)

  const collections = useMemo(() => {
    return (menus || [])
      .map((item) => item.childs)
      .flat()
      .filter((item) => item.isShowInRoyalCollection)
  }, [menus])

  return (
    <div className='bg-white'>
      <div className='container container--medium mx-auto'>
        <div className='flex justify-center py-[24px] overflow-x-hidden'>
          <img
            src={ImgHorizontalDivide}
            alt=''
            className='object-cover object-center h-[45px] max-md:h-[32px] w-full'
          />
        </div>
        <div className='text-center'>
          <p className='text-[32px] leading-[40px] max-md:text-[24px] max-md:leading-[32px] text-[#514F4E] font-["Spectral"]'>
            Buy Online
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] mt-[24px] pb-[24px]'>
          {collections.map((collection) => (
            <div
              key={collection.id}
              className='cursor-pointer'
              onClick={() => router.push(`/products?collectionId=${collection.id}`)}
            >
              <div className='border-[1px] border-solid border-[#ABABAB] rounded-[4px]'>
                <img
                  src={collection.image}
                  alt={collection.title}
                  className='w-full h-[200px] object-cover rounded-t-[4px]'
                />
                <div className='p-[16px] text-center'>
                  <p className='text-[14px] leading-[20px] text-[#514F4E] font-semibold'>
                    {collection.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BuyOnline

import { useRouter } from 'next/router'

const BuyOnline = ({ collectionId, imgSrc, title, subTitle }) => {
  const router = useRouter()
  return (
    <>
      <p className='text-center  text-[24px] lg:text-[32px] leading-[40px] text-[#514F4E] mb-[10px] font-["Spectral"]'>
        購入ページ
      </p>

      <div
        className='w-full flex cursor-pointer justify-center'
        onClick={() => collectionId && router.push(`/products?collectionId=${collectionId}`)}
      >
        <div className='flex w-full md:w-[351px] h-[184px] border-[0.3px] border-solid border-gray-200 overflow-hidden rounded-[5px]'>
          <div
            className='h-[184px] bg-cover flex-shrink-0 w-[184px]'
            style={{
              backgroundImage: `url(${imgSrc})`,
            }}
          />

          <div className='text-[#514F4E] flex flex-col justify-center pl-3 font-medium'>
            <p className='text-[20px] leading-[23px]'>{title}</p>
            <p className='mt-1 leading-[14px] text-[10px]'>{subTitle}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default BuyOnline

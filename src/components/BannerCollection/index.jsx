import { useRouter } from 'next/router'
import cx from 'classnames'

const BannerCollection = ({ className, title, image, description, collectionId }) => {
  const router = useRouter()
  return (
    <div className={cx(`flex flex-col`, className)}>
      {title && (
        <p className='text-center text-[24px] lg:text-[32px] leading-[40px] text-[#514F4E] font-["Spectral"]'>
          {title}
        </p>
      )}
      <div
        className='flex flex-col items-center justify-end mx-auto w-full max-w-[343px] md:max-w-[433px] h-[140px] md:h-[174px] rounded-[4px] bg-cover border-[1px] border-solid border-[#ABABAB] cursor-pointer'
        onClick={() => collectionId && router.push(`/products?collectionId=${collectionId}`)}
      >
        <img src={image} alt='footer-banner' className='w-full h-full rounded-t-[4px]' />
        {description && (
          <p className='text-[14px] leading-[22px] max-md:leading-[20px] max-md:text-[12px] mb-0 text-[#514F4E] font-semibold'>
            {description}
          </p>
        )}
      </div>
    </div>
  )
}

export default BannerCollection

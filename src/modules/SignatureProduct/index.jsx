import { classSizeLargeImg, classSizeSmallImg } from 'modules/Gorilla'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'

const SignatureProduct = () => {
  const router = useRouter()
  const menus = useSelector((state) => state.menus.sections)
  const handleRedirect = (child) => {
    if (!child?.id || child?.isComingSoon) return
    if (child?.id) {
      const { id } = child
      router.push(String(id).includes('/') ? `${id}` : `/products?collectionId=${id}`)
    }
  }

  const renderChild = menus
    ?.find((i) => i.title === "Signature's Signature Products")
    ?.childs.map((child, childsIndex) => (
      <div
        className={`w-full cursor-pointer relative ${
          child?.order ? `order-${child?.order} md:order-none` : ''
        }`}
        key={childsIndex}
      >
        <div
          className='bg-white border-[1px] border-solid border-[#ABABAB] rounded-[6px] h-full'
          onClick={() => handleRedirect(child)}
        >
          <div className='relative'>
            <img
              className={`w-full rounded-t-[6px] ${
                child?.sizeSmall ? classSizeSmallImg : classSizeLargeImg
              }`}
              src={child?.image || child.data?.image?.src}
            />
            {child?.isComingSoon && (
              <div className='absolute bottom-0 left-0 w-full'>
                <img src='images/image-93.svg' className='max-sm:h-[31px]' />
              </div>
            )}
          </div>
          <div className='flex items-center justify-center text-center w-full min-w-[100px] min-h-[28px] lg:min-h-[40px] px-[15px]'>
            <p
              className={`pt-1 md:pt-2 px-3 font-spectral font-semibold leading-[24px] ${
                child?.sizeSmall
                  ? 'text-sm md:text-base xl:text-[18px]'
                  : 'text-base md:text-[20px] xl:text-[24px]'
              } md:leading-[32px] text-[#514F4E]`}
            >
              {child.data?.description && child.data?.description.length
                ? child.data?.description
                : child?.title}
            </p>
          </div>
        </div>
      </div>
    ))

  return (
    <section className='bg-white'>
      <div className='container container--home mx-auto pt-8 md:pt-16 pb-[2rem]'>
        <div className='h-auto text-center'>
          <p className='font-light lg:text-[38px] lg:leading-[46px] text-[#514F4E] text-[20px] leading-[28px] md:text-[28px] md:leading-[32px]'>
            Signature’s Signature Products
          </p>
          <p className='text-[18px] leading-[28px] text-[#514F4E] max-[640px]:leading-[18px] max-[640px]:text-[14px] font-semibold'>
            シグニチャーのオリジナル・・・特別なものたち。
          </p>
        </div>
        <div className='grid md:grid-cols-2 gap-x-6 gap-y-6 lg:gap-y-10 flex-wrap w-full h-auto mt-8 md:mt-[40px]'>
          {renderChild}
        </div>
        <div className='mt-[40px] md:mt-14 flex justify-center w-full text-center font-semibold max-[640px]:text-[14px] max-[640px]:leading-[18px] text-[18px] leading-[28px] text-[#514F4E]'>
          ・画像はイメージです。商品内容は変わることがあります。
        </div>
      </div>
    </section>
  )
}

export default SignatureProduct

import { classSizeLargeImg, classSizeSmallImg } from 'modules/Gorilla'
import { useRouter } from 'next/router'
import { setPageId } from '../../store/idRedirect'
import { useSelector, useDispatch } from 'react-redux'

const ModCaviar = () => {
  const router = useRouter()
  const menus = useSelector((state) => state.menus.sections)

  const dispatch = useDispatch()

  const handleRedirect = (child) => {
    if (!child?.id || child?.isComingSoon) return
    if (child?.id) {
      const { id } = child
      dispatch(setPageId(id))
      router.push(String(id).includes('/') ? `${id}` : `/products?collectionId=${id}`)
    }
  }

  const renderItems = menus
    .find((i) => i?.title === 'CAVIAR')
    ?.childs?.map((child, index) => (
      <div
        className={`w-full cursor-pointer relative ${
          child?.order ? `order-${child?.order} md:order-none` : ''
        }`}
        key={index}
        id={child?.id}
      >
        <div
          className='bg-white border-[1px] border-solid border-[#ABABAB] rounded-[8px] h-full'
          onClick={() => handleRedirect(child)}
        >
          <div className='relative'>
            <img
              className={`w-full rounded-t-[8px] ${
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
            <div>
              <p
                className={`pt-1 md:pt-2 px-3 font-spectral font-semibold leading-[24px] ${
                  child?.sizeSmall
                    ? 'text-sm md:text-base xl:text-[18px]'
                    : 'text-base md:text-[20px] xl:text-[24px]'
                } md:leading-[32px] text-[#514F4E]`}
              >
                {child.data?.description || child?.title}
              </p>
            </div>
          </div>
        </div>
      </div>
    ))

  return (
    <section className='bg-white'>
      <div className='h-auto container container--home w-full mx-auto pt-8 md:pt-16'>
        <div className='h-auto text-center lg:px-[100px]'>
          <p className='font-light lg:text-[38px] lg:leading-[46px] text-[#514F4E] text-[20px] leading-[28px] md:text-[28px] md:leading-[32px]'>
            CAVIAR
          </p>
          <p className='text-[18px] leading-[28px] text-[#514F4E] max-[640px]:leading-[12px] max-[640px]:text-[14px] font-semibold'>
            キャビア
          </p>
          <p className='mt-4 font-normal text-[12px] md:text-[20px] leading-[24px] text-[#514F4E] max-[640px]:text-xs max-[640px]:leading-[22px]'>
            世界に認められた、美味しい水が育んだこだわりのキャビアをお届けいたします。
          </p>
        </div>

        <div className='grid md:grid-cols-2 gap-x-6 gap-y-6 lg:gap-y-10 flex-wrap w-full h-auto mt-8 md:mt-[40px]'>
          {renderItems}
          <div
            className='flex justify-center w-full text-center font-semibold text-sm md:text-base leading-[28px] text-[#D37790] order-last cursor-pointer'
            onClick={() => router.push('/contact')}
          >
            ハルキャビアに関するお問い合わせはこちらから。
          </div>
        </div>
      </div>
    </section>
  )
}

export default ModCaviar

import cx from 'classnames'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'

const Gorilla = () => {
  const { t } = useTranslation()
  const router = useRouter()
  const menus = useSelector((state) => state.menus.sections)
  const handleRedirect = (child) => {
    if (!child?.id || child?.isComingSoon) return
    if (child?.id) {
      const { id } = child
      router.push(String(id).includes('/') ? `${id}` : `/products?collectionId=${id}`)
    }
  }

  const renderItems = menus
    ?.find((i) => i.title === 'Gorilla Spirits Co.')
    ?.childs.map((child, childsIndex) => (
      <div
        className={cx(
          'w-full cursor-pointer relative md:order-none md:col-span-1',
          child?.className,
        )}
        key={childsIndex}
      >
        <div
          className='bg-white border-[1px] border-solid border-[#ABABAB] rounded-[6px] h-full'
          onClick={() => handleRedirect(child)}
        >
          <div className='relative'>
            <img className='w-full rounded-t-[6px]' src={child?.image || child.data?.image?.src} />
            {child?.isComingSoon && (
              <div className='absolute bottom-0 left-0 w-full'>
                <img src='images/image-93.svg' className='max-md:h-[31px]' />
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
              {child?.title}
            </p>
          </div>
        </div>
      </div>
    ))
  return (
    <section className='bg-white text-[#514F4E]'>
      <div className='container container--home mx-auto pt-8 md:pt-14'>
        <div className='mx-auto text-center text-[#514F4E]'>
          <h3 className='font-light lg:text-[38px] lg:leading-[46px] text-[#514F4E] text-[20px] leading-[28px] md:text-[28px] md:leading-[32px]'>
            {t('home.gorilla.title')}
          </h3>
          <p className='text-[18px] leading-[28px] text-[#514F4E] max-[640px]:leading-[12px] max-[640px]:text-[14px] font-semibold'>
            {t('home.gorilla.sub_title')}
          </p>
          <p className='mt-4 font-normal text-[12px] md:text-[20px] leading-[24px] text-[#514F4E] max-[640px]:text-xs max-[640px]:leading-[22px]'>
            {t('home.gorilla.description')}
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6 lg:gap-y-10 flex-wrap w-full h-auto mt-8 md:mt-[40px]'>
          {renderItems}
        </div>
      </div>
    </section>
  )
}

export default Gorilla

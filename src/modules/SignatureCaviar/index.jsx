import './styles.scss'

const SignatureCaviar = () => {
  return (
    <section className='bg-white'>
      <div className='container container--home mx-auto pt-8 md:pt-16'>
        <div className='h-auto text-center text-[#514F4E] text-[20px] max-[640px]:text-[14px]'>
          <p className='font-normal leading-[22px] md:leading-[32px]'>
            エストニアでハルキャビアの美味しさの秘密「シグニチャー」技術を伝承して育てられたキャビアです。
          </p>
          <p className='break-words'>
            Caviar cultivated in Estonia, inheriting the "signature" technique of HAL CAVIAR; the
            secret behind the exquisite taste.
          </p>
        </div>
        <div className='flex flex-col xl:flex-row gap-y-10 mt-4 md:mt-5 content'>
          <div className='w-full h-[180px] xl:w-[650px] lg:h-[354px] relative content__left'>
            <div className='w-full h-[180px] lg:h-[354px] border-[1px] border-solid border-[#ABABAB] rounded-[6px] flex gap-x-3 lg:gap-x-5'>
              <div
                className='lg:h-[354px] bg-cover flex-shrink-0 w-[180px] h-[180px] lg:w-[354px] xl:aspect-square content__left-image'
                style={{ backgroundImage: `url('/images/image-127.svg')` }}
              />
              <div className='flex items-center w-full'>
                <div>
                  <p className='font-medium lg:text-[38px] lg:leading-[46px] text-[#514F4E] leading-[24px] text-[20px] md:leading-[32px] md:text-[28px]'>
                    NOVA Caviar
                  </p>
                  <p className='mt-1 font-medium text-[20px] leading-[28px]  text-[#514F4E] max-[640px]:text-[12px] max-[640px]:leading-[12px]'>
                    ノヴァキャビア
                  </p>
                </div>
              </div>
            </div>
            <div className='absolute -bottom-[15px] md:-bottom-6 w-full flex justify-center'>
              <img src='/images/image-93.svg' className='max-sm:h-[31px]' />
            </div>
          </div>

          <div className='lg:ml-auto w-full xl:w-[600px] h-[145px] md:h-[180px] lg:h-[260px] xl:pl-[40px] 2xl:pl-[70px] relative content__right'>
            <div className='w-full md:text-blue lg:h-[260px] h-[130px] md:h-[180px] border-[1px] border-solid border-[#ABABAB] rounded-[6px] flex gap-x-3 lg:gap-x-6'>
              <div
                className='lg:h-[259px] md:w-[180px] md:h-[180px] bg-cover w-[130px] h-[130px] flex-shrink-0 lg:w-[259px]'
                style={{ backgroundImage: `url('/images/image-121.svg')` }}
              />
              <div className='flex flex-col justify-center w-full'>
                <p className='font-medium text-[#514F4E] leading-[24px] text-[20px] md:text-[28px] md:leading-[32px] lg:text-[38px] lg:leading-[46px]'>
                  About
                  <br /> NOVA Caviar
                </p>
                <p className='mt-1 font-medium text-[20px] leading-[28px]  text-[#514F4E] max-[640px]:text-[12px] max-[640px]:leading-[12px]'>
                  ノヴァキャビア
                </p>
              </div>
            </div>

            <div className='absolute -bottom-[0px] md:-bottom-6 w-full flex justify-center'>
              <img src='/images/image-93.svg' className='max-sm:h-[31px]' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SignatureCaviar

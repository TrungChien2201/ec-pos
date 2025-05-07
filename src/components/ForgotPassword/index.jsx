import { m } from 'framer-motion'
import { useSelector } from 'react-redux'
import { CiCircleCheck } from 'react-icons/ci'

import * as CONSTANT from 'common/constant'

export default function ForgotSectionContent(props) {
  const { stepOneInfo } = props
  const locale = useSelector((state) => state.user.locale)

  return (
    <div className='flex justify-center items-center flex-col'>
      <m.div
        variants={CONSTANT.ANIMATION_VARIANT_STAGGER_ITEM}
        className={`md:flex ${stepOneInfo.screen === 'success' ? '' : 'mb-6'}`}
      >
        <img
          src={stepOneInfo.logo}
          alt={locale['common.banner']}
          className='mx-auto w-[221px] h-auto rounded'
        />
      </m.div>
      <m.div
        className='flex flex-col text-center'
        variants={CONSTANT.ANIMATION_VARIANT_STAGGER_ITEM}
      >
        <h1
          className={`text-3xl text-primary leading-10 font-bold ${
            stepOneInfo.screen === 'success' ? 'mb-5' : ''
          }`}
        >
          {stepOneInfo.title}
        </h1>
        {stepOneInfo.subDesc ? (
          <p className='leading-6 font-normal max-w-[320px] text-sm text-gray-light-1 mt-[8px]'>
            {stepOneInfo.subDesc}
          </p>
        ) : null}
        {stepOneInfo.descOne ? (
          <p
            className={`leading-6 font-normal max-w-[320px] text-sm ${
              stepOneInfo.subDesc ? '' : 'mt-[8px]'
            } text-black`}
            dangerouslySetInnerHTML={{ __html: stepOneInfo.descOne }}
          />
        ) : null}

        {stepOneInfo.screen === 'success' ? (
          <div className='mb-5 flex max-w-[343px] bg-green-light-4 border-sm p-2.5'>
            <CiCircleCheck className='w-8 h-8 text-black -mt-[5px]' />
            <p
              className='ml-1 text-left'
              dangerouslySetInnerHTML={{
                __html: stepOneInfo?.notify_message,
              }}
            />
          </div>
        ) : null}
      </m.div>
    </div>
  )
}

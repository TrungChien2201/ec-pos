import { useState } from 'react'

import { useMutation } from '@tanstack/react-query'
import { Form, Typography } from 'antd'
import { InputOTP } from 'antd-input-otp'
import { m } from 'framer-motion'
import { useSelector } from 'react-redux'
import { FaLongArrowAltLeft } from 'react-icons/fa'
import { IoArrowBackSharp } from 'react-icons/io5'

import ErrorMessage from 'components/ErrorMessage'
import ForgotSectionContent from 'components/ForgotPassword'

import BaseAnimation from 'components/common/BaseAnimation/BaseAnimation'
import ButtonCommon from 'components/common/button'
import { verifyOTP, forgotPassword } from 'services/auth'
import { hideEmail } from 'utils/index'

import * as CONSTANT from 'common/constant'

const { Text } = Typography

const ForgotPasswordStepTwo = (props) => {
  const { changeView, value, onNext } = props
  const locale = useSelector((state) => state.user.locale)
  const [form] = Form.useForm()
  const [errorMessage, setErrorMessage] = useState('')
  const [resend, setResend] = useState(false)
  const stepOneInfo = {
    title: locale['forgotPassword.stepTwo.title'],
    descOne: hideEmail(value) + locale['forgotPassword.stepTwo.descOne'],
    descTwo: locale['forgotPassword.stepTwo.descTwo'],
    subDesc: locale['forgotPassword.stepTwo.sub_desc'],
    logo: CONSTANT.FORGOTPASSWORD_LOGO,
    screen: '',
  }
  const { mutate: handleOTP } = useMutation((formData) => verifyOTP(formData), {
    onSuccess: (data) => {
      if (data?.hash_id) {
        onNext(data?.hash_id, 5)
      }
    },
    onError: (error) => {
      if (error?.response?.data?.message) {
        setErrorMessage(error?.response?.data?.message)
      }
    },
  })

  const { mutate: handleForgotPassword } = useMutation((formData) => forgotPassword(formData), {
    onSuccess: (data) => {
      if (data?.success) {
        setResend(true)
      }
    },
    onError: (error) => {
      console.log('error22', error)
    },
  })
  const onFinish = (formData) => {
    const payload = {
      email: value,
      code: +formData.code.join(''),
    }
    handleOTP(payload)
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  const handleResendEmail = () => {
    setErrorMessage('')
    handleForgotPassword({
      email: value,
    })
  }

  return (
    <BaseAnimation>
      <div className='flex mt-5'>
        <m.div
          variants={CONSTANT.ANIMATION_VARIANT_STAGGER_CONTAINER}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='w-full p-4 m-auto grid grid-col-1 md:max-w-[450px] lg:max-w-[1058px] justify-center items-center'
        >
          <m.div variants={CONSTANT.ANIMATION_VARIANT_STAGGER_ITEM} className='md:hidden mb-10'>
            <IoArrowBackSharp className='w-6 h-6 text-black' onClick={() => changeView(3)} />
          </m.div>
          <ForgotSectionContent stepOneInfo={stepOneInfo} />
          {errorMessage?.length ? <ErrorMessage message={errorMessage} /> : null}
          <m.div
            className='flex flex-col min-w-[343px]'
            variants={CONSTANT.ANIMATION_VARIANT_STAGGER_ITEM}
          >
            <Form
              form={form}
              size='large'
              layout='vertical'
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              initialValues={{ code: '' }}
            >
              <Form.Item name='code' className='mt-8 mb-8'>
                <InputOTP inputType='numeric' />
              </Form.Item>
              {!resend ? (
                <p className='mb-4 text-center text-gray-light-1' onClick={handleResendEmail}>
                  {locale['forgotPassword.stepTwo.form.text_desc']}
                  <span className='ml-1 text-blue underline cursor-pointer'>
                    {locale['forgotPassword.stepTwo.form.text_resend']}
                  </span>
                </p>
              ) : (
                <p className='mb-4 text-center text-gray-light-1'>
                  {locale['forgotPassword.stepTwo.form.resended_text']}: (01:00)
                </p>
              )}
              <Form.Item className='text-center mb-[13px]'>
                <ButtonCommon
                  classNames='px-8 bg-primary w-full rounded-lg h-[48px]'
                  submit={() => form.submit()}
                  size='large'
                  type='primary'
                  textButton={locale['forgotPassword.stepTwo.form.button_text']}
                />
              </Form.Item>
              <m.div className='flex justify-center mb-8'>
                <Text className='text-blue cursor-pointer relative' onClick={() => changeView(1)}>
                  <FaLongArrowAltLeft className='mt-0.5 mr-1 absolute top-[3px] left-[-20px]' />
                  <Text className='text-blue cursor-pointer'>
                    {locale['forgotPassword.stepTwo.form.back_text']}
                  </Text>
                </Text>
              </m.div>
            </Form>
          </m.div>
        </m.div>
      </div>
    </BaseAnimation>
  )
}

export default ForgotPasswordStepTwo

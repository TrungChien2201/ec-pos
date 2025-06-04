import { useState } from 'react'

import { useMutation } from '@tanstack/react-query'
import { Form, Input, Typography } from 'antd'
import { m } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { FaLongArrowAltLeft } from 'react-icons/fa'
import { IoArrowBackSharp } from 'react-icons/io5'

import ErrorMessage from 'components/ErrorMessage'
import ForgotSectionContent from 'components/ForgotPassword'

import BaseAnimation from 'components/common/BaseAnimation/BaseAnimation'
import ButtonCommon from 'components/common/button'
import { forgotPassword } from 'services/auth'

import * as CONSTANT from 'common/constant'

const { Text } = Typography

const ForgotPasswordStepOne = (props) => {
  const { changeView, handleClose, onNext } = props
  const { t } = useTranslation()
  const [form] = Form.useForm()
  const [errorMessage, setErrorMessage] = useState('')
  const stepOneInfo = {
    title: t('forgotPassword.stepOne.title'),
    descOne: t('forgotPassword.stepOne.descOne'),
    descTwo: t('forgotPassword.stepOne.descTwo'),
    subDesc: '',
    logo: CONSTANT.FORGOTPASSWORD_LOGO,
    screen: '',
  }
  const { mutate: handleForgotPassword } = useMutation((formData) => forgotPassword(formData), {
    onSuccess: (data) => {
      if (data?.success) {
        onNext(form.getFieldValue('email'), 4)
      }
    },
    onError: (error) => {
      if (error?.response?.data?.message) {
        setErrorMessage(error?.response?.data?.message)
      }
    },
  })
  const onFinish = (formData) => {
    setErrorMessage('')
    handleForgotPassword(formData)
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
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
          <m.div
            variants={CONSTANT.ANIMATION_VARIANT_STAGGER_ITEM}
            className='md:hidden mb-10 hidden'
          >
            <IoArrowBackSharp className='w-6 h-6 text-black' onClick={handleClose} />
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
              initialValues={{ email: '' }}
            >
              <Form.Item
                name='email'
                className='mt-4'
                label={t('forgotPassword.stepOne.form.email')}
                rules={[
                  {
                    required: true,
                    message: t('forgotPassword.stepOne.form.email_required'),
                  },
                  {
                    type: 'email',
                    message: t('register.form.email_format'),
                  },
                ]}
              >
                <Input
                  className='h-[48px]'
                  placeholder={t('forgotPassword.stepOne.form.email_placeholder')}
                />
              </Form.Item>
              <Form.Item className='text-center mb-[13px]'>
                <ButtonCommon
                  classNames='px-8 bg-primary w-full rounded-lg h-[48px]'
                  submit={() => form.submit()}
                  size='large'
                  type='primary'
                  textButton={t('forgotPassword.stepOne.form.button_text')}
                />
              </Form.Item>
              <m.div className='flex justify-center mb-8'>
                <Text className='text-blue cursor-pointer relative' onClick={() => changeView(1)}>
                  <FaLongArrowAltLeft className='mt-0.5 mr-1 absolute top-[3px] left-[-20px]' />
                  <Text className='text-blue cursor-pointer'>
                    {t('forgotPassword.stepOne.form.back_text')}
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

export default ForgotPasswordStepOne

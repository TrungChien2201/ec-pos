import { useState } from 'react'

import { useMutation } from '@tanstack/react-query'
import { Form, Input, Typography, Checkbox } from 'antd'
import { m } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { FaLongArrowAltLeft } from 'react-icons/fa'
import { IoArrowBackSharp } from 'react-icons/io5'

import BaseAnimation from 'components/common/BaseAnimation/BaseAnimation'
import ButtonCommon from 'components/common/button'
import { register } from 'services/auth'

import * as CONSTANT from 'common/constant'

const { Text } = Typography

const Register = (props) => {
  const { changeView, handleClose } = props
  const { t } = useTranslation()
    const locale = useSelector((state) => state.user.locale)
  const [form] = Form.useForm()
  const [isAgree, setIsAgree] = useState(false)
  const { mutate: handleRegister } = useMutation((formData) => register(formData), {
    onSuccess: (data) => {
      if (data?.success) {
        changeView()
      }
    },
    onError: (error) => {
      console.log('error', error)
      form.setFields([{ name: 'email', errors: ['このメールアドレスが既に登録されています。'] }])
    },
  })
  const onFinish = (formData) => {
    handleRegister(formData)
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
          className='w-full p-4 m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 md:max-w-[450px] lg:max-w-[1058px] justify-center items-center'
        >
          <m.div variants={CONSTANT.ANIMATION_VARIANT_STAGGER_ITEM} className='md:hidden mb-10'>
            <IoArrowBackSharp className='w-6 h-6 text-black' onClick={handleClose} />
          </m.div>
          <m.div variants={CONSTANT.ANIMATION_VARIANT_STAGGER_ITEM} className='md:flex mb-4 hidden'>
            <img src={CONSTANT.LOGIN_LOGO} alt='ロゴ' className='mx-auto rounded' />
          </m.div>
          <m.div
            className='flex flex-col mr-4 lg:px-8'
            variants={CONSTANT.ANIMATION_VARIANT_STAGGER_ITEM}
          >
            <h1 className='text-3xl text-primary leading-10 font-bold'>{locale['register.title']}</h1>
            <Form
              form={form}
              size='large'
              layout='vertical'
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              initialValues={{ last_name: '', first_name: '', email: '', password: '' }}
            >
              <div className='mt-5'>
                <label htmlFor='fullname' className=' text-body-14-22 text-black/85'>
                  <span className='text-[#ff4d4f]'>*</span>
                  {t('register.name')}
                </label>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-2'>
                  <Form.Item
                    name='last_name'
                    className='mb-1'
                    rules={[
                      {
                        required: true,
                        message: t('register.form.name_required'),
                      },
                    ]}
                  >
                    <Input placeholder={t('register.last_name')} />
                  </Form.Item>
                  <Form.Item
                    name='first_name'
                    className='mb-1'
                    rules={[
                      {
                        required: true,
                        message: t('register.form.name_required'),
                      },
                    ]}
                  >
                    <Input placeholder={t('register.first_name')} />
                  </Form.Item>
                </div>
              </div>
              <Form.Item
                name='email'
                className='mt-6 mb-1'
                label={t('register.email')}
                rules={[
                  {
                    required: true,
                    message: t('register.form.email_required'),
                  },
                  {
                    type: 'email',
                    message: t('register.form.email_format'),
                  },
                ]}
                required
              >
                <Input placeholder={t('register.email_placeholder')} />
              </Form.Item>
              <Form.Item
                name='password'
                className='mt-6 mb-2'
                label={t('register.password')}
                rules={[
                  {
                    required: true,
                    message: t('register.form.password_required'),
                  },
                  {
                    min: 6,
                    message: t('register.form.password_length'),
                  },
                ]}
                required
              >
                <Input.Password
                  className='h-[48px]'
                  placeholder={t('register.password_placeholder')}
                />
              </Form.Item>
              <m.div className='mt-6'>
                <Checkbox checked={isAgree} onChange={(e) => setIsAgree(e.target.checked)}>
                  {t('register.agree_with_policy')}
                </Checkbox>
              </m.div>
              <Form.Item className='text-center mb-1 mt-9'>
                <ButtonCommon
                  disabled={!isAgree}
                  classNames='px-8 bg-primary w-full rounded-lg h-[48px]'
                  submit={() => form.submit()}
                  size='large'
                  type='primary'
                  textButton='登録'
                />
              </Form.Item>
              <m.div className='flex justify-center mt-3'>
                <Text className='text-blue cursor-pointer relative' onClick={changeView}>
                  <FaLongArrowAltLeft className='mt-0.5 mr-1 absolute top-[3px] left-[-20px]' />
                  <Text className='text-blue cursor-pointer'>{t('register.back_to_login')}</Text>
                </Text>
              </m.div>
            </Form>
          </m.div>
        </m.div>
      </div>
    </BaseAnimation>
  )
}

export default Register

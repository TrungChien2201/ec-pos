import { useMutation } from '@tanstack/react-query'
import { Form, Typography, Input } from 'antd'
import { m } from 'framer-motion'
import { useSelector } from 'react-redux'
import { FaLongArrowAltLeft } from 'react-icons/fa'

import ForgotSectionContent from 'components/ForgotPassword'

import BaseAnimation from 'components/common/BaseAnimation/BaseAnimation'
import ButtonCommon from 'components/common/button'
import { resetPassword } from 'services/auth'

import * as CONSTANT from 'common/constant'

const { Text } = Typography

const ForgotPasswordStepThree = (props) => {
  const { changeView, value } = props
  const locale = useSelector((state) => state.user.locale)
  const [form] = Form.useForm()

  const stepOneInfo = {
    title: locale['forgotPassword.stepThree.title'],
    descOne: locale['forgotPassword.stepThree.descOne'],
    descTwo: locale['forgotPassword.stepThree.descTwo'],
    subDesc: locale['forgotPassword.stepThree.sub_desc'],
    logo: CONSTANT.FORGOTPASSWORD_LOGO,
    screen: '',
  }
  const { mutate: handleResetPassword } = useMutation((formData) => resetPassword(formData), {
    onSuccess: (data) => {
      if (data?.success) {
        changeView(6)
      }
    },
    onError: (error) => {
      console.log('error', error)
    },
  })
  const onFinish = (formData) => {
    const payload = {
      hash_id: value,
      password: formData.password,
      re_password: formData.re_password,
    }
    handleResetPassword(payload)
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
          <ForgotSectionContent stepOneInfo={stepOneInfo} />
          <m.div
            className='flex flex-col min-w-[343px]'
            variants={CONSTANT.ANIMATION_VARIANT_STAGGER_ITEM}
          >
            <Form
              form={form}
              size='large'
              layout='vertical'
              onFinish={onFinish}
              className='mt-5'
              onFinishFailed={onFinishFailed}
              initialValues={{ password: '', re_password: '' }}
            >
              <Form.Item
                name='password'
                label={locale['forgotPassword.stepThree.form.new_password']}
                rules={[
                  {
                    required: true,
                    message: locale['login.form.password_required'],
                  },
                ]}
              >
                <Input.Password className='h-[48px]' placeholder={locale['login.password']} />
              </Form.Item>
              <Form.Item
                name='re_password'
                className='mt-6'
                dependencies={['password']}
                label={locale['forgotPassword.stepThree.form.new_password_confirm']}
                rules={[
                  {
                    required: true,
                    message: locale['login.form.password_required'],
                  },
                  ({ getFieldValue }) => ({
                    validator(_, formVal) {
                      if (!formVal || getFieldValue('password') === formVal) {
                        return Promise.resolve()
                      }
                      return Promise.reject(
                        new Error(locale['forgotPassword.stepThree.form.email_not_match']),
                      )
                    },
                  }),
                ]}
              >
                <Input.Password
                  className='h-[48px]'
                  placeholder={
                    locale['forgotPassword.stepThree.form.new_password_confirm_placeholder']
                  }
                />
              </Form.Item>
              <Form.Item className='text-center mb-[13px]'>
                <ButtonCommon
                  classNames='px-8 bg-primary w-full rounded-lg h-[48px] mt-6'
                  submit={() => form.submit()}
                  size='large'
                  type='primary'
                  textButton={locale['forgotPassword.stepThree.form.button_text']}
                />
              </Form.Item>
              <m.div className='flex justify-center mb-8'>
                <Text className='text-blue cursor-pointer relative' onClick={() => changeView(1)}>
                  <FaLongArrowAltLeft className='mt-0.5 mr-1 absolute top-[3px] left-[-20px]' />
                  <Text className='text-blue cursor-pointer'>
                    {locale['forgotPassword.stepThree.form.back_text']}
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

export default ForgotPasswordStepThree

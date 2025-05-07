import { Form, Input } from 'antd'
import { m } from 'framer-motion'
import { useSelector } from 'react-redux'

import ForgotSectionContent from 'components/ForgotPassword'

import BaseAnimation from 'components/common/BaseAnimation/BaseAnimation'
import ButtonCommon from 'components/common/button'

import * as CONSTANT from 'common/constant'

const SuccessResetPassword = (props) => {
  const { changeView } = props
  const locale = useSelector((state) => state.user.locale)
  const [form] = Form.useForm()

  const stepOneInfo = {
    title: locale['forgotPassword.successReset.title'],
    descOne: locale['forgotPassword.successReset.descOne'],
    descTwo: locale['forgotPassword.successReset.descOne'],
    // subDesc: t('forgotPassword.successReset.subdesc'),
    logo: CONSTANT.SUCCESS_RESET_FORGOTPASSWORD_LOGO,
    screen: 'success',
    notify_message: locale['forgotPassword.successReset.form.notify_message'],
  }

  const onFinish = (formData) => {
    console.log('Success:', formData)
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
              onFinishFailed={onFinishFailed}
              initialValues={{ email: '' }}
            >
              <Form.Item className='text-center mb-12'>
                <ButtonCommon
                  classNames='px-8 bg-primary w-full rounded-lg h-[48px]'
                  submit={() => changeView(1)}
                  size='large'
                  type='primary'
                  textButton={locale['forgotPassword.successReset.form.button_text']}
                />
              </Form.Item>
            </Form>
          </m.div>
        </m.div>
      </div>
    </BaseAnimation>
  )
}

export default SuccessResetPassword

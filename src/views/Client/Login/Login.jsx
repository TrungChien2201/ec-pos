import { useState } from 'react'

import { useMutation, useQuery } from '@tanstack/react-query'
import { Form, Input, Typography, message } from 'antd'
import { m } from 'framer-motion'
import { IoArrowBackSharp } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'

import ErrorMessage from 'components/ErrorMessage'

import BaseAnimation from 'components/common/BaseAnimation/BaseAnimation'
import ButtonCommon from 'components/common/button'
import { login, setToken, getMe, getLiffToken, checkLineAccess } from 'services/auth'
import { getCartAPI, getCountCart } from 'services/cart'

import { QUERY_KEY_CLIENT_PERSONAL_INFO } from 'common/api'
import * as CONSTANT from 'common/constant'

import { initCountCart } from 'store/countCart'
import { initUser, initCountOrder } from 'store/user'

const { Text } = Typography

const Login = (props) => {
  const dispatch = useDispatch()
  const { changeView, handleClose } = props
  const [form] = Form.useForm()
  const [accessToken, setAccessToken] = useState(undefined)
  const [errorMessage, setErrorMessage] = useState('')
  const email = Form.useWatch('email', form)
  const password = Form.useWatch('password', form)
  const locale = useSelector((state) => state.user.locale)

  const { mutate: handleCheckLineAccess } = useMutation((formData) => checkLineAccess(formData), {
    onSuccess: (data) => {},
    onError: (error) => {},
  })

  const { mutate: handleLogin } = useMutation((formData) => login(formData), {
    onSuccess: async (data) => {
      if (data?.access_token) {
        setToken(data?.access_token)
        setAccessToken(data?.access_token)
        const tokenLine = getLiffToken()
        if (tokenLine) {
          handleCheckLineAccess(tokenLine)
        }
      }
    },
    onError: (error) => {
      if (error?.response?.data?.message) {
        setErrorMessage(error?.response?.data?.message)
      }
    },
  })

  useQuery([QUERY_KEY_CLIENT_PERSONAL_INFO, accessToken], () => getMe(), {
    cacheTime: Infinity,
    enabled: !!accessToken,
    onSuccess: async (data) => {
      if (data.user) {
        await getCartAPI()
        const countCart = getCountCart()
        dispatch(initCountCart(countCart))
        dispatch(initUser(data.user))
        dispatch(initCountOrder(data.countOrder))
      }
      handleClose()
    },
    onError: (error) => {
      if (error?.response?.status === CONSTANT.RESPONSE_SYSTEM_ERROR) {
        message.error({
          content: CONSTANT.ERROR_SYSTEM_MSG,
          key: CONSTANT.MESSAGE_SYSTEM_ERROR_KEY,
        })
      } else {
        message.error({
          content: CONSTANT.ERROR_SYSTEM_MSG,
          key: CONSTANT.MESSAGE_SYSTEM_ERROR_KEY,
        })
      }
    },
  })

  const onFinish = (formData) => {
    setErrorMessage('')
    handleLogin(formData)
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
          className='w-full p-4 m-auto grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 md:max-w-[450px] lg:max-w-[1058px] justify-center items-center'
        >
          <m.div variants={CONSTANT.ANIMATION_VARIANT_STAGGER_ITEM} className='md:hidden mb-10'>
            <IoArrowBackSharp className='w-6 h-6 text-black' onClick={handleClose} />
          </m.div>
          <m.div variants={CONSTANT.ANIMATION_VARIANT_STAGGER_ITEM} className='md:flex mb-4 hidden'>
            <img
              src={CONSTANT.LOGIN_LOGO}
              alt={locale['common.banner']}
              className='mx-auto rounded'
            />
          </m.div>
          <m.div
            className='flex flex-col lg:mr-16 lg:px-6'
            variants={CONSTANT.ANIMATION_VARIANT_STAGGER_ITEM}
          >
            <h1 className='text-3xl text-primary leading-10 font-bold'>{locale['login.title']}</h1>
            {errorMessage?.length ? <ErrorMessage message={errorMessage} /> : null}
            <Form
              form={form}
              size='large'
              layout='vertical'
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              initialValues={{ password: '', email: '' }}
            >
              <Form.Item
                name='email'
                className='mt-8'
                label={locale['forgot.email']}
                rules={[
                  {
                    required: true,
                    message: locale['login.form.email_required'],
                  },
                ]}
              >
                <Input placeholder={locale['login.email_placeholder']} />
              </Form.Item>
              <Form.Item
                name='password'
                className='mt-2.5'
                label={locale['login.password']}
                rules={[
                  {
                    required: true,
                    message: locale['login.form.password_required'],
                  },
                ]}
              >
                <Input.Password className='h-[48px]' placeholder={locale['login.password_placeholder']} />
              </Form.Item>
              <Text className='text-blue cursor-pointer' onClick={() => changeView(3)}>
                {locale['login.forgot_password']}
              </Text>
              <Form.Item className='text-center mt-5'>
                <ButtonCommon
                  classNames='px-8 bg-primary w-full rounded-lg h-[48px]'
                  submit={() => form.submit()}
                  size='large'
                  type='primary'
                  textButton={locale['login.btn']}
                  disabled={!(email && password)}
                />
              </Form.Item>
              <m.div className='flex justify-center mt-8'>
                <Text className='text-black text-base'>
                  {locale['login.dont_have_account']}
                  <Text
                    className='text-primary ml-1 cursor-pointer text-base font-medium'
                    onClick={() => changeView(2)}
                  >
                    {locale['common.here']}
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

export default Login

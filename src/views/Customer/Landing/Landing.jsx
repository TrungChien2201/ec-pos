import { useEffect, useRef, useState } from 'react'

import liff from '@line/liff'
import { useMutation, useQuery } from '@tanstack/react-query'
import { message } from 'antd'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'

import BaseAnimation from 'components/common/BaseAnimation/BaseAnimation'
import SplashScreen from 'components/common/SplashScreen'
import {
  checkLineAccess,
  getMe,
  getToken,
  loginByLiffToken,
  setLiffToken,
  setToken,
} from 'services/auth'
import { getCartAPI, getCountCart } from 'services/cart'

import * as API from 'common/api'
import { QUERY_KEY_CLIENT_PERSONAL_INFO } from 'common/api'
import * as CONSTANT from 'common/constant'

import { useRouter } from 'next/router'
import { initCountCart } from '../../../store/countCart'
import { initCountOrder, initUser } from '../../../store/user'

const Landing = (props) => {
  const { logo } = props
  const dispatch = useDispatch()
  const router = useRouter()
  const [liffToken, setLiffAccessToken] = useState()
  const [accessToken, setAccessToken] = useState(undefined)
  const [searchParams] = useSearchParams()
  const isAnimationDoneRef = useRef(null)
  const [isLineLogin, setIsLineLogin] = useState(false)

  const [isAnimationDone, setIsAnimationDone] = useState(false)

  useQuery([API.QUERY_KEY_LIFF_APP], () => loginByLiffToken(liffToken), {
    enabled: !!isAnimationDone && !!liffToken,
    onSuccess: (data) => {
      if (data?.access_token) {
        setToken(data?.access_token)
        setAccessToken(data?.access_token)
      } else {
        router.push(CONSTANT.HOME_PAGE_ROUTE)
      }
    },
    onError: (error) => {
      if (error?.response?.status === CONSTANT.RESPONSE_SYSTEM_ERROR) {
        message.error({
          content: CONSTANT.ERROR_SYSTEM_MSG,
          key: CONSTANT.MESSAGE_SYSTEM_ERROR_KEY,
        })
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
      router.push(CONSTANT.HOME_PAGE_ROUTE)
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

  const { mutate: handleCheckLineAccess } = useMutation((formData) => checkLineAccess(formData), {
    onSuccess: (data) => {
      message.success({
        content: CONSTANT.SUCCESS_LOGIN_MSG,
      })
      router.push(CONSTANT.USER_PROFILE)
    },
    onError: (error) => {
      message.error({
        content: CONSTANT.ERROR_LINE_CONNECTED_ANOTHER_ACCOUNT,
      })
      router.push(CONSTANT.USER_PROFILE)
      if (liff.isLoggedIn()) {
        liff.logout()
      }
      setIsLineLogin(false)
      setLiffAccessToken('')
      setLiffToken('')
    },
  })

  useEffect(() => {
    isAnimationDoneRef.current = isAnimationDone
  }, [isAnimationDone])

  useEffect(() => {
    const liffId = searchParams.get('liffId')
    const handleInitLiff = async () => {
      if (liffId) {
        await liff.init({ liffId })
        if (liff.isLoggedIn()) {
          const token = liff.getAccessToken()
          setIsLineLogin(true)
          const beareToken = getToken()
          setLiffAccessToken(token)
          setLiffToken(token)
          if (beareToken) {
            handleCheckLineAccess(token)
          }
        } else {
          liff.login()
        }
      }
    }
    if (liffId?.length) {
      handleInitLiff()
    } else {
      router.push('/home')
    }
  }, [handleCheckLineAccess, router.push, searchParams])

  return (
    <BaseAnimation>
      <div className='flex h-screen'>
        <div className='w-11/12 sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 m-auto'>
          <SplashScreen
            duration={CONSTANT.LANDING_ANIMATION_DURATION}
            logo='images/ec-logo.png'
            setIsAnimationDone={setIsAnimationDone}
          />
        </div>
      </div>
    </BaseAnimation>
  )
}

export default Landing

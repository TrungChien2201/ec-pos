import React, { useEffect, useRef, useState } from 'react'

import liff from '@line/liff'
import { useIsFetching, useQuery } from '@tanstack/react-query'
import { ConfigProvider, Layout, message, Spin } from 'antd'
// import BottomMenuBar from 'components/client/BottomMenuBar' //Error

import BaseAnimation from 'components/common/BaseAnimation/BaseAnimation'
import { useCustomDispatch, actions, useCustomProvider } from 'provider/CustomProvider'

import * as API from 'common/api'
import * as CONSTANT from 'common/constant'
import * as UTILITY from 'common/utility'
import { useRouter } from 'next/router'
import Head from 'next/head'

const { Content } = Layout

const ClientMain = (props) => {
  const { children } = props
  const router = useRouter()
  const { liffId } = router.query;

  const dispatch = useCustomDispatch()
  const location = router.pathname
  const isMountedRef = UTILITY.USE_IS_MOUNTED_REF()

  const personalInfoRef = useRef()

  const [accessToken, setAccessToken] = useState(undefined)
  const { personalInfo } = useCustomProvider()
  const [logo, setLogo] = useState(undefined)
  const [reservationCancelLimit, setReservationCancelLimit] = useState([])
  const [publicSettings, setPublicSettings] = useState({
    PRIMARY_COLOR: CONSTANT.PRIMARY_COLOR,
    PRIMARY_LIGHT_COLOR: CONSTANT.PRIMARY_LIGHT_COLOR,
    SECONDARY_COLOR: CONSTANT.SECONDARY_COLOR,
    SECONDARY_LIGHT_COLOR: CONSTANT.SECONDARY_LIGHT_COLOR,
  })

  useQuery(
    [API.QUERY_KEY_CLIENT_PERSONAL_INFO, accessToken],
    () => API.CLIENT_GET_PERSONAL_INFO(accessToken),
    {
      cacheTime: Infinity,
      enabled: !!accessToken,
      onSuccess: (response) => {
        if (isMountedRef.current) {
          dispatch({
            type: actions.SET_PERSONAL_INFO,
            personalInfo: response?.data || {},
          })
        }
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
    },
  )

  useEffect(() => {
    try {
      setAccessToken(liff.getAccessToken())
    } catch (err) {
      router.push(`${CONSTANT.CLIENT_LOGIN_ROUTE}/${liffId}`)
      const path = location?.pathname
      //Error
      // if (
      //   path?.replace(`/${liffId}`, '') === CONSTANT.CLIENT_RESERVATIONS_ROUTE ||
      //   path?.replace(`/${liffId}`, '') === CONSTANT.CLIENT_MEMBER_PROFILE_ROUTE
      // ) {
      //   localStorage.setItem('path', path)
      // }
    }

    // eslint-disable-next-line
  }, [liffId])

  useEffect(() => {
    let link = document.querySelector("link[rel~='icon']")

    if (!link) {
      link = document.createElement('link')
      link.rel = 'icon'
      document.getElementsByTagName('head')[0].appendChild(link)
    }

    if (publicSettings?.FAVICON_URL) {
      link.href = publicSettings?.FAVICON_URL
        ? `${API.SETTINGS_UPLOADS_URL}${publicSettings?.FAVICON_URL}`
        : '/favicon.ico'
    }
  }, [publicSettings?.FAVICON_URL])
  useEffect(() => {
    personalInfoRef.current = personalInfo
  }, [personalInfo])

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [location])

  const childrenWithProps = React.Children.map(children, (element) =>
    React.cloneElement(element, {
      logo,
      publicSettings,
      accessToken,
      personalInfo,
      reservationCancelLimit,
    }),
  )

  return (
    <>
      <Head><title>{publicSettings?.TITLE ? <title>{publicSettings.TITLE}</title> : ''}</title></Head>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: publicSettings.PRIMARY_COLOR,
            colorLink: publicSettings.PRIMARY_COLOR,
            colorLinkActive: publicSettings.SECONDARY_COLOR,
            colorLinkHover: publicSettings.SECONDARY_COLOR,
          },
        }}
      >
        <div className='flex flex-col w-full min-h-full'>
          <Spin
            spinning={
              useIsFetching({
                fetchStatus: 'fetching',
              }) > 0
            }
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 1001,
            }}
          >
            <BaseAnimation>
              <Layout className='min-h-screen bg-white'>
                {/* {accessToken && ( */}
                <Content>
                  <div className='w-full md:w-3/4 lg:w-1/2 xl:w-1/2 2xl:w-1/3 m-auto mb-36'>
                    {childrenWithProps}
                  </div>
                </Content>
                {/* )} */}
                {personalInfo?.status !== 2 ? (
                  <div />
                ) : (
                  // <BottomMenuBar
                  //   publicSettings={publicSettings}
                  //   personalInfo={personalInfo}
                  //   accessToken={accessToken}
                  // />
                  <div />
                )}
              </Layout>
            </BaseAnimation>
          </Spin>
        </div>
      </ConfigProvider>
    </>
  )
}

export default ClientMain

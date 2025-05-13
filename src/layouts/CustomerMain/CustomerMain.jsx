import React, { useEffect, useState, useLayoutEffect } from 'react'

import { useIsFetching, useQuery } from '@tanstack/react-query'
import { ConfigProvider, Layout, Spin, message } from 'antd'

import CustomFooter from 'components/Footer'
import SidebarMenu from 'components/SidebarMenu'

import BaseAnimation from 'components/common/BaseAnimation/BaseAnimation'

import * as API from 'common/api'
import * as CONSTANT from 'common/constant'
import * as UTILITY from 'common/utility'

import Topbar from './components/Topbar/Topbar'
import HomeHeader from './components/HomeHeader/HomeHeader'
import { useRouter } from 'next/router'
import Head from 'next/head'

// import io from 'socket.io-client'

const { Header, Content } = Layout

const CustomerMain = (props) => {
  console.log('CustomerMain')
  const { children } = props
  const router = useRouter()
  const bgHeader = router.pathname.includes('/[id]') ? '../images/bg-header.png' : 'images/bg-header.png'
  const isMountedRef = UTILITY.USE_IS_MOUNTED_REF()
  const [auth, setAuth] = useState(undefined)
  const [logo, setLogo] = useState(undefined)
  const [favicon, setFavicon] = useState(undefined)
  const [systemSettings, setSystemSettings] = useState([])
  const [isOpenSideBar, setIsOpenSideBar] = useState(false)
  const [publicSettings, setPublicSettings] = useState({
    PRIMARY_COLOR: CONSTANT.PRIMARY_COLOR,
    PRIMARY_LIGHT_COLOR: CONSTANT.PRIMARY_LIGHT_COLOR,
    SECONDARY_COLOR: CONSTANT.SECONDARY_COLOR,
    SECONDARY_LIGHT_COLOR: CONSTANT.SECONDARY_LIGHT_COLOR,
  })
  const [isHomePage, setIsHomePage] = useState(false)
  useEffect(() => {
    if (router.pathname === 'home' || router.pathname.includes('/home')) setIsHomePage(true)
    else setIsHomePage(false)
  }, [router.pathname])

  useLayoutEffect(() => {
    setIsOpenSideBar(false)
  }, [])

  console.log('customer layout')

  useQuery([API.QUERY_KEY_ADMIN_AUTH], API.ADMIN_GET_AUTH, {
    onSuccess: (response) => {
      if (isMountedRef.current) {
        if (response?.data) {
          setAuth(response.data)
        }
      }
    },
    onError: (error) => {
      if (error?.response?.status === CONSTANT.RESPONSE_PERMISSION_ERROR) {
        router.push(CONSTANT.PERMISSION_ERROR_ROUTE)
      } else if (error?.response?.status === CONSTANT.RESPONSE_SESSION_ERROR) {
        message.warning({
          content: CONSTANT.ERROR_SESSION_MSG,
          key: CONSTANT.MESSAGE_SESSION_ERROR_KEY,
        })
        router.push(CONSTANT.ADMIN_LOGIN_ROUTE)
      } else if (error?.response?.status === CONSTANT.RESPONSE_SYSTEM_ERROR) {
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

  const childrenWithProps = React.Children.map(children, (element) => {
    if (!React.isValidElement(element)) {
      return element;
    }
    return React.cloneElement(element, {
      publicSettings,
      systemSettings,
      auth,
      logo,
      favicon,
    });
  });

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
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [])

  return (
    <>
      <Head><title>{publicSettings.TITLE ? <title>{publicSettings.TITLE}</title> : ''}</title></Head>
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
        />
        <BaseAnimation>
          <Layout className='flex flex-col min-h-screen'>
            {isHomePage ? (
              <HomeHeader setIsOpenSideBar={setIsOpenSideBar} isHomePage={isHomePage} />
            ) : (
              <Header className='relative p-0 shadow w-full h-[145px] max-[640px]:h-[100px]'>
                <img src={bgHeader} alt="Header background" className='w-full h-full hidden md:block' />
                <div className='absolute w-full h-full top-0 left-0 bg-blue-light-6 md:bg-transparent'>
                  <Topbar setIsOpenSideBar={setIsOpenSideBar} isHomePage={isHomePage} />
                </div>
              </Header>
            )}
            <Content className='flex-1'>{childrenWithProps}</Content>
            <CustomFooter isHomePage={isHomePage} />
            <SidebarMenu isOpen={isOpenSideBar} onClose={() => setIsOpenSideBar(false)} />
          </Layout>
        </BaseAnimation>
      </ConfigProvider>
    </>
  )
}

export default CustomerMain

import React, { useState, useEffect } from 'react'

import { useIsFetching } from '@tanstack/react-query'
import { ConfigProvider, Layout, Spin } from 'antd'

import * as API from 'common/api'
import * as CONSTANT from 'common/constant'
import Head from 'next/head'
// import * as UTILITY from 'common/utility'
// import io from 'socket.io-client'

const { Content } = Layout

const Minimal = (props) => {
  const { children } = props

  // const isMountedRef = UTILITY.USE_IS_MOUNTED_REF()
  // const queryClient = useQueryClient()

  const [logo, setLogo] = useState(undefined)
  const [favicon, setFavicon] = useState(undefined)
  const [publicSettings, setPublicSettings] = useState({
    PRIMARY_COLOR: CONSTANT.PRIMARY_COLOR,
    PRIMARY_LIGHT_COLOR: CONSTANT.PRIMARY_LIGHT_COLOR,
    SECONDARY_COLOR: CONSTANT.SECONDARY_COLOR,
    SECONDARY_LIGHT_COLOR: CONSTANT.SECONDARY_LIGHT_COLOR,
  })

  useEffect(() => {
    let link = document.querySelector("link[rel~='icon']")

    if (!link) {
      link = document.createElement('link')
      link.rel = 'icon'
      document.getElementsByTagName('head')[0].appendChild(link)
    }

    if (favicon) {
      link.href = API.SETTINGS_UPLOADS_URL + favicon
    }
  }, [favicon])

  const childrenWithProps = React.Children.map(children, (element) =>
    React.cloneElement(element, {
      logo,
      publicSettings,
    }),
  )

  return (
    <>
      <Head>
        <title>{publicSettings?.TITLE || process.env.NEXT_PUBLIC_SYSTEM_TITLE}</title>
      </Head>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: publicSettings.PRIMARY_COLOR,
            colorLink: publicSettings.PRIMARY_COLOR,
            colorLinkActive: publicSettings.PRIMARY_COLOR,
            colorLinkHover: publicSettings.PRIMARY_COLOR,
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
            <Layout className='min-h-screen'>
              <Content className='bg-white'>{childrenWithProps}</Content>
            </Layout>
          </Spin>
        </div>
      </ConfigProvider>
    </>
  )
}

export default Minimal

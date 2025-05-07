import { Divider, Image, Menu } from 'antd'
import {
  MdAccessTimeFilled,
  MdDirectionsCar,
  MdBusinessCenter,
  MdDashboard,
  MdGroups,
  MdSafetyDivider,
  MdSettings,
  MdRedeem,
} from 'react-icons/md'
import { useRouter } from 'next/router'
import { styled } from 'styled-components'

import * as API from 'common/api'
import * as CONSTANT from 'common/constant'
import * as UTILITY from 'common/utility'

const CustomMenu = styled(Menu)`
  &.ant-menu-inline-collapsed > .ant-menu-item {
    padding-inline: 30% !important;
  }

  &.ant-menu-inline-collapsed > .ant-menu-submenu > .ant-menu-submenu-title {
    padding-inline: 30% !important;
  }
`

const menuItems = [
  {
    key: CONSTANT.PAGE_ADMIN_DASHBOARD,
    icon: <MdDashboard className='text-2xl max-w-full' />,
    label: <span className='text-sm'>{CONSTANT.PAGE_ADMIN_DASHBOARD}</span>,
  },

  {
    key: CONSTANT.PAGE_ADMIN_SETTINGS,
    icon: <MdSettings className='text-2xl max-w-full' />,
    label: <span className='text-sm'>{CONSTANT.PAGE_ADMIN_SETTINGS}</span>,
  },
]

const Sidebar = (props) => {
  const { publicSettings, isCollapsed } = props
  const router = useRouter()

  const getSelectedKeys = () => {
    return UTILITY.GET_SELECTED_KEY_BY_ROUTE(CONSTANT.ROUTES, router.pathname)
  }

  const getOpenKeys = () => {
    return UTILITY.GET_OPEN_KEY_BY_ROUTE(CONSTANT.ROUTES, router.pathname)
  }

  const handleClick = (event) => {
    const route = UTILITY.GET_ROUTE_BY_KEY(CONSTANT.ROUTES, event?.key)

    if (route) {
      router.push(route)
    }
  }

  return (
    <div className='flex flex-col h-full' style={{ overflowX: 'hidden', overflowY: 'auto' }}>
      <div className='flex m-4'>
        <Image
          src={
            publicSettings?.LOGO_SIDEBAR_URL
              ? `${API.SETTINGS_UPLOADS_URL}${publicSettings?.LOGO_SIDEBAR_URL}`
              : CONSTANT.DEFAULT_LOGO
          }
          crossOrigin='anonymous'
          alt='ロゴ'
          preview={false}
          className='mx-auto rounded max-w-full object-contain'
          style={{ height: '32px' }}
        />
      </div>
      <Divider className='mt-0' />
      <div className='text-center mx-4'>
        <p className={`${isCollapsed ? 'text-xs' : 'text-base'}`}>
          {publicSettings?.TITLE || process.env.NEXT_PUBLIC_SYSTEM_TITLE}
        </p>
      </div>
      <Divider />
      <div className='flex flex-col justify-between h-full'>
        {/* <CustomMenu
          mode='inline'
          triggerSubMenuAction='click'
          onClick={handleClick}
          defaultSelectedKeys={[CONSTANT.HOME_PAGE_ROUTE]}
          defaultOpenKeys={[getOpenKeys()]}
          selectedKeys={[getSelectedKeys()]}
          items={menuItems}
        /> */}
        <div>
          <Divider />
          <div className='flex justify-center mb-4 mx-4'>
            <img src={process.env.NEXT_PUBLIC_LINE_QR_URL} alt='LINE' className='max-w-full' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar

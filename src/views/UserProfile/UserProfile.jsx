import { useState } from 'react'

import { Avatar, Menu } from 'antd'
import { useSelector } from 'react-redux'
import { useRouter, useSearchParams } from 'next/navigation';
import IconUser from 'resourse/svg/IconUser'

import * as UTILITY from 'common/utility'
import { USER_PROFILE } from 'common/constant'

import UserProfileAddress from './Address'
import OrderHistory from './OrderHistory'
import UserInformation from './Profile'

import './styles.scss'

const getItem = (label, key, icon, children, type) => {
  return {
    key,
    icon,
    children,
    label,
    type,
  }
}

const rootSubmenuKeys = ['sub1', 'sub2']

const UserProfile = () => {
  // eslint-disable-next-line no-unused-vars
  const router = useRouter();
  const locale = useSelector((state) => state.user.locale)
  const searchParams = useSearchParams(); // Get current query params
  const [openKeys, setOpenKeys] = useState(['sub1'])
  const [menuItem, setMenuItem] = useState(UTILITY.parseQuery().tabActive || '1')
  const UserInfo = useSelector((state) => state.user)

  const { NEXT_PUBLIC_API_URL } = process.env

  const commonItems = [
    getItem(
      locale['user_profile.my_profile'],
      'sub1',
      <div className='mt-2 mr-[-10px]'>
        <IconUser width='38' height='38' />
      </div>,
      [
        getItem(locale['user_profile.profile'], '1'),
        getItem(locale['user_profile.shipping_address'], '2'),
        getItem(locale['user_profile.order_history'], '3'),
      ],
    ),
  ]

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1)
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys)
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : [])
    }
  }

  const onClickMenu = (e) => {
    setMenuItem(e.key)
    const currentParams = new URLSearchParams(searchParams.toString());
    // Add new query parameters
    currentParams.set('tabActive', e.key);

    // Navigate to the updated URL
    router.push(`/${USER_PROFILE}?${currentParams.toString()}`);
  }

  return (
    <div className='container md:mx-auto mt:py-11 mt:pb-[10rem] max-md:px-0'>
      <div className='flex flex-col md:flex-row gap-4 sm:gap-6 md:py-8 lg:py-16'>
        <div className='border md:rounded-2xl bg-white p-4 w-full md:w-[246px]'>
          <div className='flex flex-col gap-4'>
            <div className='flex justify-between border-name-user'>
              <div className='flex gap-2 items-center py-2 md:py-0'>
                <Avatar
                  className='border-[#A5A58D] border-2'
                  style={{ verticalAlign: 'middle' }}
                  size='large'
                  src={
                    UserInfo.user?.avatar_url
                      ? `${NEXT_PUBLIC_API_URL}/${UserInfo.user?.avatar_url}`
                      : '/images/avatar-user.png'
                  }
                  crossOrigin='anonymous'
                />
                <div className='text-sm text-black font-medium'>{UserInfo?.user?.name}</div>
              </div>
            </div>
            <Menu
              className='border-none menuProfile'
              mode='inline'
              openKeys={openKeys}
              onOpenChange={onOpenChange}
              onClick={onClickMenu}
              items={commonItems}
              defaultSelectedKeys={[menuItem]}
            />
          </div>
        </div>
        {menuItem === '1' && <UserInformation />}
        {menuItem === '2' && <UserProfileAddress />}
        {menuItem === '3' && <OrderHistory />}
      </div>
    </div>
  )
}
export default UserProfile

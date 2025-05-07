import { useQueryClient } from '@tanstack/react-query'
import { Dropdown } from 'antd'
import { useSelector, useDispatch } from 'react-redux'

import IconLogout from 'resourse/svg/IconLogout'
import IconUser from 'resourse/svg/IconUser'
import { getToken, logout, getMe } from 'services/auth'
import { setCart } from 'services/cart'
import { initUser, initCountOrder, logoutUser } from 'store/user'

import { QUERY_KEY_CLIENT_PERSONAL_INFO } from 'common/api'
import { USER_PROFILE } from 'common/constant'

import { initCountCart } from 'store/countCart'
import { useRouter } from 'next/router'
import Image from 'next/image';

const UserProfile = () => {
  const locale = useSelector((state) => state.user.locale)
  const dispatch = useDispatch()
  const router = useRouter()
  const queryClient = useQueryClient()
  const UserInfo = useSelector((state) => state.user)
  const { NEXT_PUBLIC_API_URL } = process.env

  const getUser = async () => {
    const token = getToken()
    if (!token) {
      dispatch(logoutUser())
      return
    }
    try {
      const data = await getMe()
      if (data && data.user) {
        dispatch(initUser(data.user))
        dispatch(initCountOrder(data.countOrder))
      }
    } catch (e) {
      dispatch(logoutUser())
    }
  }

  const handleLogout = async () => {
    queryClient.invalidateQueries([QUERY_KEY_CLIENT_PERSONAL_INFO, getToken()])
    queryClient.removeQueries([QUERY_KEY_CLIENT_PERSONAL_INFO, getToken()])
    setCart([], false)
    dispatch(initCountCart(0))
    dispatch(logoutUser())
    logout()
    getUser()
    router.push('/')
  }

  const items = [
    {
      key: '0',
      label: (
        <div className='flex md:flex md:min-w-fit items-center gap-x-2 md:bg-white/25 rounded-3xl md:pr-4'>
          <div className='w-7 h-7 md:w-10 md:h-10 flex-shrink-0 border border-[#51D811] relative overflow-hidden rounded-full'>
            <Image
              src={
                UserInfo.user?.avatar_url
                  ? `${NEXT_PUBLIC_API_URL}/${UserInfo?.user?.avatar_url}`
                  : 'images/avatar-default.png'
              }
              className='object-cover align-top w-7 h-7 md:w-10 md:h-10'
              crossOrigin='anonymous'
            />
          </div>
          <span className='font-medium text-sm'>{UserInfo?.user?.name}</span>
        </div>
      ),
    },
    {
      key: '1',
      label: (
        <div
          className='flex justify-start items-center gap-1'
          onClick={() => router.push(USER_PROFILE)}
        >
          <IconUser /> {locale['user_profile.my_profile']}
        </div>
      ),
    },
    {
      key: '2',
      label: (
        <div onClick={() => handleLogout()} className='flex justify-start items-center gap-1'>
          <IconLogout /> {locale['user_profile.logout']}
        </div>
      ),
    },
  ]

  return (
    <Dropdown menu={{ items }} placement="bottomLeft" arrow={{ pointAtCenter: true }}>
      <div className='w-7 h-7 md:w-10 md:h-10 flex-shrink-0 border border-[#51D811] relative overflow-hidden rounded-full'>
        <Image
          src={
            UserInfo.user?.avatar_url
              ? `${NEXT_PUBLIC_API_URL}/${UserInfo?.user?.avatar_url}`
              : 'images/avatar-default.png'
          }
          className='object-cover align-top w-7 h-7 md:w-10 md:h-10'
          crossOrigin='anonymous'
        />
      </div>
    </Dropdown>
    // <div>hello</div>
  )
}

export default UserProfile

import { useState } from 'react'

import { useQuery } from '@tanstack/react-query'
import { Col, Row } from 'antd'
import { LuUserCircle } from 'react-icons/lu'
import { useDispatch, useSelector } from 'react-redux'

import MenuItem from 'components/MenuItem'
import UserProfile from 'components/UserProfile'

import AccountModal from 'components/modals/AccountModal'
import IconMenu from 'resourse/svg/IconMenu'
import IconShoppingCart from 'resourse/svg/IconShoppingCart'
import { getMe, getToken } from 'services/auth'

import { QUERY_KEY_CLIENT_PERSONAL_INFO } from 'common/api'

import SearchInput from './components/SearchInput'
import { closeModalLogin, showModalLogin } from 'store/user'
import { INSTAGRRAM_LINK } from 'common/constant'
import { InstagramOutlined } from '@ant-design/icons'
import { useRouter } from 'next/router'

const Topbar = ({ setIsOpenSideBar, isHomePage, txtColor = '#FFFFFF' }) => {
  const dispatch = useDispatch()
  const router = useRouter()
  const StoreLogo = '/ec/images/logo-2x.png'

  const menus = useSelector((state) => state.menus.menus)
  const UserFEInfo = useSelector((state) => state.user)
  const countCart = useSelector((state) => state.countCart)
  const [searchActive, setSearchActive] = useState(false)
  const { data: UserInfo } = useQuery([QUERY_KEY_CLIENT_PERSONAL_INFO, getToken()], () => getMe(), {
    enabled: !!getToken(),
  })

  const handleCancel = () => {
    dispatch(closeModalLogin())
  }

  const openModalLogin = () => {
    dispatch(showModalLogin())
  }

  const renderMenus = menus?.map((menu, index) => <MenuItem key={index} menu={menu} />)

  return (
    <div
      className='container container--header mx-auto min-[1151px]:text-base font-medium max-[1150px]:text-sx'
      style={{ color: txtColor }}
    >
      <Row gutter={16} className='h-[145px] max-[1160px]:hidden items-center justify-between'>
        <Col>
          <img
            alt='logo'
            src={StoreLogo}
            className='cursor-pointer'
            width={168}
            height={54}
            onClick={() => router.push('/home')}
          />
        </Col>
        {!searchActive && (
          <Col className='flex justify-center items-center gap-x-3 2xl:gap-x-6'>{renderMenus}</Col>
        )}

        <Col className='flex justify-end items-center gap-x-3'>
          <SearchInput expand={searchActive} setExpand={setSearchActive} />
          {UserInfo?.user?.id ? (
            <UserProfile />
          ) : (
            <LuUserCircle
              className='w-7 h-7 cursor-pointer'
              onClick={() => openModalLogin(true)}
              style={{ color: txtColor }}
            />
          )}
          <div
            className='relative flex items-center cursor-pointer'
            onClick={() => router.push('/cart')}
          >
            <IconShoppingCart className='w-8 h-8' color={txtColor} />
            {countCart > 0 && (
              <div className='bg-gray-light-4 absolute -top-2 -right-1 flex items-center justify-center rounded-full w-[22px] h-[22px] border border-solid border-white'>
                <span className='text-[10px]'>{countCart}</span>
              </div>
            )}
          </div>

          <InstagramOutlined className='text-[28px]' onClick={() => window.open(INSTAGRRAM_LINK)} />
        </Col>
      </Row>
      <Row className='h-[100px] min-[1161px]:hidden' wrap={false}>
        <Col className='flex justify-start items-center' onClick={() => setIsOpenSideBar(true)}>
          <IconMenu color={txtColor} />
        </Col>
        <Col flex={1} className='flex justify-center items-center ml-2 mr-3'>
          <SearchInput variant={isHomePage ? 'dark' : 'light'} focusOnMounted={false} />
        </Col>
        <Col className='flex gap-x-2 md:gap-x-3 justify-end items-center'>
          {UserInfo?.user?.id ? (
            <UserProfile />
          ) : (
            <LuUserCircle
              className='w-7 h-7 cursor-pointer'
              onClick={() => openModalLogin(true)}
              style={{ color: txtColor }}
            />
          )}
          <div className='relative flex items-center' onClick={() => router.push('/cart')}>
            <IconShoppingCart className='w-8 h-8' color={txtColor} />
            {countCart > 0 ? (
              <div className='flex justify-center items-center w-5 h-5 md:w-[22px] md:h-[22px] absolute -right-1 md:right-[-5px] -top-1 md:top-[-5px] z-1 rounded-full border border-solid border-gray-200 bg-blue-dark-1'>
                <span className='text-[9px]'>{countCart}</span>
              </div>
            ) : null}
          </div>

          <InstagramOutlined className='text-[28px]' onClick={() => window.open(INSTAGRRAM_LINK)} />
        </Col>
      </Row>
      <AccountModal
        open={UserFEInfo?.showModalLogin}
        handleCancel={handleCancel}
        className='login'
      />
    </div>
  )
}

export default Topbar

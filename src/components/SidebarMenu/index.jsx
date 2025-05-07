/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/no-unstable-nested-components */
import { useMemo, useState } from 'react'

import { Drawer, Menu } from 'antd'
import { useSelector } from 'react-redux'

import IconArrowDown from 'resourse/svg/IconArrowDown'
import IconArrowUp from 'resourse/svg/IconArrowUp'

import { HOME_PAGE_ROUTE } from 'common/constant'
import { useRouter } from 'next/router'

const SidebarMenu = ({ isOpen, onClose }) => {
  const router = useRouter()
  const menus = useSelector((state) => state.menus.menus)
  const rootSubmenuKeys = useMemo(() => {
    return menus?.filter((m) => m.showTopBar).map((_v, index) => String(index))
  }, [menus])
  const [openKeys, setOpenKeys] = useState(['0'])
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1)
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys)
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : [])
    }
  }

  const handleNavigate = (child) => {
    if (child.id) {
      router.push(`/products?collectionId=${child.id}`)
    }
    if (child.href) {
      router.push(child.href)
    }
    onClose()
  }
  const menuItems = menus
    ?.filter((m) => m.showTopBar)
    ?.map((menu, index) => {
      return {
        key: index,
        label: (
          <div className='w-[150px] truncate'>
            <span>{menu.title}</span>
          </div>
        ),
        ...(menu?.childs?.length
          ? {
              children: menu?.childs
                ?.filter((item) => !item.isHideOnMenu)
                .map((child, indexC) => ({
                  key: `child-${indexC}-${index}`,
                  label: (
                    <div
                      onClick={() => {
                        if (child.active === false) return
                        handleNavigate(child)
                      }}
                    >
                      {child.title === 'Bhutan Premium 7 Matsutake' ? 'Matsutake' : child.title}
                    </div>
                  ),
                })),
            }
          : null),
      }
    })
  return (
    <Drawer
      closable={false}
      placement='left'
      open={isOpen}
      onClose={onClose}
      width='70%'
      className='bg-blue-light-6'
      classNames={{
        header: 'border-none',
        body: 'p-0',
      }}
      title={
        <div className='flex justify-between'>
          <div onClick={onClose}>
            <img alt='logo' src='images/image-5.png' width={32} height={32} />
          </div>
          <img
            alt='logo'
            src='images/logo-2x.png'
            width={118}
            height={38}
            onClick={() => {
              onClose()
              router.push(HOME_PAGE_ROUTE)
            }}
          />
        </div>
      }
    >
      <Menu
        mode='inline'
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        style={{
          width: '100%',
          background: 'transparent',
        }}
        className='main-menu'
        items={[
          ...menuItems,
          {
            key: '1000',
            label: <div onClick={() => handleNavigate({ href: '/contact' })}>Contact</div>,
          },
        ]}
        expandIcon={({ isOpen: isOpenMenu }) => {
          return isOpenMenu ? <IconArrowUp /> : <IconArrowDown />
        }}
      />
    </Drawer>
  )
}

export default SidebarMenu

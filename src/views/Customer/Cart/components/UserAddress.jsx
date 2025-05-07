import { useEffect, useState } from 'react'

import { useQuery } from '@tanstack/react-query'
import { Modal } from 'antd'
import isEmpty from 'lodash/isEmpty'
import { useDispatch, useSelector } from 'react-redux'

import IconLocation from 'resourse/svg/IconLocation'
import IconPlus from 'resourse/svg/IconPlus'
import { getListProvinces } from 'services/address'
import UserProfileAddress from 'views/UserProfile/Address'
import ModalAddress from 'views/UserProfile/ModalAddress'

import { showModalLogin } from '../../../../store/user'

const UserAddress = ({ className, userAddress, setAddressSelected, onCallBack }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [address, setAddress] = useState({})
  const [addressDraft, setAddressDraft] = useState(undefined)
  const [isEditUserAddrss, setIsEditUserAddress] = useState(false)
  const [isOpenAddAddress, setIsOpenAddAddress] = useState(false)
  const userInfo = useSelector((state) => state.user)
  const locale = useSelector((state) => state.user.locale)
  const dispatch = useDispatch()

  const { data: provinces } = useQuery(['getListProvinces'], getListProvinces)
  const prefectures =
    address?.prefectures && Array.isArray(provinces)
      ? provinces.find((item) => item.value === address?.prefectures)
      : ''

  useEffect(() => {
    setAddress(userAddress)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userAddress])

  useEffect(() => {
    if (!isOpen && !!addressDraft) {
      setAddress(addressDraft)
      setAddressSelected(addressDraft)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addressDraft, isOpen])

  const onSelectedAddress = (value) => {
    if (!value) setAddressDraft(undefined)
    setAddressDraft(value)
  }

  const onChangeAddress = () => {
    setIsOpen(true)
  }

  const onAddAddress = () => {
    if (!userInfo.user) {
      dispatch(showModalLogin())
      return
    }
    setIsOpenAddAddress(true)
  }

  return (
    <div className={className}>
      <div className='flex items-center justify-between text-black mb-[15px] lg:text-[16px] lg:max-w-[415px]'>
        <span className='flex items-center gap-[8px]'>
          <IconLocation /> {locale['user_profile.shipping_address']}
        </span>
        {!isEmpty(userAddress) && (
          <span className='text-[#1890FF] cursor-pointer' onClick={onChangeAddress}>
            {locale['common.change']}
          </span>
        )}
      </div>
      {!isEmpty(userAddress) && !isEmpty(userInfo?.user) ? (
        <div className='bg-[#F7F7F7] p-[16px] text-black lg:max-w-[415px]'>
          <div className='mb-[11px]'>
            <span className='border-solid border-0 border-r pr-[10px] mr-[10px]'>
              {address?.first_name || userAddress?.first_name}{' '}
              {address?.last_name || userAddress?.last_name}
            </span>
            <span>{address?.phone || userAddress?.phone}</span>
          </div>
          <p className='mb-3'>〒{address?.post_code}</p>
          <p>
            {prefectures?.label} {address?.city} {address?.address1}
          </p>
        </div>
      ) : (
        <div
          className='flex items-center justify-center gap-[8px] border-dashed border-[0.5px] text-[#9C8C6A] border-color-[#9C8C6A] rounded-[6px] py-[25px] lg:max-w-[300px]'
          onClick={onAddAddress}
        >
          <IconPlus />
          {locale['user_profile.register_your_address']}
        </div>
      )}
      <Modal
        width={745}
        open={isOpen && !isEditUserAddrss}
        maskClosable
        onCancel={() => {
          setIsOpen(false)
        }}
        closeIcon={false}
      >
        <UserProfileAddress
          getAddSelected={onSelectedAddress}
          hasRemove={false}
          setIsOpenModal={(value) => {
            setIsEditUserAddress(value)
          }}
        />
      </Modal>
      <ModalAddress
        isOpen={isOpenAddAddress}
        onCancel={() => {
          setIsOpenAddAddress(false)
        }}
        onSuccess={() => {
          onCallBack()
        }}
      />
    </div>
  )
}

export default UserAddress

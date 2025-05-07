import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

// eslint-disable-next-line import/no-extraneous-dependencies
import { PlusOutlined } from '@ant-design/icons'
import { useQuery, useMutation } from '@tanstack/react-query'
import { Divider, Space, Radio } from 'antd'

import ButtonComponent from 'components/Button'
import EmptyData from 'components/EmptyData'

import RemoveModal from 'components/modals/RemoveModal'
import IconPencilSimpleLine from 'resourse/svg/IconPencilSimpleLine'
import IconTrash from 'resourse/svg/IconTrash'
import { getListAddress, getListProvinces, removeAddress } from 'services/address'

import ModalAddress from '../ModalAddress'

import '../styles.scss'

const UserProfileAddress = ({ hasRemove = true, getAddSelected, setIsOpenModal }) => {
  const locale = useSelector((state) => state.user.locale)
  const [isOpen, setIsOpen] = useState(false)
  const [isRemove, setIsRemove] = useState(false)
  const [idSelected, setIdSelected] = useState(false)
  const [addressSelected, setAddressSelected] = useState({})
  const [valueDefault, setValueDefault] = useState(null)
  const [isFirstAddress, setIsFirstAddress] = useState(false)

  const { data: address, refetch } = useQuery(['getListAddress'], getListAddress)
  const { data: provinces } = useQuery(['getListProvinces'], getListProvinces)
  const { mutate: mutateRemoveAddress } = useMutation(removeAddress)

  const getPrefectures = (ad) => {
    return ad?.prefectures && Array.isArray(provinces)
      ? provinces.find((item) => item.value === ad?.prefectures)
      : ''
  }

  useEffect(() => {
    const indexAddDefault = address?.findIndex((el) => el?.default)
    setValueDefault(address?.[indexAddDefault]?.id)
  }, [address])

  useEffect(() => {
    setIsOpenModal?.(isOpen || isRemove)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, isRemove])

  const actionAddAddress = () => {
    setAddressSelected(undefined)
    setIsOpen(true)
    if (Array.isArray(address) && address.length > 0) {
      setIsFirstAddress(false)
    }
  }

  const actionRemoveAddress = (id) => {
    setIdSelected(id)
    setIsRemove(true)
  }

  const actionEditAddress = (value) => {
    setAddressSelected(value)
    setIsOpen(true)
    if (Array.isArray(address) && address.length === 1) {
      setIsFirstAddress(true)
    }
  }

  const submitRemove = () => {
    mutateRemoveAddress(idSelected, {
      onSuccess: () => {
        refetch()
      },
      onSettled: () => {
        setIsRemove(false)
      },
    })
  }

  const onChangeAddSelected = (id) => {
    setValueDefault(id)
    const indexAddressSelected = address.findIndex((el) => el.id === id)
    getAddSelected?.(address?.[indexAddressSelected])
  }

  return (
    <div className='flex-1 h-full py-4 bg-white border sm:rounded-2xl'>
      <div className='flex justify-between items-center px-4'>
        <div className='font-medium text-xl text-black'>
          {locale['user_profile.shipping_address']}
        </div>
        <ButtonComponent
          className='bg-[#9C8C6A] text-white'
          prefixIcon={<PlusOutlined />}
          title={locale['user_profile.register_new_address']}
          onClick={actionAddAddress}
        />
      </div>
      <Divider orientationMargin1='0.05' />
      {address && address.length > 0 ? (
        <div className='px-4 flex flex-col gap-6'>
          <div className='text-base font-normal text-black'>{locale['user_profile.choosing']}</div>
          <div className='md:max-h-[510px] scroll-custom'>
            <Radio.Group
              className='w-full'
              value={valueDefault}
              onChange={(e) => {
                onChangeAddSelected(e.target.value)
              }}
            >
              <Space className='w-full' direction='vertical'>
                {address.map((ad, index) => (
                  <div key={`${index + 1}`}>
                    <Radio value={ad.id} className='w-full'>
                      <div className='w-full flex flex-col lg:flex-row justify-start lg:justify-between lg:items-center ml-2'>
                        <div className='flex flex-col gap-1 text-sm text-black font-normal'>
                          <div className='flex items-center gap-2'>
                            {ad?.first_name} {ad?.last_name} <span>|</span>{' '}
                            <span className='text-base'>{ad?.phone}</span>
                          </div>
                          <p className='mb-1'>〒{ad?.post_code}</p>
                          <p>
                            {getPrefectures(ad)?.label} {ad?.city} {ad?.address1}
                          </p>
                        </div>
                        <div className='flex gap-1 mt-2 lg:mt-0'>
                          <ButtonComponent
                            onClick={() => {
                              actionEditAddress(ad)
                            }}
                            className='border-blue-light-5 flex justify-center items-center p-[10px] min-h-[36px]'
                            prefixIcon={<IconPencilSimpleLine />}
                          />
                          {!ad?.default && hasRemove && address?.length > 1 && (
                            <ButtonComponent
                              onClick={() => {
                                actionRemoveAddress(ad.id)
                              }}
                              className='border-[#DE0000] flex justify-center items-center p-[10px] min-h-[36px]'
                              prefixIcon={<IconTrash />}
                            />
                          )}
                        </div>
                      </div>
                    </Radio>
                    <Divider />
                  </div>
                ))}
              </Space>
            </Radio.Group>
          </div>
        </div>
      ) : (
        <EmptyData />
      )}
      <ModalAddress
        isOpen={isOpen}
        onSuccess={() => {
          refetch()
        }}
        onCancel={() => {
          setIsOpen(false)
        }}
        defaultValue={addressSelected}
        isFirstAddress={isFirstAddress}
      />
      <RemoveModal
        isOpen={isRemove}
        onSubmit={submitRemove}
        onCancel={() => {
          setIsRemove(false)
        }}
      />
    </div>
  )
}

export default UserProfileAddress

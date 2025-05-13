import { useEffect, useState } from 'react'

import { Divider, Form, Input, Avatar, Modal, Upload } from 'antd'
import '../styles.scss'

import { useSelector, useDispatch } from 'react-redux'

import ButtonComponent from 'components/Button'

import useResponsive from 'hooks/useResponsive'
import IconCamera from 'resourse/svg/IconCamera'
import IconLineApp from 'resourse/svg/IconLineApp'
import IconNotifySuccess from 'resourse/svg/IconNotifySuccess'

import { useMutation } from '@tanstack/react-query'

import { getMe, getToken } from 'services/auth'
import { editProfile } from 'services/profile'
import { initUser, initCountOrder, logoutUser } from 'store/user'

import * as CONSTANT from 'common/constant'

import liff from '@line/liff'

const UserInformation = () => {
  const dispatch = useDispatch()
  const locale = useSelector((state) => state.user.locale)
  const [form] = Form.useForm()
  const { isMobile, isTablet } = useResponsive()

  const { NEXT_PUBLIC_API_URL } = process.env
  const UserInfo = useSelector((state) => state.user)
  const countOrder = useSelector((state) => state.user.countOrder)
  const [imgPreview, setImgPreview] = useState()

  const { mutate: mutateEditProfile, isLoading: isLoadingEdit } = useMutation(editProfile)

  const [imgUpload, setImgUpload] = useState()

  const [openModal, setOpenModal] = useState(false)

  const handleCancel = () => {
    setOpenModal(false)
  }

  const handlePhoneChange = (e) => {
    let inputValue = e.target.value

    inputValue = inputValue.replace(/[^0-9]/g, '')

    inputValue = inputValue.slice(0, 11)

    form.setFieldsValue({
      phone: inputValue,
    })
  }

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

  const onFinish = (formData) => {
    let payload = {
      ...formData,
    }
    if (imgUpload) {
      payload = {
        ...formData,
        avatar: imgUpload,
      }
    }
    if (!payload.phone) delete payload.phone
    mutateEditProfile(payload, {
      onSuccess: async () => {
        getUser()
        setOpenModal(true)
      },
    })
  }

  const props = {
    accept: '.jpg, .jpeg, .png',
    maxCount: 1,
    showUploadList: false,
    fallback: CONSTANT.NO_IMAGE,
    beforeUpload: (file) => {
      setImgUpload(file)
      setImgPreview(URL.createObjectURL(file))
      return false
    },
    fileList: imgUpload ? [imgUpload] : [],
  }

  const handleLineUser = async () => {
    if (UserInfo.user?.line_user_id) return
    if (!UserInfo.user?.line_user_id) {
      const liffId = process.env.NEXT_PUBLIC_LIFF_ID
      if (liffId) {
        await liff.init({ liffId })
        if (liff.isLoggedIn()) {
          const token = liff.getAccessToken()
        } else {
          liff.login()
        }
      }
    }
  }

  useEffect(() => {
    form.setFieldsValue({ ...UserInfo.user })
  }, [UserInfo.user, form])

  return (
    <div className='flex-1 py-4 bg-white border md:rounded-2xl'>
      <div className='flex justify-between items-center px-4'>
        <div className='font-medium text-xl text-black'>{locale['user_profile.profile']}</div>
      </div>

      <Divider />

      <div className='flex flex-col md:flex-row pt-[20px] pb-[66px]'>
        <div className='w-full md:w-8/12 md:px-4 lg:px-12 order-2 md:order-1 border-form-profile'>
          <Form
            className='p-[20px] lg:p-8 md:p-0'
            layout='vertical'
            onFinish={onFinish}
            form={form}
            onFinishFailed={() => {}}
            autoComplete='off'
          >
            <div className='grid grid-cols-2 gap-x-4'>
              <Form.Item
                name='last_name'
                label={locale['common.name']}
                rules={[
                  {
                    required: true,
                    message: locale['common.name'] + locale['common.validation.required'],
                  },
                ]}
              >
                <Input placeholder={locale['common.last_name']} />
              </Form.Item>
              <Form.Item
                name='first_name'
                className='mt-[31px]'
                rules={[
                  {
                    required: true,
                    message: locale['common.name'] + locale['common.validation.required'],
                  },
                ]}
              >
                <Input placeholder={locale['common.first_name']} />
              </Form.Item>
            </div>
            <Form.Item
              name='phone'
              label={locale['common.phone']}
              rules={[
                {
                  pattern: /[\d]{10}|[\d]{11}$/,
                  message: locale['common.validation.phone'],
                },
              ]}
            >
              <Input placeholder={locale['common.input']} onChange={handlePhoneChange} />
            </Form.Item>
            <Form.Item name='email' label={locale['common.email']}>
              <Input placeholder={locale['common.email']} disabled />
            </Form.Item>
            <Form.Item>
              <ButtonComponent
                type='submit'
                isLoading={isLoadingEdit}
                className='bg-[#9C8C6A] text-white px-[15px] py-1 w-[133px]'
                title={locale['common.save']}
              />
            </Form.Item>
          </Form>
        </div>

        <div className='flex flex-col gap-4 w-full md:w-4/12 order-1 md:order-2 px-12'>
          <div className='w-fit mx-auto uploadAvata'>
            <Avatar
              className='border-[#A5A58D] border-2'
              style={{ verticalAlign: 'middle' }}
              size={isMobile ? 64 : isTablet ? 80 : 118}
              src={
                imgPreview ??
                (UserInfo.user?.avatar_url
                  ? `${VITE_API_URL}/${UserInfo?.user?.avatar_url}`
                  : '/images/avatar-user.png')
              }
              crossOrigin='anonymous'
            />
            <Upload {...props}>
              <IconCamera className='iconUpload' />
            </Upload>
          </div>

          <div className='flex justify-center'>
            <div className='px-5 text-center' style={{ borderRight: '1px solid #6C6C6C' }}>
              <p className='text-xl font-medium text-black'>{countOrder}</p>
              <p className='text-[#6C6C6C]'>{locale['user_profile.info.order']}</p>
            </div>
            <div className='px-5 text-center'>
              <p className='text-xl font-medium text-black'>{UserInfo?.user?.point}</p>
              <p className='text-[#6C6C6C]'>{locale['user_profile.info.point']}</p>
            </div>
          </div>
          <div className='flex justify-center'>
            <ButtonComponent
              className='bg-[#00B800] text-white flex justify-center items-center px-2 lg:px-4 py-2 lg:w-[215px] h-[50px] max-lg:text-xs'
              title={
                !UserInfo?.user?.line_user_id
                  ? locale['user_profile.info.work_with_line']
                  : locale['user_profile.info.line_linked']
              }
              prefixIcon={<IconLineApp className='max-lg:w-8' />}
              onClick={handleLineUser}
            />
          </div>
        </div>
      </div>

      <Modal
        open={openModal}
        onCancel={handleCancel}
        className='modalSuccess'
        closable={false}
        centered
        style={{
          maxWidth: isMobile ? '343px' : 'unset',
        }}
      >
        <div className='flex flex-col justify-center items-center p-6 bg-gray-light-5'>
          <IconNotifySuccess />
          <span className='mt-6 text-green text-[16px]'>プロフィールが更新されました。</span>
        </div>
      </Modal>
    </div>
  )
}

export default UserInformation

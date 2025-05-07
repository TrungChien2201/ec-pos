import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

// eslint-disable-next-line import/no-extraneous-dependencies
import { CloseOutlined } from '@ant-design/icons'
import { useMutation, useQuery } from '@tanstack/react-query'
import { Modal, Form, Input, Checkbox, Select } from 'antd'
import classNames from 'classnames'

import ButtonComponent from 'components/Button'
import ErrorMessage from 'components/ErrorMessage'

import { createAddress, editAddress, getListProvinces } from 'services/address'

const { Option } = Select

const ModalAddress = ({ isOpen, onCancel, onSuccess, defaultValue, isFirstAddress = false }) => {
  const locale = useSelector((state) => state.user.locale)
  const [form] = Form.useForm()
  const [isDefault, setIsDefault] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const errorAddress = errorMessage === 'この住所が既に登録されています。'

  const { data: provinces } = useQuery(['getListProvinces'], getListProvinces)

  const { mutate: mutateCreateAddress, isLoading: isLoadingCreate } = useMutation(createAddress, {
    onError: (error) => {
      if (error?.response?.data?.message) {
        setErrorMessage(error?.response?.data?.message)
      }
    },
  })
  const { mutate: mutateEditAddress, isLoading: isLoadingEdit } = useMutation(editAddress, {
    onError: (error) => {
      if (error?.response?.data?.message) {
        setErrorMessage(error?.response?.data?.message)
      }
    },
  })

  const onChangePhone = (e) => {
    const inputValue = e.target.value
    form.setFieldsValue({ phone: inputValue.slice(0, 11) })
  }

  const onChangePostCode = (e) => {
    const inputValue = e.target.value
    form.setFieldsValue({ post_code: inputValue.slice(0, 7) })
  }

  const onFinish = (formData) => {
    if (defaultValue) {
      mutateEditAddress(
        {
          id: defaultValue?.id,
          params: { ...formData, default: isFirstAddress ? true : isDefault },
        },
        {
          onSuccess: () => {
            onSuccess?.()
            onCancel()
          },
        },
      )
    } else {
      mutateCreateAddress(
        { ...formData, default: isFirstAddress ? true : isDefault },
        {
          onSuccess: () => {
            onSuccess?.()
            onCancel()
          },
        },
      )
    }
  }

  useEffect(() => {
    if (!defaultValue) {
      form.resetFields()
      setIsDefault(false)
      return
    }
    form.setFieldsValue({ ...defaultValue })
    setIsDefault(defaultValue?.default)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultValue, isOpen])

  useEffect(() => {
    setErrorMessage('')
  }, [isOpen])

  const onClose = () => {
    form.resetFields()
    onCancel()
  }

  return (
    <Modal
      open={isOpen}
      onCancel={onCancel}
      className='md:p-0 md:w-[568px] md:rounded-4xl xl:rounded-6xl modal--add-new-address'
      title={
        <div className='font-bold text-3xl text-primary px-6 py-4 pt-8'>
          {defaultValue
            ? locale['modal.address.edit_address']
            : locale['modal.address.add_new_address']}
        </div>
      }
      closeIcon={<CloseOutlined />}
    >
      <Form
        className='px-6 pb-8'
        form={form}
        layout='vertical'
        onFinish={onFinish}
        autoComplete='off'
      >
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-4'>
          <Form.Item
            name='first_name'
            label={locale['modal.address.first_name']}
            rules={[
              {
                required: true,
                message: locale['modal.address.first_name'] + locale['common.validation.required'],
              },
            ]}
            required
          >
            <Input placeholder={locale['modal.address.first_name_pld']} />
          </Form.Item>
          <Form.Item
            name='last_name'
            label={locale['modal.address.last_name']}
            rules={[
              {
                required: true,
                message: locale['modal.address.last_name'] + locale['common.validation.required'],
              },
            ]}
            required
          >
            <Input placeholder={locale['modal.address.last_name_pld']} />
          </Form.Item>
          <Form.Item name='company' label={locale['modal.address.company']}>
            <Input placeholder={locale['modal.address.company_pld']} />
          </Form.Item>
          <Form.Item
            name='phone'
            label={locale['modal.address.phone']}
            rules={[
              {
                required: true,
                message: locale['modal.address.phone'] + locale['common.validation.required'],
              },
            ]}
            required
          >
            <Input
              type='number'
              placeholder={locale['modal.address.phone_pld']}
              className='h-[48px]'
              onChange={onChangePhone}
            />
          </Form.Item>
          <Form.Item
            name='post_code'
            label={locale['modal.address.post_code']}
            rules={[
              {
                required: true,
                message: locale['modal.address.post_code'] + locale['common.validation.required'],
              },
            ]}
            required
          >
            <Input
              type='number'
              placeholder={locale['modal.address.post_code_pld']}
              className={classNames('h-[48px]', {
                'border-solid border-[#ff4d4f] border': errorAddress,
              })}
              onChange={onChangePostCode}
            />
          </Form.Item>
          <Form.Item
            name='prefectures'
            label={locale['modal.address.prefectures']}
            rules={[
              {
                required: true,
                message: locale['modal.address.prefectures'] + locale['common.validation.required'],
              },
            ]}
            required
          >
            <Select
              placeholder={locale['modal.address.prefectures_pld']}
              className={classNames('h-[48px]', {
                'border-solid border-[#ff4d4f] border rounded-[5px]': errorAddress,
              })}
            >
              {provinces?.map((el, index) => (
                <Option key={`${index + 1}`} value={el.value}>
                  {el.label}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            name='city'
            label={locale['modal.address.city']}
            rules={[
              {
                required: true,
                message: locale['modal.address.city'] + locale['common.validation.required'],
              },
            ]}
            required
          >
            <Input
              placeholder={locale['modal.address.city_pld']}
              className={classNames('h-[48px]', {
                'border-solid border-[#ff4d4f] border': errorAddress,
              })}
            />
          </Form.Item>
          <Form.Item
            name='address1'
            label={locale['modal.address.address1']}
            rules={[
              {
                required: true,
                message: locale['modal.address.address1'] + locale['common.validation.required'],
              },
            ]}
            required
          >
            <Input
              placeholder={locale['modal.address.address1_pld']}
              className={classNames('h-[48px]', {
                'border-solid border-[#ff4d4f] border': errorAddress,
              })}
            />
          </Form.Item>
        </div>

        {errorMessage?.length ? (
          <div className='flex justify-center -mt-8'>
            <ErrorMessage message={errorMessage} />
          </div>
        ) : null}

        <Form.Item>
          <Checkbox
            className='my-4'
            checked={isFirstAddress || isDefault}
            disabled={isDefault}
            defaultChecked={isFirstAddress}
            onChange={(e) => {
              setIsDefault(e.target.checked)
            }}
          >
            {locale['modal.address.default_address']}
          </Checkbox>
        </Form.Item>
        <Form.Item>
          <div className='flex gap-4'>
            <ButtonComponent
              onClick={onClose}
              className='border-[#9C8C6A]  w-[256px] bg-white text-black'
              title={locale['common.cancel']}
            />
            <ButtonComponent
              type='submit'
              isLoading={isLoadingCreate || isLoadingEdit}
              className='bg-[#9C8C6A] w-[256px] text-white'
              title={defaultValue ? locale['common.edit'] : locale['common.create']}
            />
          </div>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default ModalAddress

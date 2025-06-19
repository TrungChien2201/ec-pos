import { useState } from 'react'

import { useMutation } from '@tanstack/react-query'
import { Col, Form, Input, Row, Spin } from 'antd'
import { useTranslation } from 'react-i18next'

import ButtonCommon from 'components/common/button'
import { sendContact } from 'services/contact'

import { ModalStyled } from './styled'
const Contact = () => {
  const SentImg = 'images/sent.png'
  const { t } = useTranslation()
  const [form] = Form.useForm()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const { mutate: submitContact } = useMutation((formData) => sendContact(formData), {
    onSuccess: () => {
      setOpenModal(true)
      setIsSubmitting(false)
    },
    onError: (error) => {
      console.log({ error })
      setIsSubmitting(false)
    },
  })

  const onPhoneChange = (e) => {
    let inputValue = e.target.value
    inputValue = inputValue.replace(/[^0-9]/g, '')
    inputValue = inputValue.slice(0, 11)

    form.setFieldsValue({ phone: inputValue })
  }

  const checkEmptyOrSpace = (fieldName) => (_, value) => {
    if (!value || value.trim() === '') {
      return Promise.reject(new Error(t('common.validation.required', { name: t(fieldName) })))
    }
    return Promise.resolve()
  }

  const trimFields = (values) => {
    const trimmedValues = {}
    Object.keys(values).forEach((key) => {
      trimmedValues[key] = values[key]?.trim() || ''
    })
    return trimmedValues
  }

  const onSubmit = (values) => {
    if (isSubmitting) return

    const trimmedValues = trimFields(values)

    setIsSubmitting(true)
    submitContact(trimmedValues)
  }

  const onCloseModal = () => {
    form.resetFields()
    setOpenModal(false)
  }

  return (
    <Spin
      spinning={isSubmitting}
      size='large'
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 1001,
      }}
    >
      <Row justify='center' className='bg-white'>
        <Col xs={24} sm={12} md={12} lg={8} className='px-4 mt-6 mb-14 md:mt-20 md:mb-40'>
          <Row className='mb-3 lg:mb-8 text-xl lg:text-[38px] font-medium text-black'>
            {t('contact.title')}
          </Row>
          <Form form={form} onFinish={onSubmit} autoComplete='off'>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name='last_name'
                  rules={[{ validator: checkEmptyOrSpace('common.name') }]}
                >
                  <Input placeholder={t('common.last_name')} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name='first_name'
                  rules={[{ validator: checkEmptyOrSpace('common.name') }]}
                >
                  <Input placeholder={t('common.first_name')} />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name='phone'
                  rules={[
                    { validator: checkEmptyOrSpace('common.phone') },
                    {
                      pattern: /[\d]{10}|[\d]{11}$/,
                      message: t('common.validation.phone'),
                    },
                  ]}
                >
                  <Input placeholder={t('common.phone')} onChange={onPhoneChange} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name='email'
                  rules={[
                    { validator: checkEmptyOrSpace('common.email') },
                    {
                      type: 'email',
                      message: t('common.validation.email'),
                    },
                  ]}
                >
                  <Input placeholder={t('common.email')} />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item name='content' rules={[{ validator: checkEmptyOrSpace('contact.content') }]}>
              <Input.TextArea placeholder={t('contact.content')} rows={5} />
            </Form.Item>
            <Col xs={24} sm={12} md={12} lg={8}>
              <ButtonCommon
                classNames='px-8 bg-primary w-full rounded-lg h-[48px]'
                submit={() => form.submit()}
                size='large'
                type='primary'
                textButton={t('contact.submit_btn')}
              />
            </Col>
          </Form>
        </Col>
        <ModalStyled open={openModal} onCancel={onCloseModal} closeIcon={null} centered>
          <Row className='flex items-center flex-col p-4 bg-[#F5F5F5] rounded-[1rem]'>
            <img src={SentImg} className='w-28' />
            <Row className='font-medium text-2xl text-center leading-10 text-[#9C8C6A] whitespace-pre-wrap'>
              {t('contact.success_message')}
            </Row>
          </Row>
        </ModalStyled>
      </Row>
    </Spin>
  )
}

export default Contact

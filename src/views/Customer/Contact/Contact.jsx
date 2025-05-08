import { useState } from 'react'
import { useSelector } from 'react-redux'

import { useMutation } from '@tanstack/react-query'
import { Col, Form, Input, Row } from 'antd'
import { useTranslation } from 'react-i18next'

import ButtonCommon from 'components/common/button'
import { sendContact } from 'services/contact'

// Use string path instead of direct import
const SentImg = 'images/sent.png'

import { ModalStyled } from './styled'

const Contact = () => {
  const { t } = useTranslation()
  const locale = useSelector((state) => state.user.locale)
  const [form] = Form.useForm()
  const [openModal, setOpenModal] = useState(false)
  const { mutate: submitContact } = useMutation((formData) => sendContact(formData), {
    onSuccess: () => setOpenModal(true),
    onError: (error) => console.log({ error }),
  })

  const onPhoneChange = (e) => {
    let inputValue = e.target.value
    inputValue = inputValue.replace(/[^0-9]/g, '')
    inputValue = inputValue.slice(0, 11)

    form.setFieldsValue({ phone: inputValue })
  }

  const onSubmit = (values) => {
    submitContact(values)
  }

  const onCloseModal = () => {
    form.resetFields()
    setOpenModal(false)
  }

  return (
    <Row justify='center' className='bg-white'>
      <Col xs={24} sm={12} md={12} lg={8} className='px-4 mt-6 mb-14 md:mt-20 md:mb-40'>
        <Row className='mb-3 lg:mb-8 text-xl lg:text-[38px] font-medium text-black'>
          {locale['contact.title']}
        </Row>
        <Form form={form} onFinish={onSubmit} autoComplete='off'>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name='last_name'
                rules={[
                  {
                    required: true,
                    message: locale['common.name'] + ' ' + locale['common.validation.required'],
                  },
                ]}
              >
                <Input placeholder={locale['common.last_name']} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name='first_name'
                rules={[
                  {
                    required: true,
                    message:
                      locale['common.first_name'] + ' ' + locale['common.validation.required'],
                  },
                ]}
              >
                <Input placeholder={locale['common.first_name']} />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name='phone'
                rules={[
                  {
                    required: true,
                    message: locale['common.phone'] + ' ' + locale['common.validation.required'],
                  },
                  {
                    pattern: /[\d]{10}|[\d]{11}$/,
                    message: locale['common.validation.phone'],
                  },
                ]}
              >
                <Input placeholder={locale['common.phone']} onChange={onPhoneChange} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name='email'
                rules={[
                  {
                    required: true,
                    message: locale['common.email'] + ' ' + locale['common.validation.required'],
                  },
                  {
                    type: 'email',
                    message: locale['common.validation.email'],
                  },
                ]}
              >
                <Input placeholder={locale['common.email']} />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item
            name='content'
            rules={[
              {
                required: true,
                message: locale['common.content'] + ' ' + locale['common.validation.required'],
              },
            ]}
          >
            <Input.TextArea placeholder={locale['contact.content']} rows={5} />
          </Form.Item>
          <Col xs={24} sm={12} md={12} lg={8}>
            <ButtonCommon
              classNames='px-8 bg-primary w-full rounded-lg h-[48px]'
              submit={() => form.submit()}
              size='large'
              type='primary'
              textButton={locale['contact.submit_btn']}
            />
          </Col>
        </Form>
      </Col>
      <ModalStyled open={openModal} onCancel={onCloseModal} closeIcon={null} centered>
        <Row className='flex items-center flex-col p-4 bg-[#F5F5F5] rounded-[1rem]'>
          <img src={SentImg} className='w-28' />
          <Row className='font-medium text-2xl text-center leading-10 text-[#9C8C6A] whitespace-pre-wrap'>
            {locale['contact.success_message']}
          </Row>
        </Row>
      </ModalStyled>
    </Row>
  )
}

export default Contact

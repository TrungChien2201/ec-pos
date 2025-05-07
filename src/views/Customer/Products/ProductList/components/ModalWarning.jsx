import React, { useState } from 'react'

import { Modal } from 'antd'

import ButtonComponent from 'components/Button'

const ModalWarning = () => {
  const [visible, setVisible] = useState(false)
  return (
    <Modal width={565} open={visible} title='警告' onCancel={() => setVisible(false)}>
      <div className='mb-[20px] text-center p-[20px]'>
        <p className='text-[20px] leading-[28px] font-normal mb-[10px]'>
          このショップでは酒類を取り扱っています。 20歳未満の者の飲酒は法律で禁止されています。
        </p>
        <p className='text-[20px] leading-[28px] font-normal'>
          Drinking alcohol for those under 20 years of age is prohibited by law.
        </p>
      </div>
      <div className='flex items-center gap-[20px] px-[20px] pb-[20px]'>
        <ButtonComponent
          className='w-full'
          variant='ghost'
          title='NO いいえ'
          onClick={() => setVisible(false)}
        />
        <ButtonComponent className='w-full' variant='primary' title='YES はい' />
      </div>
    </Modal>
  )
}

export default ModalWarning

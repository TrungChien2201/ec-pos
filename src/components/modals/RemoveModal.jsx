// eslint-disable-next-line import/no-extraneous-dependencies
import { ExclamationCircleOutlined } from '@ant-design/icons'
import { Modal } from 'antd'

import ButtonComponent from 'components/Button'

const RemoveModal = ({ isOpen, onCancel, onSubmit }) => {
  return (
    <Modal open={isOpen} onCancel={onCancel}>
      <div className='flex flex-col gap-3 p-4'>
        <div className='flex justify-center items-center flex-col gap-2 bg-[#F5F5F5] rounded-2xl p-4'>
          <ExclamationCircleOutlined className='text-2xl text-red-700' />
          <div className='text-red-700 text-lg'>削除してもよろしいですか？</div>
        </div>
        <div className='grid grid-cols-2 gap-2'>
          <ButtonComponent
            onClick={onCancel}
            className='border-[#9C8C6A] bg-white text-black'
            title='いいえ'
          />
          <ButtonComponent onClick={onSubmit} className='bg-[#9C8C6A] text-white' title='はい' />
        </div>
      </div>
    </Modal>
  )
}

export default RemoveModal

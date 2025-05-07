import { Result } from 'antd'
import { MdPersonAddAlt1 } from 'react-icons/md'

import BaseAnimation from 'components/common/BaseAnimation/BaseAnimation'

import * as CONSTANT from 'common/constant'

const LineFriend = () => {
  return (
    <BaseAnimation>
      <div className='flex h-screen'>
        <div className='m-auto'>
          <Result
            status='403'
            title='友だち追加してください'
            subTitle={CONSTANT.ERROR_LINE_FRIEND_MSG}
          />
          <div className='flex justify-center'>
            <div className='p-4 rounded' style={{ backgroundColor: CONSTANT.PRIMARY_COLOR }}>
              <a
                rel='noopener noreferrer'
                className='text-white'
                href={process.env.NEXT_PUBLIC_LINE_ADD_FRIEND_URL}
              >
                <MdPersonAddAlt1 className='mr-2 text-xl align-middle' />
                <span className='align-middle'>友だち追加</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </BaseAnimation>
  )
}

export default LineFriend

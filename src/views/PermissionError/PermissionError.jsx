import { Result } from 'antd'

import BaseAnimation from 'components/common/BaseAnimation/BaseAnimation'

const PermissionError = () => {
  return (
    <BaseAnimation>
      <div className='flex h-screen'>
        <div className='m-auto text-center'>
          <Result
            status='403'
            title='401'
            subTitle={CONSTANT.ERROR_401_MSG || 'Sorry, you need to login to access this page.'}
          />
        </div>
      </div>
    </BaseAnimation>
  )
}

export default PermissionError

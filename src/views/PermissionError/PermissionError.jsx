import { Result } from 'antd'
import { useSelector } from 'react-redux'

import BaseAnimation from 'components/common/BaseAnimation/BaseAnimation'

const PermissionError = () => {
  const locale = useSelector((state) => state.user.locale)
  return (
    <BaseAnimation>
      <div className='flex h-screen'>
        <div className='m-auto'>
          <Result status='404' title='401' subTitle={locale['CONSTANT.ERROR_401_MSG']} />
        </div>
      </div>
    </BaseAnimation>
  )
}

export default PermissionError

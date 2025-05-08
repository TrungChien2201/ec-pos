import { Result } from 'antd'
import { useSelector } from 'react-redux'

import BaseAnimation from 'components/common/BaseAnimation/BaseAnimation'

const PermissionError = () => {
  const locale = useSelector((state) => state.user.locale)

  return (
    <BaseAnimation>
      <div className='flex h-screen'>
        <div className='m-auto text-center'>
          <Result
            status='403'
            title='401'
            subTitle={locale['CONSTANT.ERROR_401_MSG'] || 'Sorry, you need to login to access this page.'}
          />
        </div>
      </div>
    </BaseAnimation>
  )
}

export default PermissionError

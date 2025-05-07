import { Result } from 'antd'
import { useSelector } from 'react-redux'

import BaseAnimation from 'components/common/BaseAnimation/BaseAnimation'

const NotFound = () => {
  const locale = useSelector((state) => state.user.locale)
  return (
    <BaseAnimation>
      <div className='flex h-screen'>
        <div className='m-auto'>
          <Result status='404' title='404' subTitle={locale['CONSTANT.ERROR_404_MSG']} />
        </div>
      </div>
    </BaseAnimation>
  )
}

export default NotFound

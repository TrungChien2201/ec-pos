import { notification } from 'antd'
import { AiFillCloseCircle } from 'react-icons'

const openNotification = ({ type, message, description, time }) => {
  const renderSvg = () => {
    switch (type) {
      case 'error':
        return <div />
      case 'warning':
        return <div />
      case 'success':
        return <div />
      case 'info':
        return <div />
      default:
        return <div />
    }
  }
  notification[type]({
    message: (
      <div className='title-wrapper w-full flex items-center'>
        {renderSvg()}
        <div className='w-full flex items-center justify-between'>
          <h3>{message}</h3>
          <div className='flex items-center gap-[8px]'>
            <span>Option</span>
            <AiFillCloseCircle
              onClick={() => {
                notification.destroy()
              }}
            />
          </div>
        </div>
      </div>
    ),
    description: (
      <div>
        <h5>{description}</h5>
        <span>{time}</span>
      </div>
    ),
    duration: 100,
    placement: 'topRight',
    closeIcon: <div />,
  })
}

export default openNotification

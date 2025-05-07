import { Modal } from 'antd'
import ReactPlayer from 'react-player'

const VideoModal = (props) => {
  const { open, handleCancel, className, linkVideo } = props
  return (
    <Modal
      open={open}
      destroyOnClose
      onCancel={() => handleCancel()}
      width={520}
      className={className}
      centered
    >
      <div className='sm:h-[300px] h-[250px] pt-[20px]'>
        <ReactPlayer
          url={linkVideo}
          width={'100%'}
          height={'100%'}
          playing={true}
          controls={true}
          config={{
            file: {
              attributes: {
                crossOrigin: 'anonymous'
              }
            }
          }}
        />
      </div>
    </Modal>
  )
}

export default VideoModal

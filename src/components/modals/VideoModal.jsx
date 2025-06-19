import { Modal } from 'antd'
import { useState } from 'react'
import ReactPlayer from 'react-player'

const VideoModal = (props) => {
  const { open, handleCancel, className, linkVideo } = props
  const [isPlaying, setIsPlaying] = useState(true)
  return (
    <Modal
      open={open}
      destroyOnClose
      onCancel={() => {
        handleCancel()
        setIsPlaying(true)
      }}
      width={520}
      className={className}
      centered
    >
      <div className='sm:h-[300px] h-[250px] pt-[20px]'>
        <ReactPlayer
          url={linkVideo}
          width={'100%'}
          height={'100%'}
          playing={isPlaying}
          onPause={() => setIsPlaying(false)}
          onPlay={() => setIsPlaying(true)}
          controls={true}
          config={{
            file: {
              attributes: {
                crossOrigin: 'anonymous',
              },
            },
          }}
        />
      </div>
    </Modal>
  )
}

export default VideoModal

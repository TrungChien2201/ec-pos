import { Image, Upload } from 'antd'
import { MdCameraAlt } from 'react-icons/md'
import styled from 'styled-components'

import * as CONSTANT from 'common/constant'
import * as UTILITY from 'common/utility'

import TapAnimation from '../TapAnimation'

const StyledUploadDragger = styled(Upload.Dragger)`
  .ant-upload {
    width: 100%;
  }
`

const CustomDynamicUpload = (props) => {
  const { id, index, alt, height, uploadFiles, setUploadFiles } = props

  return (
    <StyledUploadDragger
      accept='.jpg, .jpeg, .png'
      maxCount={1}
      showUploadList={false}
      beforeUpload={() => {
        return false
      }}
      onChange={async (param) => {
        const file = await UTILITY.RESIZE_FILE(param?.file, 'file')
        const preview = await UTILITY.RESIZE_FILE(param?.file, 'base64')

        if (uploadFiles[index]) {
          setUploadFiles(
            uploadFiles.map((ci, i) =>
              i === index
                ? {
                    file,
                    preview,
                  }
                : ci,
            ),
          )
        } else {
          const duplicateArray = [...uploadFiles]
          duplicateArray[index] = {
            file,
            preview,
          }

          setUploadFiles(duplicateArray)
        }
      }}
    >
      <TapAnimation>
        {uploadFiles[index] && (uploadFiles[index]?.preview || uploadFiles[index]?.picUrl) ? (
          <div className='flex justify-center'>
            <Image
              preview={false}
              src={uploadFiles[index]?.preview || `${uploadFiles[index]?.picUrl}`}
              alt={alt}
              fallback={CONSTANT.NO_IMAGE}
              style={{ maxHeight: height }}
              className='max-w-full cursor-pointer object-contain'
            />
          </div>
        ) : (
          <div
            className='flex justify-center items-center'
            style={{
              height,
              maxHeight: height,
            }}
          >
            <p className='text-center font-bold'>
              <MdCameraAlt className='anticon text-3xl' />
            </p>
          </div>
        )}
      </TapAnimation>
    </StyledUploadDragger>
  )
}

export default CustomDynamicUpload

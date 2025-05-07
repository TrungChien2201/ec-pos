import { Image, Upload } from 'antd'
import ImgCrop from 'antd-img-crop'
import { MdCameraAlt } from 'react-icons/md'
import { styled } from 'styled-components'

import * as CONSTANT from 'common/constant'
import * as UTILITY from 'common/utility'

const CustomUpload = styled(Upload)`
  .ant-upload {
    width: 100%;
  }
`

const MultipleCropUpload = (props) => {
  const { id, onChange, aspect, modalTitle, uploadFiles, setUploadFiles, height, index } = props

  return (
    <span id={id}>
      <ImgCrop
        grid
        zoom={false}
        rotate={false}
        aspect={aspect}
        quality={0.8}
        minZoom={1}
        maxZoom={1}
        modalTitle={modalTitle}
        modalOk='確定'
        modalCancel='キャンセル'
      >
        <CustomUpload
          accept='.jpg, .jpeg, .png'
          maxCount={1}
          showUploadList={false}
          beforeUpload={async (file) => {
            const resizedFile = await UTILITY.RESIZE_FILE(file, 'file')
            const resizedPreview = await UTILITY.RESIZE_FILE(file, 'base64')

            if (uploadFiles[index]) {
              setUploadFiles(
                uploadFiles.map((ki, i) =>
                  i === index
                    ? {
                        file: resizedFile,
                        preview: resizedPreview,
                        index,
                      }
                    : ki,
                ),
              )
            } else {
              const duplicateArray = [...uploadFiles]

              duplicateArray[index] = {
                file: resizedFile,
                preview: resizedPreview,
                index,
              }

              setUploadFiles(duplicateArray)
            }

            return false
          }}
          onChange={(param) => {
            onChange(param?.file)
          }}
        >
          {uploadFiles[index] && uploadFiles[index]?.preview ? (
            <div className='flex justify-center'>
              <Image
                preview={false}
                src={uploadFiles[index].preview}
                alt={modalTitle}
                fallback={CONSTANT.NO_IMAGE}
                style={{ maxHeight: height }}
                className='max-w-full cursor-pointer object-contain'
              />
            </div>
          ) : (
            <div
              className='flex justify-center items-center bg-white border border-gray-200 rounded w-full cursor-pointer'
              style={{
                height,
                maxHeight: height,
              }}
            >
              <p className='text-center text-2xl font-bold'>
                <MdCameraAlt className='text-2xl mr-2' />
              </p>
            </div>
          )}
        </CustomUpload>
      </ImgCrop>
    </span>
  )
}

export default MultipleCropUpload

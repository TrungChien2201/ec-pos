import { Modal } from 'antd'
import { styled } from 'styled-components'

export const ModalStyled = styled(Modal)`
  .ant-modal-content {
    min-height: unset;
    border-radius: 1rem !important;
    width: 100%;
    padding: 1.5rem !important;
  }
`

export default {
  ModalStyled,
}

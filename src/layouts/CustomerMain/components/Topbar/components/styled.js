import { Button, Input } from 'antd'
import { styled } from 'styled-components'

export const ButtonSearch = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 40px !important;
  height: 40px;
  border: none;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.15) !important;
  padding: 0;
`

export const InputStyled = styled(Input)`
  border-radius: 33px !important;
  background: rgba(0, 0, 0, 0.15) !important;
  background: ${({ variant }) =>
    variant === 'dark' ? 'rgba(0, 0, 0, 0.15)' : 'rgba(255, 255, 255, 0.25)'} !important;
  padding: 8px 12px 8px 12px !important;
  outline: none !important;
  width: 395px;
  height: 44px;

  .ant-input {
    background: transparent !important;
    color: white !important;
    font-size: 1rem !important;
    line-height: 1;
    height: unset !important;
    border: none !important;
    padding-left: 6px !important;
  }
`

export default { InputStyled }

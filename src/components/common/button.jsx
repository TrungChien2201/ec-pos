import { Button } from 'antd'

import TapAnimation from 'components/common/TapAnimation'

const ButtonCommon = (props) => {
  const { submit, textButton, classNames, type, size, disabled = false } = props
  return (
    <TapAnimation>
      <Button disabled={disabled} type={type} size={size} onClick={submit} className={classNames}>
        {textButton}
      </Button>
    </TapAnimation>
  )
}

export default ButtonCommon

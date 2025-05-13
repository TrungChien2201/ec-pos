import React from 'react'

import { Button } from 'antd'
import cx from 'classnames'
import './styles.scss'

function ButtonComponent({
  variant,
  prefixIcon,
  afterIcon,
  title,
  type,
  className,
  loading,
  disabled,
  onClick,
}) {
  return (
    <Button
      htmlType={type}
      loading={loading}
      disabled={disabled}
      className={cx(
        `button button--${variant} min-h-[40px] text-[14px] lg:text-[16px] lg:min-h-[44px]`,
        [className],
      )}
      onClick={onClick}
    >
      {prefixIcon}
      <span>{title}</span>
      {afterIcon}
    </Button>
  )
}

export default ButtonComponent

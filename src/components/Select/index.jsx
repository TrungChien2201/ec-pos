import { Select } from 'antd'
import cx from 'classnames'

const { Option } = Select

const SelectComponent = ({ options = [], className, field, onChange, ref, ...rest }) => {
  const handleOnChange = (e) => {
    field?.onChange(e)
    if (onChange) onChange(e)
  }

  return (
    <Select
      {...field}
      ref={ref}
      className={cx('select-component', className)}
      onChange={handleOnChange}
      {...rest}
    >
      {options?.map((option, index) => (
        <Option key={index} value={option.value} disabled={option?.disabled}>
          {option.label}
        </Option>
      ))}
    </Select>
  )
}

export default SelectComponent

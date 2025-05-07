import { Input } from 'antd'

const NumericInput = (props) => {
  const onChange = (e) => {
    const { value } = e.target
    const reg = /^-?\d*(\.\d*)?$/

    if ((!Number.isNaN(value) && reg.test(value)) || value === '' || value === '-') {
      // eslint-disable-next-line react/destructuring-assignment
      props.onChange(value)
    }
  }

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Input {...props} onChange={onChange} onPressEnter={(e) => e.preventDefault()} />
}

export default NumericInput

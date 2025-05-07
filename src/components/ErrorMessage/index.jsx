import IconWarning from 'resourse/svg/IconWarning'

const ErrorMessage = ({ message }) => {
  return (
    <div className='p-2.5 bg-[#FFE5EA] mt-8 rounded h-[53px] flex items-center justify-center gap-x-2'>
      <IconWarning />
      <span className='text-body-14-22 text-light-2 font-medium'>{message}</span>
    </div>
  )
}

export default ErrorMessage

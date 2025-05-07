import { useState } from 'react'

import { Modal } from 'antd'

import ForgotPasswordStepOne from 'views/Client/ForgotPassword/ForgotPasswordStepOne'
import ForgotPasswordStepThree from 'views/Client/ForgotPassword/ForgotPasswordStepThree'
import ForgotPasswordStepTwo from 'views/Client/ForgotPassword/ForgotPasswordStepTwo'
import SuccessResetPassword from 'views/Client/ForgotPassword/SuccessResetPassword'
import Login from 'views/Client/Login'
import Register from 'views/Client/Register'

const AccountModal = (props) => {
  const { open, handleCancel, className } = props
  const [loginView, setLoginView] = useState(1)
  const [value, setValue] = useState('')
  const handleNext = (currVal, step) => {
    setValue(currVal)
    setLoginView(step)
  }
  return (
    <Modal
      open={open}
      destroyOnClose
      onCancel={() => handleCancel()}
      width={1058}
      className={className}
    >
      {loginView === 1 ? (
        <Login changeView={(step) => setLoginView(step)} handleClose={handleCancel} />
      ) : null}
      {loginView === 2 ? (
        <Register changeView={() => setLoginView(1)} handleClose={handleCancel} />
      ) : null}
      {loginView === 3 ? (
        <ForgotPasswordStepOne
          changeView={(step) => setLoginView(step)}
          onNext={(emailUser, step) => handleNext(emailUser, step)}
          handleClose={handleCancel}
        />
      ) : null}
      {loginView === 4 ? (
        <ForgotPasswordStepTwo
          changeView={(step) => setLoginView(step)}
          value={value}
          onNext={(hashId, step) => handleNext(hashId, step)}
          handleClose={handleCancel}
        />
      ) : null}
      {loginView === 5 ? (
        <ForgotPasswordStepThree
          value={value}
          changeView={(step) => setLoginView(step)}
          handleClose={handleCancel}
        />
      ) : null}
      {loginView === 6 ? (
        <SuccessResetPassword
          changeView={(step) => setLoginView(step)}
          handleClose={handleCancel}
        />
      ) : null}
    </Modal>
  )
}

export default AccountModal

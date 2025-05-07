import moment from 'moment'

/* eslint-disable import/prefer-default-export */
export const hideEmail = (email) => {
  const atIndex = email.indexOf('@')
  if (atIndex === -1 || atIndex === 0 || atIndex === email.length - 1) {
    return email
  }
  const prefix = email.slice(3, atIndex)
  const hiddenPart = '*'.repeat(Math.max(prefix.length - 3, 0))
  const hiddenEmail = email.slice(0, 3) + hiddenPart + email.slice(atIndex)
  return hiddenEmail
}

export const formatDate = (date, format = 'YYYY/MM/DD') => {
  return moment(date).format(format)
}

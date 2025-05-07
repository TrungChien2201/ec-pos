import liff from '@line/liff'

import authConfig from 'common/endpoints/auth'
import { httpClient } from 'utils/api.util'

export const getToken = () => {
  return localStorage.getItem(authConfig.storageTokenKeyName)
}

export const setToken = (value) => {
  return localStorage.setItem(authConfig.storageTokenKeyName, value)
}
export const getLiffToken = () => {
  return localStorage.getItem(authConfig.storageLiffTokenKeyName)
}

export const setLiffToken = (value) => {
  return localStorage.setItem(authConfig.storageLiffTokenKeyName, value)
}
export const removeToken = () => {
  localStorage.removeItem(authConfig.storageTokenKeyName)
  localStorage.removeItem(authConfig.storageLiffTokenKeyName)
  // liff?.logout()
}

export const getMe = () => {
  return httpClient.get(authConfig.getMeEndpoint)
}

export const loginByLiffToken = (token) => {
  return httpClient.get(authConfig.loginByLiffTokenEndpoint, {
    headers: {
      'access-token': token,
    },
  })
}

export const login = (payload) => {
  return httpClient.post(authConfig.loginEndpoint, payload)
}
export const logout = () => {
  removeToken()
}

export const register = (payload) => {
  return httpClient.post(authConfig.registerEndpoint, payload)
}

export const forgotPassword = (payload) => {
  return httpClient.post(authConfig.forgotPasswordEndpoint, payload)
}

export const verifyOTP = (payload) => {
  return httpClient.post(authConfig.verifyOTPEndpoint, payload)
}

export const resetPassword = (payload) => {
  return httpClient.post(authConfig.resetPasswordEndpoint, payload)
}

export const refreshToken = (payload) => {
  return httpClient.post(authConfig.refreshTokenEndpoint, payload)
}

export const checkLineAccess = (token) => {
  return httpClient.get(authConfig.syncLineAccount, {
    headers: {
      'access-token': token,
    },
  })
}

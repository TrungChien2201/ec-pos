/* eslint-disable no-underscore-dangle */
import axios from 'axios'

import { getToken, getLiffToken, setLiffToken, setToken } from 'services/auth'

export const httpClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_APP_BE_URL,
  timeout: 5 * 60 * 1000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
})

const handleRequestIntercept = (config) => {
  const token = getToken()
  const liffToken = getLiffToken()
  const headerConfig = {
    ...config.headers,
    Authorization: `Bearer ${token}`,
  }
  if (liffToken?.length) {
    headerConfig['access-token'] = liffToken
  }
  return {
    ...config,
    headers: headerConfig,
  }
}

const handleResponseError = (error) => {
  if (error.response && error.response.status === 401) {
    setToken('')
    setLiffToken('')
  }
  return Promise.reject(error)
}

const handleRequestError = (error) => {
  return Promise.reject(error)
}

httpClient.interceptors.request.use(handleRequestIntercept, handleRequestError)

httpClient.interceptors.response.use(function (response) {
  return response.data
}, handleResponseError)

export const apiUtils = {
  get: (url, query) => {
    return httpClient.get(url, {
      params: {
        ...query,
      },
    })
  },
  post: (url, data) => {
    return httpClient.post(url, data)
  },
  patch: (url, data) => {
    return httpClient.patch(url, data)
  },
  delete: (url) => {
    return httpClient.delete(url)
  },
}

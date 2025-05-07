import axios from 'axios'

export const SITE_URL = process.env.NEXT_PUBLIC_API_URL

export const BASE_URL = `${SITE_URL}/api`
export const UPLOADS_URL = `${SITE_URL}/uploads`

/* BACKEND API URLS */
export const API_ADMIN_AUTH = `${BASE_URL}/auth`
export const API_ADMIN_CHECK_SESSION = `${API_ADMIN_AUTH}/sess`
export const API_ADMIN_LOGIN = `${API_ADMIN_AUTH}/login`
export const API_ADMIN_LOGOUT = `${API_ADMIN_AUTH}/logout`

export const API_CLIENT_PERSONAL = `${BASE_URL}/l/auth`

// IMAGE_PATH
export const SETTINGS_UPLOADS_URL = `${SITE_URL}/`

/* QUERY KEY */
export const QUERY_KEY_LOGO = 'LOGO'
export const QUERY_KEY_FAVICON = 'FAVICON'
export const QUERY_KEY_PUBLIC_SETTINGS = 'PUBLIC_SETTINGS'

export const QUERY_KEY_ADMIN_PUBLIC_SETTINGS = 'ADMIN_PUBLIC_SETTINGS'
export const QUERY_KEY_ADMIN_CHECK_SESSION = 'ADMIN_CHECK_SESSION'
export const QUERY_KEY_LIFF_APP = 'LIFF_APP'
export const QUERY_KEY_ADMIN_AUTH = 'ADMIN_AUTH'
export const QUERY_KEY_ADMIN_SETTINGS = 'ADMIN_SETTINGS'

export const QUERY_KEY_CLIENT_PERSONAL_INFO = 'CLIENT_PERSONAL_INFO'

/* AXIOS CONFIG */
const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: BASE_URL,
  timeout: 10000,
  // headers: {
  //   common: {
  //     'skip-authen': true,
  //   },
  // },
})

/* BACKEND API REQUESTS */
export async function ADMIN_LOGIN(data) {
  return await axiosInstance.post(API_ADMIN_LOGIN, data)
}

export async function ADMIN_LOGOUT() {
  return await axiosInstance.post(API_ADMIN_LOGOUT)
}

export async function ADMIN_CHECK_SESSION() {
  return await axiosInstance.get(API_ADMIN_CHECK_SESSION)
  // return 200
}

export async function getSettings() {
  return await axiosInstance.get('/api/ecsite/setting')
  // return 200
}

export async function ADMIN_GET_AUTH() {
  return { data: { name: '管理者', role: 'admin' } }
}

export async function CLIENT_GET_PERSONAL_INFO(accessToken) {
  const headerData = { headers: { 'access-token': accessToken } }

  return await axiosInstance.get(API_CLIENT_PERSONAL, headerData)
}

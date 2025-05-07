import profileConfig from 'common/endpoints/profile'
import { getToken } from 'services/auth'
import { httpClient } from 'utils/api.util'

// eslint-disable-next-line import/prefer-default-export
export const editProfile = async (params) => {
  const token = getToken()
  const customHeaders = {
    'Content-Type': 'multipart/form-data',
  }
  const formdata = new FormData()
  Object.keys(params).forEach((key) => {
    formdata.append(key, params[key])
  })

  return await httpClient.put(`${profileConfig.editProfile}`, formdata, {
    headers: {
      ...customHeaders,
      Authorization: `Bearer ${token}`,
    },
  })
}

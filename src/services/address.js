import addressConfig from 'common/endpoints/address'
import { httpClient } from 'utils/api.util'

// eslint-disable-next-line import/prefer-default-export
export const getListAddress = async () => {
  const { data } = await httpClient.get(addressConfig.address)
  return data
}

export const getListProvinces = async () => {
  const { provinces } = await httpClient.get(addressConfig.provinces)
  return provinces
}

export const removeAddress = async (id) => {
  return await httpClient.delete(`${addressConfig.address}/${id}`)
}

export const createAddress = async (params) => {
  return await httpClient.post(addressConfig.address, {
    ...params,
  })
}

export const editAddress = async ({ id, params }) => {
  return await httpClient.put(`${addressConfig.address}/${id}`, {
    ...params,
  })
}

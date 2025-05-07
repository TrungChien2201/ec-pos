/* eslint-disable import/prefer-default-export */
import orderConfig from 'common/endpoints/order'
import { getToken } from 'services/auth'
import { httpClient } from 'utils/api.util'

export const getOrders = async (key, nextPage = 1) => {
  const token = getToken()
  const { data } = await httpClient.get(orderConfig.getOrders, {
    params: {
      page: nextPage,
      per_page: 30,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return data
}

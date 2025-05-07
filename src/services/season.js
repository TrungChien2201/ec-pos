import { httpClient } from 'utils/api.util'

// eslint-disable-next-line import/prefer-default-export
export const getSeason = async () => {
  const response = await httpClient.get('/ecsite/seasons')
  return response
}

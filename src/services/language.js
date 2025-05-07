import appConfig from 'common/endpoints/language'
import { httpClient } from 'utils/api.util'

export const getKeysLanguage = () => {
  return httpClient.get(appConfig.keyLanguage)
}

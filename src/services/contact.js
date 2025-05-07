/* eslint-disable import/prefer-default-export */
import CONTACT_ENDPOINT from 'common/endpoints/contact'
import { httpClient } from 'utils/api.util'

export const sendContact = async (payload) => httpClient.post(CONTACT_ENDPOINT.sendContact, payload)

import axios from 'axios'
import { api } from 'src/constants/api/api-constants'
import 'src/utils/interceptors/handle_api/request'
import 'src/utils/interceptors/handle_api/response'

export const logIn = (code: string) => {
  const url = api.LOGIN_URL
  return axios.post(
    url,
    {
      code,
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  )
}

export const logOut = (accessToken: string) => {
  const url = api.LOGOUT_URL
  return axios.post(
    url,
    {
      // eslint-disable-next-line camelcase
      access_token: accessToken,
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  )
}

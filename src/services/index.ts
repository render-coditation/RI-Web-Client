import axios from 'axios'
import { api } from 'src/constants/api/api-constants'
import 'src/utils/interceptors/handle_api/request'
import 'src/utils/interceptors/handle_api/response'
import { loginPayload } from 'src/interfaces/Auth'

export const logIn = (code: loginPayload['code']) => {
  const url = api.LOGIN_ENDPOINT
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

export const logOut = () => {
  const url = api.LOGOUT_ENDPOINT
  return axios.get(url, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

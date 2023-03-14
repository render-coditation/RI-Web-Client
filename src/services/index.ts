import axios from 'axios'
import { apiConstants } from 'src/constants/api/api-constants'

const login = (authCode: string) => {
  const url = apiConstants.LOGIN_URL
  return axios.post(
    url,
    {
      authCode,
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  )
}

const logout = (email: string) => {
  const url = apiConstants.LOGOUT_URL
  return axios.post(
    url,
    {
      email,
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  )
}

const Service = {
  login,
  logout,
}

export default Service

import axios from 'axios'
import { authConstants } from 'src/constants/auth/auth-constants'
import { getValueFromStorage } from 'src/utils/storage.helper'

axios.interceptors.request.use((request) => {
  const token = `${getValueFromStorage(authConstants.LOCALSTORAGE_USER_TOKEN_KEY)}`
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  request.headers!.Authorization = `Bearer ${token}`
  return request
})

import axios from 'axios'
import { authConstants } from 'src/constants/auth/auth-constants'
import { getValueFromStorage } from 'src/utils/storage/storage.helper'

axios.interceptors.request.use((request) => {
  const token = `${getValueFromStorage(authConstants.ACCESS_KEY)}`
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  request.headers!.Authorization = `Bearer ${token}`
  return request
})

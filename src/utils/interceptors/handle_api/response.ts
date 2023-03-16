import axios from 'axios'
import { authConstants } from 'src/constants/auth/auth-constants'
import store from 'src/redux/app/store'
import { clearToken, resetLoggedInUser } from 'src/redux/features/auth/auth-thunk'
import { removeValueFromStorage } from 'src/utils/storage/storage.helper'

axios.interceptors.response.use(
  (response) => response.data,
  (err) => {
    if (err?.response.status === 403 || err?.response.statusText === 'Forbidden') {
      removeValueFromStorage(authConstants.ACCESS_KEY)
      store.dispatch(clearToken())
      store.dispatch(resetLoggedInUser())
      window.location.href = '...'
    }
    return Promise.reject(err)
  },
)

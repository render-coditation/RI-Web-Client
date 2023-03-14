import axios from 'axios'
import { authConstants } from 'src/constants/auth/auth-constants'
import { store } from 'src/redux/app/store'
import { clearToken, resetLoggedInUser } from 'src/redux/features/user'
import { removeValueFromStorage } from 'src/utils/storage.helper'

axios.interceptors.response.use(
  (response) => response.data,
  (err) => {
    if (err?.response.status === 403 || err?.response.statusText === 'Forbidden') {
      removeValueFromStorage(authConstants.LOCALSTORAGE_USER_TOKEN_KEY)
      store.dispatch(clearToken())
      store.dispatch(resetLoggedInUser())
      window.location.href = '...'
    }
    return Promise.reject(err)
  },
)

import { AnyAction, createAsyncThunk } from '@reduxjs/toolkit'
import { updateIsLoggedIn, updateCurrentUserData } from 'src/redux/features/auth'
import { logIn, logOut } from 'src/services'
import { ThunkAction } from 'redux-thunk'
import { RootState } from 'src/redux/app/store'
import { loginPayload, logOutPayload } from 'src/interfaces/Auth'
import { storeValueInStorage, removeValueFromStorage } from 'src/utils/storage/storage.helper'
import { authConstants } from 'src/constants/auth/auth-constants'

// type ThunkType = ThunkAction<void, RootState, unknown, AnyAction>

export const login = createAsyncThunk('auth/login', async (code: loginPayload['code']) => {
  try {
    const response: any = await logIn(code)
    console.log('login response', response)
    storeValueInStorage(authConstants.ACCESS_KEY, `${response.json.access_token}`)
    return response.json
  } catch (error: any) {
    console.log('error on login', error)
    throw error
  }
})

export const logout = createAsyncThunk(
  'auth/logout',
  async (accessToken: logOutPayload['accessToken']) => {
    try {
      const response: any = await logOut(accessToken)
      console.log('logout response', response)
      return response
    } catch (error: any) {
      console.log('error on logout', error)
      throw error
    }
  },
)

// export const clearToken = (): ThunkType => async (dispatch, _getState) => {
//   // try {
//   //   removeValueFromStorage(authConstants.ACCESS_KEY)
//   // } catch (error: any) {
//   //   console.log('error on clearToken', error)
//   //   return error
//   // }
// }

// export const resetLoggedInUser = (): ThunkType => async (dispatch, _getState) => {
//   // try {
//   //   dispatch(updateCurrentUserData({}))
//   //   dispatch(updateIsLoggedIn(false))
//   // } catch (error: any) {
//   //   console.log('error on resetLoggedInUSer', error)
//   //   return error
//   // }
// }

import { updateIsLoggedIn, updateCurrentUserData } from './auth-slice'
import { logIn, logOut } from 'src/services'
import { ThunkAction } from 'redux-thunk'
import { AnyAction } from '@reduxjs/toolkit'
import { RootState } from 'src/redux/app/store'
import { loginPayload, logOutPayload } from 'src/interfaces/Auth'
import { currentUserData } from './auth-initial-state'
import { storeValueInStorage, removeValueFromStorage } from 'src/utils/storage/storage.helper'
import { authConstants } from 'src/constants/auth/auth-constants'

type ThunkType = ThunkAction<void, RootState, unknown, AnyAction>

export const login =
  (code: loginPayload['code']): ThunkType =>
  async (dispatch, _getState) => {
    try {
      const response: any = await logIn(code)
      console.log('login response', response)
      dispatch(
        updateCurrentUserData({
          username: response.json.user,
          role: response.json.role,
          email: response.json.email,
          picture: response.json.picture,
          accessToken: response.json.access_token,
        }),
      )
      dispatch(updateIsLoggedIn(true))
      storeValueInStorage(authConstants.ACCESS_KEY, `${currentUserData.accessToken}`)

      return response
    } catch (error: any) {
      console.log('error on login', error)
      return error
    }
  }

export const clearToken = (): ThunkType => async (dispatch, _getState) => {
  try {
    removeValueFromStorage(authConstants.ACCESS_KEY)
  } catch (error: any) {
    console.log('error on clearToken', error)
    return error
  }
}

export const resetLoggedInUser = (): ThunkType => async (dispatch, _getState) => {
  try {
    dispatch(updateCurrentUserData({}))
    dispatch(updateIsLoggedIn(false))
  } catch (error: any) {
    console.log('error on resetLoggedInUSer', error)
    return error
  }
}

export const logout =
  (accessToken: logOutPayload['accessToken']): ThunkType =>
  async (dispatch, _getState) => {
    try {
      const response: any = await logOut(accessToken)
      console.log('logout response', response)
      dispatch(clearToken())
      dispatch(resetLoggedInUser())
      return response
    } catch (error: any) {
      console.log('error on logout', error)
      return error
    }
  }

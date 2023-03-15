import { updateIsLoggedIn, updateCurrentUserData } from './auth-slice'
import { logIn, logOut } from 'src/services'
import { ThunkAction } from 'redux-thunk'
import { AnyAction } from '@reduxjs/toolkit'
import { RootState } from 'src/redux/app/store'

type ThunkType = ThunkAction<void, RootState, unknown, AnyAction>

export const login =
  (code: string): ThunkType =>
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
      // set access_token in localstorage
      return response
    } catch (error: any) {
      console.log('error on login', error)
      return error
    }
  }

export const clearToken = (): ThunkType => async (dispatch, _getState) => {
  try {
    // clearToken steps
  } catch (error: any) {
    console.log('error on clearToken', error)
    return error
  }
}

export const resetLoggedInUser = (): ThunkType => async (dispatch, _getState) => {
  try {
    // resetLoggedInUser in redux
  } catch (error: any) {
    console.log('error on resetLoggedInUSer', error)
    return error
  }
}

export const logout =
  (accessToken: string): ThunkType =>
  async (dispatch, _getState) => {
    try {
      const response: any = await logOut(accessToken)
      console.log('logout response', response)
      dispatch(updateIsLoggedIn(false))
      // dispatch(clearToken())
      // dispatch(resetLoggedInUser())
      // remove access_token in localstorage
      return response
    } catch (error: any) {
      console.log('error on logout', error)
      return error
    }
  }

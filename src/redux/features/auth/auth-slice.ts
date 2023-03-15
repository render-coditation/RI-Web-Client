import { createSlice } from '@reduxjs/toolkit'
import { currentUserData } from './auth-initial-state'

const initialState = {
  currentUserData: currentUserData,
  isLoggedIn: currentUserData.accessToken ? true : false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload
    },
    updateCurrentUserData: (state, action) => {
      state.currentUserData = action.payload
    },
  },
})

export const { updateIsLoggedIn, updateCurrentUserData } = authSlice.actions
export default authSlice.reducer

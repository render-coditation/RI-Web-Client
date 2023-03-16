import { createSlice } from '@reduxjs/toolkit'
import { currentUserData } from 'src/redux/features/auth/auth-initial-state'
import { login, logout } from 'src/redux/features/auth//auth-thunk'

interface AuthState {
  currentUserData: typeof currentUserData
  isLoggedIn: boolean
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: any
  isLoading: boolean
}

const initialState: AuthState = {
  currentUserData: currentUserData,
  isLoggedIn: currentUserData.accessToken ? true : false,
  status: 'idle',
  error: null,
  isLoading: false,
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
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.isLoading = true
      state.error = null
    })
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false
      state.error = null
      state.currentUserData = {
        username: action.payload.user,
        role: action.payload.role,
        email: action.payload.email,
        picture: action.payload.picture,
        accessToken: action.payload.access_token,
      }
      state.isLoggedIn = true
    })
    builder.addCase(login.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error.message
    })
    builder.addCase(logout.pending, (state) => {
      state.isLoading = true
      state.error = null
    })
    builder.addCase(logout.fulfilled, (state) => {
      state.isLoading = false
      state.error = null
      state.currentUserData = {
        username: null,
        role: null,
        email: null,
        picture: null,
        accessToken: null,
      }
      state.isLoggedIn = false
    })
    builder.addCase(logout.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error.message
    })
  },
})

export const { updateIsLoggedIn, updateCurrentUserData } = authSlice.actions
export default authSlice.reducer

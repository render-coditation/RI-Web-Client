import { configureStore, AnyAction } from '@reduxjs/toolkit'
import { ThunkAction } from 'redux-thunk'
import authSlice from 'src/redux/features/auth/auth-slice'

const store = configureStore({
  reducer: {
    auth: authSlice,
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type ThunkType = ThunkAction<void, RootState, unknown, AnyAction>

import { authSlice } from 'src/redux/features/auth/auth-slice'

export default authSlice.reducer
export const { updateIsLoggedIn, updateCurrentUserData } = authSlice.actions

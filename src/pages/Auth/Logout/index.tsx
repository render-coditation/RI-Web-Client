import { googleLogout } from '@react-oauth/google'
import * as S from './style'
import { FaGoogle } from 'react-icons/fa'
import { useAppSelector, useAppDispatch } from 'src/hooks/thunkAppDispatch'
import { logout } from 'src/redux/features/auth/auth-thunk'
import { useNavigate } from 'react-router-dom'

const LogOut = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const { currentUserData } = useAppSelector((state) => state.auth)
  const accessToken = currentUserData.accessToken ? currentUserData.accessToken : ''

  const handleLogout = () => {
    // loading true
    const response = googleLogout()
    console.log('logout response', response)
    dispatch(logout(accessToken))
    // loading false
    navigate('/')
    // call api thunk here
  }

  return (
    <S.GoogleLoginContainer>
      <img src={currentUserData.picture ? currentUserData.picture : ''} alt='logo' width={160} />
      <h4>{currentUserData.username}</h4>
      <h4>{currentUserData.email}</h4>
      <S.GoogleLogOut onClick={handleLogout}>
        <FaGoogle className='google-icon' />
        Sign Out
      </S.GoogleLogOut>
    </S.GoogleLoginContainer>
  )
}

export default LogOut

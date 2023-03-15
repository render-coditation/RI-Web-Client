import { googleLogout } from '@react-oauth/google'
import * as S from './style'
import { FaGoogle } from 'react-icons/fa'

// import Logo from '../../../public/logo192.png'

const LogOut = () => {
  const handleLogout = () => {
    const response = googleLogout()
    console.log('logout response', response)
    // call api thunk here
  }

  return (
    <S.GoogleLoginContainer>
      {/* <img src={Logo} alt='logo' width={160} /> */}
      <S.GoogleLogOut onClick={handleLogout}>
        <FaGoogle className='google-icon' />
        Sign Out
      </S.GoogleLogOut>
    </S.GoogleLoginContainer>
  )
}

export default LogOut

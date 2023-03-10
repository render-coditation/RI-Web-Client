import { GoogleLogin, googleLogout } from '@react-oauth/google'
import * as S from './style'
import { FaGoogle } from 'react-icons/fa'

// import Logo from '../../../public/logo192.png'

const Login = () => {
  const handleLogout = () => {
    const response = googleLogout()
    console.log('logout response', response)
  }

  return (
    <S.GoogleLoginContainer>
      {/* <img src={Logo} alt='logo' width={160} /> */}
      <GoogleLogin
        shape='rectangular'
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse)
        }}
        onError={() => {
          console.log('Login Failed')
        }}
      />
      <S.GoogleLogOut onClick={handleLogout}>
        <FaGoogle className='google-icon' />
        Sign Out
      </S.GoogleLogOut>
    </S.GoogleLoginContainer>
  )
}

export default Login

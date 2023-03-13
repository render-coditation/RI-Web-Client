import { GoogleLogin, googleLogout, useGoogleLogin } from '@react-oauth/google'
import * as S from './style'
import { FaGoogle } from 'react-icons/fa'

// import Logo from '../../../public/logo192.png'

const Login = () => {
  const handleLogout = () => {
    const response = googleLogout()
    console.log('logout response', response)
  }

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => console.log(codeResponse),
    flow: 'auth-code',
  })

  return (
    <S.GoogleLoginContainer>
      {/* <img src={Logo} alt='logo' width={160} /> */}
      {/* <GoogleLogin
        shape='rectangular'
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse)
        }}
        onError={() => {
          console.log('Login Failed')
        }}
      /> */}
      <button onClick={login}>
        <FaGoogle className='google-icon' />
      </button>
      Sign In
      <S.GoogleLogOut onClick={handleLogout}>
        <FaGoogle className='google-icon' />
        Sign Out
      </S.GoogleLogOut>
    </S.GoogleLoginContainer>
  )
}

export default Login

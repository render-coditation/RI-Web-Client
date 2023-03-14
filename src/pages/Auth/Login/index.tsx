import { useGoogleLogin } from '@react-oauth/google'
import * as S from './style'
import { FaGoogle } from 'react-icons/fa'

// import Logo from '../../../public/logo192.png'

const Login = () => {
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => console.log(codeResponse),
    flow: 'auth-code',
    // eslint-disable-next-line camelcase
    redirect_uri: 'http://127.0.0.1:3000',
    scope:
      'email profile openid https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/cloud-platform https://www.googleapis.com/auth/cloud-platform.read-only',
  })

  return (
    <S.GoogleLoginContainer>
      {/* <img src={Logo} alt='logo' width={160} /> */}
      <button onClick={login}>
        <FaGoogle className='google-icon' />
        Sign In
      </button>
    </S.GoogleLoginContainer>
  )
}

export default Login

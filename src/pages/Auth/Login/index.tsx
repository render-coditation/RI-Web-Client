import { useGoogleLogin } from '@react-oauth/google'
import * as S from './style'
import { FaGoogle } from 'react-icons/fa'

// import Logo from '../../../public/logo192.png'

const Login = () => {
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => console.log(codeResponse),
    flow: 'auth-code',
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

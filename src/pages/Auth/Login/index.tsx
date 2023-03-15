import { useGoogleLogin } from '@react-oauth/google'
import * as S from './style'
import { FaGoogle } from 'react-icons/fa'
import { login } from 'src/redux/features/auth/auth-thunk'
import { useAppDispatch } from 'src/hooks/thunkAppDispatch'
import { useNavigate } from 'react-router-dom'
import { authConstants } from 'src/constants/auth/auth-constants'

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const sendCodeToLogin = async (code: string) => {
    // loading true
    const response: any = await dispatch(login(code))
    if (response.message) {
      console.log('response after dispatch', response)
      // loading false
      // toast msg
      navigate('/dashboard')
    }
  }

  const loginHandler = useGoogleLogin({
    onSuccess: (codeResponse) => {
      console.log('google login response', codeResponse)
      sendCodeToLogin(codeResponse.code)
    },
    flow: 'auth-code',
    // eslint-disable-next-line camelcase
    redirect_uri: authConstants.redirectUri,
    scope: authConstants.scope,
  })

  return (
    <S.GoogleLoginContainer>
      <S.GoogleLogin onClick={loginHandler}>
        <FaGoogle className='google-icon' />
        Sign In
      </S.GoogleLogin>
    </S.GoogleLoginContainer>
  )
}

export default Login

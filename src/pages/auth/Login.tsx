import { GoogleLogin } from '@react-oauth/google'
import * as S from './style'
import Logo from '../../../public/logo192.png'

const Login = () => (
  <S.GoogleLoginContainer>
    <img src={Logo} alt='logo' width={160} />
    <GoogleLogin
      shape='rectangular'
      onSuccess={(credentialResponse) => {
        console.log(credentialResponse)
      }}
      onError={() => {
        console.log('Login Failed')
      }}
    />
  </S.GoogleLoginContainer>
)

export default Login

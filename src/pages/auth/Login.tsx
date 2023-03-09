import { GoogleLogin } from '@react-oauth/google'
import * as S from './style'
// import Logo from '../../../public/logo192.png'
import { Button } from '../../components/Buttons'

const Login = () => (
  <S.GoogleLoginContainer>
    {/* <img src={Logo} alt='logo' width={160} /> */}
    <Button onClick={() => console.log('clicked')}>Hello</Button>
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

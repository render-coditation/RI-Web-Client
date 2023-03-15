import { Routes, Route } from 'react-router-dom'
import Login from 'src/pages/Auth/Login'
import LogOut from 'src/pages/Auth/Logout'

const RouterElement = () => (
  <Routes>
    {/* add islogged in logic here after storing token in redux by login response */}
    <Route path='/' element={<Login />} />
    <Route path='/dashboard' element={<LogOut />} />
  </Routes>
)

export default RouterElement

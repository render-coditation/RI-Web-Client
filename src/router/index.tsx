import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from 'src/pages/Auth/Login'
import { DashboardItems, ManagementItems } from '../components/Navbar/menuItems'
import TwoStepForm from '../components/TwoStepForm'
import { HOME, LOGIN_PATH, MULTISTEPFORM } from '../constants/route/test'
import AppAndSideBarLayout from '../layouts'
import { ComponentExamples } from '../pages/ComponentExamples'
import GeneralPage from '../pages/GeneralPage'
import { useAppSelector } from 'src/hooks/thunkAppDispatch'

const Router = () => {
  const { isLoggedIn } = useAppSelector((state) => state.auth)

  return (
    <BrowserRouter>
      <Routes>
        <>{console.log('isLoggedIn', isLoggedIn)}</>
        {isLoggedIn ? (
          <Route element={<AppAndSideBarLayout />}>
            <Route path={HOME} element={<ComponentExamples />} />
            <Route path={MULTISTEPFORM} element={<TwoStepForm />} />
            {DashboardItems.map((it) => (
              <Route key={it.id} path={it.path} element={<GeneralPage heading={it.name} />} />
            ))}
            {ManagementItems.map((it) => (
              <Route key={it.id} path={it.path} element={<GeneralPage heading={it.name} />} />
            ))}
          </Route>
        ) : (
          <Route path={LOGIN_PATH} element={<Login />} />
        )}
      </Routes>
    </BrowserRouter>
  )
}

export default Router

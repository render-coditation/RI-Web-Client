import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from 'src/pages/Auth/Login'
import { ProjectDetails } from 'src/pages/Project/ProjectDetails'
import { DashboardItems, ManagementItems } from 'src/components/Navbar/menuItems'
import { HOME_ROUTE, LOGIN_ROUTE, PROJECTS_ROUTE, PROJECT_URL_PARAM } from 'src/constants/route'
import AppAndSideBarLayout from 'src/layouts'
import { ComponentExamples } from 'src/pages/ComponentExamples'
import GeneralPage from 'src/pages/GeneralPage'
import { useAppSelector } from 'src/hooks/thunkAppDispatch'
import Projects from 'src/pages/Projects'

const Router = () => {
  const { isLoggedIn } = useAppSelector((state) => state.auth)

  return (
    <BrowserRouter>
      <Routes>
        {isLoggedIn ? (
          <Route element={<AppAndSideBarLayout />}>
            <Route path={HOME_ROUTE} element={<ComponentExamples />} />
            {DashboardItems.map(({ id, path, component }) => (
              <Route key={id} path={path} element={component} />
            ))}
            {ManagementItems.map(({ id, path, component }) => (
              <Route key={id} path={path} element={component} />
            ))}

            <Route
              path={`${PROJECTS_ROUTE}${PROJECT_URL_PARAM}`}
              element={<ProjectDetails heading='Projects' />}
            />
          </Route>
        ) : (
          <Route path={LOGIN_ROUTE} element={<Login />} />
        )}
      </Routes>
    </BrowserRouter>
  )
}

export default Router

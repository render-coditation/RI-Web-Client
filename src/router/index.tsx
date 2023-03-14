import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DashboardItems, ManagementItems } from '../components/Navbar/menuItems'
import { HOME, LOGIN_PATH } from '../constants/route/test'
import AppAndSideBarLayout from '../layouts'
import Login from '../pages/auth/Login'
import { ComponentExamples } from '../pages/ComponentExamples'
import GeneralPage from '../pages/GeneralPage'

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path={LOGIN_PATH} element={<Login />} />
      <Route element={<AppAndSideBarLayout />}>
        <Route path={HOME} element={<ComponentExamples />} />
        {DashboardItems.map((it) => (
          <Route key={it.id} path={it.path} element={<GeneralPage heading={it.name} />} />
        ))}
        {ManagementItems.map((it) => (
          <Route key={it.id} path={it.path} element={<GeneralPage heading={it.name} />} />
        ))}
      </Route>
    </Routes>
  </BrowserRouter>
)

export default Router

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from 'src/pages/Auth/Login'
import Projects from 'src/pages/Projects'
import { DashboardItems, ManagementItems } from '../components/Navbar/menuItems'
import { HOME, LOGIN_PATH, MULTISTEPFORM } from '../constants/route/test'
import AppAndSideBarLayout from '../layouts'
import { ComponentExamples } from '../pages/ComponentExamples'
import GeneralPage from '../pages/GeneralPage'

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path={LOGIN_PATH} element={<Login />} />
      <Route element={<AppAndSideBarLayout />}>
        <Route path={HOME} element={<ComponentExamples />} />
        <Route path='/my-workstations' element={<ComponentExamples />} />
        <Route path='/workstations' element={<ComponentExamples />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/render-farm' element={<ComponentExamples />} />
        <Route path='/master-control' element={<ComponentExamples />} />
        <Route path='/wmi' element={<ComponentExamples />} />
        {/* {DashboardItems.map((it) => (
          <Route key={it.id} path={it.path} element={<GeneralPage heading={it.name} />} />
        ))} */}
        {/* {ManagementItems.map((it) => (
          <Route key={it.id} path={it.path} element={<GeneralPage heading={it.name} />} />
        ))} */}
      </Route>
    </Routes>
  </BrowserRouter>
)

export default Router

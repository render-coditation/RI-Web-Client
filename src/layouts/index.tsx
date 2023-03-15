import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import { MainContainer, RoutesPane } from './style'

const AppAndSideBarLayout = () => (
  <>
    <MainContainer>
      {/* <h1>Sidebar-Nav</h1> */}
      <Sidebar />
      <Navbar />
      <RoutesPane>
        <Outlet />
      </RoutesPane>
    </MainContainer>
  </>
)

export default AppAndSideBarLayout

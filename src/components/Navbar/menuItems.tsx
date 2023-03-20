import {
  MASTER_CONTROL_ROUTE,
  MY_WORKSTATIONS_ROUTE,
  PROJECTS_ROUTE,
  RENDER_FARM_ROUTE,
  WMI_ROUTE,
  WORKSTATIONS_ROUTE,
} from 'src/constants/route'
import GeneralPage from 'src/pages/GeneralPage'

export const DashboardItems = [
  {
    id: 1,
    name: 'My Workstations',
    path: MY_WORKSTATIONS_ROUTE,
    component: <GeneralPage heading='My Workstations' />,
  },
  // {
  //   id: 2,
  //   name: 'TimeLog',
  //   path: '/TimeLog',
  // },
]
export const ManagementItems = [
  {
    id: 1,
    name: 'Workstations',
    path: WORKSTATIONS_ROUTE,
    component: <GeneralPage heading='Workstations' />,
  },
  {
    id: 2,
    name: 'Projects',
    path: PROJECTS_ROUTE,
    component: <GeneralPage heading='Projects' />,
  },

  // {
  //   id: 3,
  //   name: ' License Servers',
  //   path: '/License Servers',
  // },
  // {
  //   id: 4,
  //   name: 'SFTP',
  //   path: '/SFTP',
  // },
  // {
  //   id: 5,
  //   name: ' Users',
  //   path: '/Users',
  // },
  // {
  //   id: 6,
  //   name: 'Timelog Requests',
  //   path: '/Timelog Requests',
  // },
  {
    id: 7,
    name: 'Render Farm',
    path: RENDER_FARM_ROUTE,
    component: <GeneralPage heading='Render Farm' />,
  },
  {
    id: 8,
    name: 'Master Control',
    path: MASTER_CONTROL_ROUTE,
    component: <GeneralPage heading='Master Control' />,
  },
  {
    id: 9,
    name: 'WMI',
    path: WMI_ROUTE,
    component: <GeneralPage heading='WMI' />,
  },
]

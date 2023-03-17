import GeneralPage from 'src/pages/GeneralPage'
import { ProjectPage } from 'src/pages/Project'

export const DashboardItems = [
  {
    id: 1,
    name: 'My Workstations',
    path: '/my-workstations',
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
    path: '/workstations',
    component: <GeneralPage heading='Workstations' />,
  },
  {
    id: 2,
    name: 'Projects',
    path: '/projects',
    component: <ProjectPage heading='Projects' />,
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
    path: '/render-farm',
    component: <GeneralPage heading='Render Farm' />,
  },
  {
    id: 8,
    name: 'Master Control',
    path: '/master-control',
    component: <GeneralPage heading='Master Control' />,
  },
  {
    id: 9,
    name: 'WMI',
    path: '/wmi',
    component: <GeneralPage heading='WMI' />,
  },
]

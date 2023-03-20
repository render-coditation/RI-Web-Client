import axios from 'axios'
import { api } from 'src/constants/api/api-constants'

export const getProjectDetailsService = (projectId: string) =>
  axios.get(`${api.PROJECT_ENDPOINT}/${projectId}`)

export const createNewProjectService = (projectDetails: any) =>
  axios.post(`${api.PROJECT_ENDPOINT}/`, projectDetails)

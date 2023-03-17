import axios from 'axios'
import { api } from 'src/constants/api/api-constants'

export const getProjectDetailsService = (projectId: string) =>
  axios.get(`${api.PROJECT_ENDPOINT}/${projectId}`)

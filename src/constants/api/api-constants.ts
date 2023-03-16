export const BASE_URL = process.env.REACT_APP_BASE_URL
const LOGIN_URL = process.env?.REACT_APP_LOGIN_ENDPOINT
const LOGOUT_URL = process.env.REACT_APP_LOGOUT_ENDPOINT

export const api = {
  LOGIN_ENDPOINT: `${BASE_URL}${LOGIN_URL}`,
  LOGOUT_ENDPOINT: `${BASE_URL}${LOGOUT_URL}`,
}

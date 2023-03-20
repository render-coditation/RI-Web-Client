export interface loginPayload {
  code: string
}

export interface logOutPayload {
  accessToken: string
}

export interface loginResponse {
  message: string
  json: {
    access_token: string
    user: string
    email: string
    role: string
  }
}

export interface logOutResponse {
  message: string
}

export interface authError {
  message: string
}

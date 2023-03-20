import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { authConstants } from 'src/constants/auth/auth-constants'
import store from 'src/redux/app/store'
import App from 'src/App'
import reportWebVitals from 'src/reportWebVitals'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'src/index.css'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const container = document.getElementById('root')!
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GoogleOAuthProvider clientId={authConstants.GoogleOAuthClientId}>
        <App />
      </GoogleOAuthProvider>
    </Provider>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

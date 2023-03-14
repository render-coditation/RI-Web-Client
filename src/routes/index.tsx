export const test = 'test'
import React, { ReactElement, ReactNode } from 'react'
import { Route, Redirect, RouteProps } from 'react-router-dom'
import { useAppSelector } from 'redux-store/hooks'

interface Props extends RouteProps {
  children: ReactNode
}

export default function ProtectedRoute({ children, ...rest }: Props): ReactElement {
  const isLoggedIn = useAppSelector((state) => state.user.userInfo.isLoggedIn)

  return (
    <Route
      {...rest}
      render={() => {
        if (isLoggedIn) {
          return children
        } else {
          return (
            <Redirect
              to={{
                pathname: '/',
              }}
            />
          )
        }
      }}
    />
  )
}

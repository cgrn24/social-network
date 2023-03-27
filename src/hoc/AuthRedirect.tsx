import React, { ComponentType } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { RootStoreType } from '../redux/store'

type MapStateToPropsType = {
  isAuth: boolean
}

export function AuthRedirect<T>(Component: ComponentType<T>) {
  const RedirectComponent = (props: MapStateToPropsType) => {
    const { isAuth, ...restProps } = props
    if (!isAuth) return <Redirect to='/login' />
    return <Component {...(restProps as T)} />
  }

  const mapStateToProps = (state: RootStoreType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
  })

  const ConnectedAuthRedirectComponent = connect(mapStateToProps)(RedirectComponent)

  return ConnectedAuthRedirectComponent
}

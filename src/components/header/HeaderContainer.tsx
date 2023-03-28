import React from 'react'
import { connect } from 'react-redux'
import { logoutTC } from '../../redux/authReducer'
import { RootStoreType } from '../../redux/store'
import { Header } from './Header'

export type HeaderContainerPropsType = HeaderMSTPPropsType & HeaderMDTPPropsType

type HeaderMSTPPropsType = {
  isAuth: boolean
  login: string | null
}
type HeaderMDTPPropsType = {
  logoutTC: () => void
}

class HeaderContainerConnect extends React.Component<HeaderContainerPropsType> {
  render() {
    return <Header {...this.props} />
  }
}
const mapStateToProps = (state: RootStoreType) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  }
}

const mapDispatchToProps: HeaderMDTPPropsType = {
  logoutTC: logoutTC,
}

export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderContainerConnect)

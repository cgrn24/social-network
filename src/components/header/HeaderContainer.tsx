import React from 'react'
import { connect } from 'react-redux'
import { logoutTC } from '../../redux/authReducer'
import { RootStoreType } from '../../redux/store'
import { Header } from './Header'

type HeaderContainerPropsType = {
  isAuth: boolean
  login: string | null
  logoutTC: () => void
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
  render() {
    return <Header {...this.props} logout={logoutTC} />
  }
}
const mapStateToProps = (state: RootStoreType) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  }
}

export default connect(mapStateToProps, { logoutTC })(HeaderContainer)

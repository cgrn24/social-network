import axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'
import { authAPI } from '../../api/api'
import { getUserDataTC, logoutTC } from '../../redux/authReducer'
import { RootStoreType } from '../../redux/store'
import { Header } from './Header'

type HeaderContainerPropsType = {
  isAuth: boolean
  login: string | null
  getUserDataTC: () => void
  logoutTC: () => void
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
  componentDidMount() {
    this.props.getUserDataTC()
  }
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

export default connect(mapStateToProps, { getUserDataTC, logoutTC })(HeaderContainer)

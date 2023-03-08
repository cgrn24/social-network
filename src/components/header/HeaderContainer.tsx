import axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'
import { setUserData } from '../../redux/authReducer'
import { RootStoreType } from '../../redux/store'
import { Header } from './Header'

type HeaderContainerPropsType = {
  isAuth: boolean
  login: string | null
  setUserData: (id: string | number | null, email: string | null, login: string | null) => void
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.resultCode === 0) {
          const { id, login, email } = res.data.data
          this.props.setUserData(id, email, login)
        }
      })
  }
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

export default connect(mapStateToProps, { setUserData })(HeaderContainer)

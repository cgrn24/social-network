import React from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'
import { compose } from 'redux'
import { AuthRedirect } from '../../hoc/AuthRedirect'
import { getUserProfileTC, getUserStatusTC, updateUserStatusTC } from '../../redux/profileReducer'
import { ProfileType } from '../../redux/state'
import { RootStoreType } from '../../redux/store'
import { Profile } from './Profile'

type PathParamsType = {
  userId: string
}

type OwnPropsType = {
  getUserProfileTC: (userId: number) => void
  getUserStatusTC: (userId: number) => void
  updateUserStatusTC: (status: string) => void
  profile: ProfileType
  status: string
  userId: number
  isAuth: boolean
}
type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
  componentDidMount() {
    let userId = +this.props.match.params.userId
    if (!userId) {
      userId = this.props.userId
      if (!userId) {
        this.props.history.push('/login')
      }
    }
    this.props.getUserProfileTC(userId)
    this.props.getUserStatusTC(userId)
  }
  render() {
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateUserStatusTC} />
      </div>
    )
  }
}
const mapStateToProps = (state: RootStoreType) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    userId: state.auth.userId,
    isAuth: state.auth.isAuth,
  }
}

export default compose<React.ComponentType>(
  connect(mapStateToProps, { getUserProfileTC, getUserStatusTC, updateUserStatusTC }),
  //withRouter,
  AuthRedirect
)(ProfileContainer)

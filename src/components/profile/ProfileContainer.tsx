import React from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { AuthRedirect } from '../../hoc/AuthRedirect'
import { getUserProfileTC, getUserStatusTC, savePhotoTC, saveProfile, updateUserStatusTC } from '../../redux/profileReducer'
import { ProfileType } from '../../redux/types'
import { RootStoreType } from '../../redux/store'
import { Profile } from './Profile'

type PathParamsType = {
  userId: string
}

type OwnPropsType = {
  getUserProfileTC: (userId: number) => void
  getUserStatusTC: (userId: number) => void
  updateUserStatusTC: (status: string) => void
  savePhotoTC: (file: any) => void
  saveProfile: (value: Omit<ProfileType, 'userId' | 'photos'>) => Promise<any>
  profile: ProfileType | null
  status: string
  userId: number
  isAuth: boolean
}
type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
  refreshProfile() {
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
  componentDidMount() {
    this.refreshProfile()
  }
  componentDidUpdate(prevProps: ProfileContainerPropsType) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile()
    }
  }
  render() {
    return (
      <div>
        <Profile
          {...this.props}
          profile={this.props.profile}
          status={this.props.status}
          updateStatus={this.props.updateUserStatusTC}
          isOwner={!this.props.match.params.userId}
          savePhoto={this.props.savePhotoTC}
          saveProfile={this.props.saveProfile}
        />
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
  connect(mapStateToProps, { getUserProfileTC, getUserStatusTC, updateUserStatusTC, savePhotoTC, saveProfile }),
  withRouter,
  AuthRedirect
)(ProfileContainer)

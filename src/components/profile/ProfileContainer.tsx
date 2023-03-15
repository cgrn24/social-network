import React from 'react'
import { connect } from 'react-redux'
import { Redirect, RouteComponentProps, withRouter } from 'react-router-dom'
import { getUserProfileTC } from '../../redux/profileReducer'
import { ProfileType } from '../../redux/state'
import { RootStoreType } from '../../redux/store'
import { Profile } from './Profile'

type PathParamsType = {
  userId: string
}

type OwnPropsType = {
  getUserProfileTC: (userId: string | number) => void
  profile: ProfileType
  isAuth: boolean
}
type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = '2'
    }
    this.props.getUserProfileTC(userId)
  }
  render() {
    if (!this.props.isAuth) return <Redirect to={'/login'} />
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    )
  }
}
const mapStateToProps = (state: RootStoreType) => {
  return {
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
  }
}

const ProfileWithRouter = withRouter(ProfileContainer)
export default connect(mapStateToProps, { getUserProfileTC })(ProfileWithRouter)

import axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { setUserProfile } from '../../redux/profileReducer'
import { ProfileType } from '../../redux/state'
import { RootStoreType } from '../../redux/store'
import { MyPostsContainer } from './myposts/MyPostsContainer'
import { Profile } from './Profile'
import { ProfileInfo } from './profileinfo/ProfileInfo'

type PathParamsType = {
  userId: string
}

type OwnPropsType = {
  setUserProfile: (profile: ProfileType) => void
  profile: ProfileType
}
type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = '2'
    }
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then((res) => {
      this.props.setUserProfile(res.data)
    })
  }
  render() {
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
  }
}

const ProfileWithRouter = withRouter(ProfileContainer)

export default connect(mapStateToProps, { setUserProfile })(ProfileWithRouter)

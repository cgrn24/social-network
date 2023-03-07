import axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'
import { setUserProfile } from '../../redux/profileReducer'
import { ProfileType } from '../../redux/state'
import { RootStoreType } from '../../redux/store'
import { MyPostsContainer } from './myposts/MyPostsContainer'
import { Profile } from './Profile'
import { ProfileInfo } from './profileinfo/ProfileInfo'

type ProfileContainerPropsType = {
  setUserProfile: (profile: ProfileType) => void
  profile: ProfileType
}

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then((res) => {
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

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer)

import React from 'react'
import { MyPostsContainer } from './myposts/MyPostsContainer'
import p from './Profile.module.css'
import { ProfileInfo } from './profileinfo/ProfileInfo'

export const Profile = () => {
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer />
    </div>
  )
}

import React from 'react'
import { PostsType, ProfilePageType } from '../../redux/state'
import { MyPosts } from './myposts/MyPosts'
import p from './Profile.module.css'
import { ProfileInfo } from './profileinfo/ProfileInfo'

type ProfilePropsType = {
  state: ProfilePageType
  dispatch: (action: any) => void
}

export const Profile = (props: ProfilePropsType) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.state.posts} dispatch={props.dispatch} newPostText={props.state.newPostText} />
      {/* <ProfileInfo /> */}
      {/* <MyPosts posts={props.profilePage.posts} newPostText={props.profilePage.newPostText} dispatch={props.dispatch}/> */}
    </div>
  )
}

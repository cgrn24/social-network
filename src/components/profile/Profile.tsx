import React from 'react'
import { PostsType, ProfilePageType } from '../../redux/state'
import { MyPosts } from './myposts/MyPosts'
import p from './Profile.module.css'
import { ProfileInfo } from './profileinfo/ProfileInfo'

type ProfilePropsType = {
  state: ProfilePageType
  updateNewPostText: (newText: string) => void
  addPost: (postText: string) => void
}

export const Profile = (props: ProfilePropsType) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.state.posts} addPost={props.addPost} updateNewPostText={props.updateNewPostText} newPostText={props.state.newPostText} />
      {/* <ProfileInfo /> */}
      {/* <MyPosts posts={props.profilePage.posts} newPostText={props.profilePage.newPostText} dispatch={props.dispatch}/> */}
    </div>
  )
}

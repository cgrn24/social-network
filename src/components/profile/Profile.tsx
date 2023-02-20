import React from 'react'
import { PostsType, ProfilePageType } from '../../redux/state'
import { StoreType } from '../../redux/store'
import { MyPosts } from './myposts/MyPosts'
import { MyPostsContainer } from './myposts/MyPostsContainer'
import p from './Profile.module.css'
import { ProfileInfo } from './profileinfo/ProfileInfo'

type ProfilePropsType = {
  store: StoreType
}

export const Profile = (props: ProfilePropsType) => {
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer store={props.store} />
      {/* <ProfileInfo /> */}
      {/* <MyPosts posts={props.profilePage.posts} newPostText={props.profilePage.newPostText} dispatch={props.dispatch}/> */}
    </div>
  )
}

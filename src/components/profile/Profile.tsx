import React from 'react';
import { MyPosts } from './myposts/MyPosts';
import p from './Profile.module.css'
import { ProfileInfo } from './profileinfo/ProfileInfo';


export const Profile = () => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts />
      {/* <ProfileInfo /> */}
      {/* <MyPosts posts={props.profilePage.posts} newPostText={props.profilePage.newPostText} dispatch={props.dispatch}/> */}
    </div>
  )
}

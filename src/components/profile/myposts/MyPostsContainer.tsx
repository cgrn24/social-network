import React, { ChangeEvent } from 'react'
import { addPostAC, updateNewPostChangeAC } from '../../../redux/profileReducer'
import { PostsType } from '../../../redux/state'
import { StoreType } from '../../../redux/store'
import { MyPosts } from './MyPosts'
import m from './MyPosts.module.css'
import { Post } from './post/Post'

type MyPostsContainerType = {
  store: StoreType
}

export const MyPostsContainer = (props: MyPostsContainerType) => {
  const state = props.store.getState()

  let addPost = () => {
    props.store.dispatch(addPostAC())
  }
  let onPostChange = (text: string) => {
    const action = updateNewPostChangeAC(text)
    props.store.dispatch(action)
  }
  return <MyPosts addPost={addPost} onPostChange={onPostChange} posts={state.profilePage.posts} newPostText={state.profilePage.newPostText} />
}

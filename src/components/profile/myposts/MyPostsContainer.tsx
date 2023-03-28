import React from 'react'
import { connect } from 'react-redux'
import { addPostAC } from '../../../redux/profileReducer'
import { AppDispatch, RootStoreType } from '../../../redux/store'
import { MyPosts } from './MyPosts'

const mapStateToProps = (state: RootStoreType) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  }
}
const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    addPost: (newPostText: string) => {
      dispatch(addPostAC(newPostText))
    },
  }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

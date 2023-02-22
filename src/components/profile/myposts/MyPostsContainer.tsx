import React, { ChangeEvent } from 'react'
import { connect } from 'react-redux'
import { addPostAC, updateNewPostChangeAC } from '../../../redux/profileReducer'
import { ActionsType } from '../../../redux/store'
import { MyPosts } from './MyPosts'

const mapStateToProps = (state: any) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  }
}
const mapDispatchToProps = (dispatch: (action: ActionsType) => void) => {
  return {
    addPost: () => {
      dispatch(addPostAC())
    },
    onPostChange: (text: string) => {
      const action = updateNewPostChangeAC(text)
      dispatch(action)
    },
  }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

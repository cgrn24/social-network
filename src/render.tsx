import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { addPost, RootStateType, updateNewPostText } from './redux/state'

export type RenderPropsType = {
  addPost: (postText: string) => void
  updateNewPostText: (newText: string) => void
  state: RootStateType
}

export let rerenderEntireTree = (state: RootStateType) => {
  ReactDOM.render(<App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />, document.getElementById('root'))
}

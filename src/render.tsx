import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { addPost, RootStateType } from './redux/state'

export type RenderPropsType = {
  addPost: (postMessage: string) => void
  state: RootStateType
}

export let rerenderEntireTree = (state: RootStateType) => {
  ReactDOM.render(<App state={state} addPost={addPost} />, document.getElementById('root'))
}

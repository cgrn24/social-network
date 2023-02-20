import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import { state } from './redux/state'
import { RootStateType } from './redux/state'
import { RootStoreType, store } from './redux/store'

export type RenderPropsType = {
  addPost: (postText: string) => void
  updateNewPostText: (newText: string) => void
  state: RootStateType
}

const renderEntireTree = (state: RootStateType) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} dispatch={store.dispatch.bind(store)} />
    </BrowserRouter>,
    document.getElementById('root')
  )
}

renderEntireTree(store.getState())
store.subscribe(() => {
  const state = store.getState()
  renderEntireTree(state)
})

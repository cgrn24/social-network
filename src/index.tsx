import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import { RootStateType } from './redux/state'
import { RootStoreType, store } from './redux/store'

const renderEntireTree = (state: RootStateType) => {
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App store={store} />
      </Provider>
    </BrowserRouter>,
    document.getElementById('root')
  )
}

renderEntireTree(store.getState())
store.subscribe(() => {
  const state = store.getState()
  renderEntireTree(state)
})

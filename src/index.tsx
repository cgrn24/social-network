import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { Dispatch } from 'redux'
import App from './App'
import './index.css'
import { store } from './redux/store'

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
)
export const appDispatch = store.dispatch as typeof store.dispatch | Dispatch<any>

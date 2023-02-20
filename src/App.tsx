import React from 'react'
import './App.css'
import { Header } from './components/header/Header'
import { Navbar } from './components/navbar/Navbar'
import { Profile } from './components/profile/Profile'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Dialogs } from './components/dialogs/Dialogs'
import { RootStateType } from './redux/state'

export type AppPropsType = {
  state: RootStateType
  dispatch: (action: any) => void
}

function App(props: AppPropsType) {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Switch>
            <Route path='/profile'>
              <Profile state={props.state.profilePage} dispatch={props.dispatch} />
            </Route>
            <Route path='/dialogs'>
              <Dialogs state={props.state.dialogsPage} dispatch={props.dispatch} />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App

import React from 'react'
import './App.css'
import { Header } from './components/header/Header'
import { Navbar } from './components/navbar/Navbar'
import { Profile } from './components/profile/Profile'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Dialogs } from './components/dialogs/Dialogs'
import { RootStateType } from './redux/state'
import { RootStoreType, StoreType } from './redux/store'
import { DialogsContainer } from './components/dialogs/DialogsContainer'
import { Users } from './components/users/Users'

export type AppPropsType = {
  store: StoreType
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
              <Profile store={props.store} />
            </Route>
            <Route path='/dialogs'>
              <DialogsContainer />
            </Route>
            <Route path='/users'>
              <Users />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App

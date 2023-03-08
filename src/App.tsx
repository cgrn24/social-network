import React from 'react'
import './App.css'
import { Header } from './components/header/Header'
import { Navbar } from './components/navbar/Navbar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { DialogsContainer } from './components/dialogs/DialogsContainer'
import UsersContainer from './components/users/UsersContainer'
import ProfileContainer from './components/profile/ProfileContainer'

function App() {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Switch>
            <Route path='/profile/:userId?'>
              <ProfileContainer />
            </Route>
            <Route path='/dialogs'>
              <DialogsContainer />
            </Route>
            <Route path='/users'>
              <UsersContainer />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App

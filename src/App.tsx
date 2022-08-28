import React from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { Navbar } from './components/navbar/Navbar';
import { Profile } from './components/profile/Profile';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Dialogs } from './components/dialogs/Dialogs';

function App() {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Switch>
            <Route path='/profile'>
              <Profile />
            </Route>
            <Route path='/dialogs'>
              <Dialogs />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;

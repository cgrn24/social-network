import React from 'react'
import './App.css'
import { Navbar } from './components/navbar/Navbar'
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom'
import DialogsContainer from './components/dialogs/DialogsContainer'
import UsersContainer from './components/users/UsersContainer'
import ProfileContainer from './components/profile/ProfileContainer'
import HeaderContainer from './components/header/HeaderContainer'
import { connect } from 'react-redux'
import { getUserDataTC } from './redux/authReducer'
import { compose } from 'redux'

type AppPropsType = {
  getUserDataTC: () => void
}
class App extends React.Component<AppPropsType> {
  componentDidMount() {
    this.props.getUserDataTC()
  }

  render() {
    return (
      <BrowserRouter>
        <div className='app-wrapper'>
          <HeaderContainer />
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
}
export default compose(withRouter, connect(null, { getUserDataTC }))(App)

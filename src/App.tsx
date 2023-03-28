import React from 'react'
import './App.css'
import { Navbar } from './components/navbar/Navbar'
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom'
import { DialogsContainer } from './components/dialogs/DialogsContainer'
import UsersContainer from './components/users/UsersContainer'
import ProfileContainer from './components/profile/ProfileContainer'
import { HeaderContainer } from './components/header/HeaderContainer'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { initializeAppTC } from './redux/appReducer'
import { RootStoreType } from './redux/store'
import Preloader from './components/common/Preloader/Preloader'
import Login from './components/login/Login'

type AppPropsType = {
  initializeAppTC: () => void
  initialized: boolean
}
class App extends React.Component<AppPropsType> {
  componentDidMount() {
    this.props.initializeAppTC()
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <BrowserRouter>
        <div className='app-wrapper'>
          <HeaderContainer />
          <Navbar />
          <div className='app-wrapper-content'>
            <Switch>
              <Route path={'/profile/:userId?'} render={() => <ProfileContainer />} />
              <Route path={'/dialogs'} render={() => <DialogsContainer />} />
              <Route path={'/users'} render={() => <UsersContainer />} />
              <Route path={'/login'} render={() => <Login />} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

const mapStateToProps = (state: RootStoreType) => ({
  initialized: state.app.initialized,
  isAuth: state.auth.isAuth,
})

export default compose<React.ComponentType>(connect(mapStateToProps, { initializeAppTC }), withRouter)(App)

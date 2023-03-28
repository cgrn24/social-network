import { NavLink } from 'react-router-dom'
import h from './Header.module.css'
import { HeaderContainerPropsType } from './HeaderContainer'

export const Header = (props: HeaderContainerPropsType) => {
  return (
    <header className={h.header}>
      <img src='https://i.ytimg.com/vi/DE4OxdPJTCM/maxresdefault.jpg'></img>
      <div className={h.loginBlock}>
        {props.isAuth ? (
          <div>
            {props.login} - <button onClick={props.logoutTC}>Logout</button>{' '}
          </div>
        ) : (
          <NavLink to={'/login'}>Login</NavLink>
        )}
      </div>
    </header>
  )
}

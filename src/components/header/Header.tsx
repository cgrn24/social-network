import { NavLink } from 'react-router-dom'
import h from './Header.module.css'

type HeaderPropsType = {
  isAuth: boolean
  login: string | null
  logout: () => void
}

export const Header = (props: HeaderPropsType) => {
  return (
    <header className={h.header}>
      <img src='https://i.ytimg.com/vi/DE4OxdPJTCM/maxresdefault.jpg'></img>
      <div className={h.loginBlock}>
        {props.isAuth ? (
          <div>
            {props.login} - <button onClick={props.logout}>Logout</button>{' '}
          </div>
        ) : (
          <NavLink to={'/login'}>Login</NavLink>
        )}
      </div>
    </header>
  )
}

import { NavLink } from 'react-router-dom'
import n from './Navbar.module.css'

export const Navbar = () => {
  return (
    <nav className={n.nav}>
      <div>
        <NavLink to='/profile' className={(navData) => (navData ? n.active : n.item)}>
          Profile
        </NavLink>
      </div>
      <div>
        <NavLink to='/dialogs/' className={(navData) => (navData ? n.active : n.item)}>
          Messages
        </NavLink>
      </div>
      <div>
        <NavLink to='/news' className={(navData) => (navData ? n.active : n.item)}>
          News
        </NavLink>
      </div>
      <div>
        <NavLink to='/music' className={(navData) => (navData ? n.active : n.item)}>
          Music
        </NavLink>
      </div>
      <div>
        <NavLink to='/settings' className={(navData) => (navData ? n.active : n.item)}>
          Settings
        </NavLink>
      </div>
      <div>
        <NavLink to='/users' className={(navData) => (navData ? n.active : n.item)}>
          Users
        </NavLink>
      </div>
    </nav>
  )
}

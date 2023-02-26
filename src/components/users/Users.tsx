import axios from 'axios'
import { usersReducer, UsersType } from '../../redux/usersReducer'
import style from './Users.module.css'

type UsersPropsType = {
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  setUsers: (users: any) => void
  users: UsersType
}

export const Users = (props: UsersPropsType) => {
  if (props.users.length === 0) {
    axios.get('https://social-network.samuraijs.com/api/1.0/users').then((res) => {
      props.setUsers(res.data.items)
    })
  }

  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img
                src={u.photos.small ? u.photos.small : 'https://preview.redd.it/1p4pp2ckqh921.png?auto=webp&s=278c8ad3c703299e8fdeff08fc636073361db1d5'}
                className={style.avatar}
              />
            </div>
            <div>
              {u.followed ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button> : <button onClick={() => props.follow(u.id)}>Follow</button>}
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>'u.location.country'</div>
              <div>'u.location.city'</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  )
}

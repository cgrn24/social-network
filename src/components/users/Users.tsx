import { UsersType } from '../../redux/usersReducer'
import style from './Users.module.css'

type UsersFCPropsType = {
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  onPageChanged: (p: number) => void
  users: UsersType
  pageSize: number
  totalUsersCount: number
  currentPage: number
}

export const Users = (props: UsersFCPropsType) => {
  const pages = []
  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (
    <div>
      <div>
        {pages.map((p) => {
          return (
            <span className={props.currentPage === p ? style.selectedPage : style.page} onClick={() => props.onPageChanged(p)}>
              {p}
            </span>
          )
        })}
      </div>
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
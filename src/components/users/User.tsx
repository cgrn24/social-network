import React from 'react'
import styles from './users.module.css'
import userPhoto from '../../assets/images/user.png'
import { NavLink } from 'react-router-dom'
import { Paginator } from '../common/Paginator/Paginator'
import { UserType } from '../../redux/usersReducer'

type UserPropsType = {
  user: UserType
  followingInProgress: number[]
  follow: (userId: number) => void
  unfollow: (userId: number) => void
}

export const User = ({ user, followingInProgress, unfollow, follow }: UserPropsType) => {
  return (
    <div>
      <span>
        <div>
          <NavLink to={'/profile/' + user.id}>
            <img src={user.photos.small != null ? user.photos.small : userPhoto} className={styles.userPhoto} />
          </NavLink>
        </div>
        <div>
          {user.followed ? (
            <button
              disabled={followingInProgress.some((id: number) => id === user.id)}
              onClick={() => {
                unfollow(user.id)
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={followingInProgress.some((id: number) => id === user.id)}
              onClick={() => {
                follow(user.id)
              }}
            >
              Follow
            </button>
          )}
        </div>
      </span>
      <span>
        <span>
          <div>{user.name}</div>
          <div>{user.status}</div>
        </span>
        <span>
          <div>{'user.location.country'}</div>
          <div>{'user.location.city'}</div>
        </span>
      </span>
    </div>
  )
}

export default User

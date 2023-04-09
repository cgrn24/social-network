import React from 'react'
import styles from './Users.module.css'
import userPhoto from '../../assets/ava.jpg'
import { NavLink } from 'react-router-dom'
import { UserType } from '../../redux/usersReducer'

type UserPropsType = {
  user: UserType
  followingInProgress: number[]
  follow: (userId: number) => void
  unfollow: (userId: number) => void
}

export const User = ({ user, followingInProgress, unfollow, follow }: UserPropsType) => {
  return (
    <div className={styles.userContainer}>
      <div className={styles.avatarBlock}>
        <div>
          <NavLink to={'/profile/' + user.id}>
            <img src={user.photos.small != null ? user.photos.small : userPhoto} className={styles.avatar} />
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
      </div>
      <div className={styles.infoBlock}>
        <div>
          <b>Name:</b> {user.name}
        </div>
        <div>
          <b>Status:</b> {user.status}
        </div>
      </div>
    </div>
  )
}

export default User

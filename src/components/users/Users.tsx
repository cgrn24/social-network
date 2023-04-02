import { NavLink } from 'react-router-dom'
import { UsersType } from '../../redux/usersReducer'
import { Paginator } from '../common/Paginator/Paginator'
import User from './User'
import style from './Users.module.css'

type UsersFCPropsType = {
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  onPageChanged: (p: number) => void
  setIsFetching: (isFetching: boolean) => void
  setIsFollowing: (isFollowing: boolean, userId: number) => void
  followTC: (userId: number) => void
  unfollowTC: (userId: number) => void
  users: UsersType
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
  followingInProgress: number[]
}

export const Users = ({ currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props }: UsersFCPropsType) => {
  let pages: number[] = []

  const pagesCount = Math.ceil(totalUsersCount / pageSize)
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (
    <>
      <div>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalUsersCount={totalUsersCount} pageSize={pageSize} />
        <div>
          {users.map((u) => (
            <User user={u} followingInProgress={props.followingInProgress} key={u.id} unfollow={props.unfollow} follow={props.follow} />
          ))}
        </div>
      </div>
    </>
  )
}

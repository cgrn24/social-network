import axios from 'axios'
import React from 'react'
import { UsersType } from '../../redux/usersReducer'
import style from './Users.module.css'

type UsersPropsType = {
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  setUsers: (users: any) => void
  setCurrentPage: (currentPage: number) => void
  users: UsersType
  pageSize: number
  totalUsersCount: number
  currentPage: number
}

export class Users extends React.Component<UsersPropsType> {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then((res) => {
      this.props.setUsers(res.data.items)
    })
  }
  onPageChanged = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then((res) => {
      this.props.setUsers(res.data.items)
    })
  }
  render() {
    const pages = []
    const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
    }

    return (
      <div>
        <div>
          {pages.map((p) => {
            return (
              <span className={this.props.currentPage === p ? style.selectedPage : style.page} onClick={() => this.onPageChanged(p)}>
                {p}
              </span>
            )
          })}
        </div>
        {this.props.users.map((u) => (
          <div key={u.id}>
            <span>
              <div>
                <img
                  src={u.photos.small ? u.photos.small : 'https://preview.redd.it/1p4pp2ckqh921.png?auto=webp&s=278c8ad3c703299e8fdeff08fc636073361db1d5'}
                  className={style.avatar}
                />
              </div>
              <div>
                {u.followed ? (
                  <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button>
                ) : (
                  <button onClick={() => this.props.follow(u.id)}>Follow</button>
                )}
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
}

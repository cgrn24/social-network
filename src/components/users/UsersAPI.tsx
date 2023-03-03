import axios from 'axios'
import React from 'react'
import { UsersType } from '../../redux/usersReducer'
import { Users } from './UsersFC'

type UsersPropsType = {
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  setUsers: (users: any) => void
  setCurrentPage: (currentPage: number) => void
  setTotalUsersCount: (usersCount: number) => void
  users: UsersType
  pageSize: number
  totalUsersCount: number
  currentPage: number
}

export class UsersAPI extends React.Component<UsersPropsType> {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then((res) => {
      this.props.setUsers(res.data.items)
      this.props.setTotalUsersCount(res.data.totalCount)
    })
  }
  onPageChanged = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then((res) => {
      this.props.setUsers(res.data.items)
    })
  }
  render() {
    return (
      <Users
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        setUsers={this.props.setUsers}
        setCurrentPage={this.props.setCurrentPage}
        setTotalUsersCount={this.props.setTotalUsersCount}
        users={this.props.users}
        pageSize={this.props.pageSize}
        totalUsersCount={this.props.totalUsersCount}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
      />
    )
  }
}

import axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'
import { ActionsType } from '../../redux/store'
import { followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC, UsersType } from '../../redux/usersReducer'
import { Users } from './Users'

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

class UsersContainer extends React.Component<UsersPropsType> {
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
        users={this.props.users}
        pageSize={this.props.pageSize}
        totalUsersCount={this.props.totalUsersCount}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
      />
    )
  }
}

const mapStateToProps = (state: any) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
  }
}
const mapDispatchToProps = (dispatch: (action: ActionsType) => void) => {
  return {
    follow: (userId: number) => {
      dispatch(followAC(userId))
    },
    unfollow: (userId: number) => {
      dispatch(unfollowAC(userId))
    },
    setUsers: (users: any) => {
      dispatch(setUsersAC(users))
    },
    setCurrentPage: (currentPage: number) => {
      dispatch(setCurrentPageAC(currentPage))
    },
    setTotalUsersCount: (totalUsersCount: number) => {
      dispatch(setTotalUsersCountAC(totalUsersCount))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)

import axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'
import { usersApi } from '../../api/api'
import { ActionsType, RootStoreType } from '../../redux/store'
import { follow, getUsersTC, setCurrentPage, setIsFetching, setIsFollowing, setTotalUsersCount, setUsers, unfollow, UsersType } from '../../redux/usersReducer'
import { Users } from './Users'

type UsersPropsType = {
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  setUsers: (users: any) => void
  setCurrentPage: (currentPage: number) => void
  setTotalUsersCount: (usersCount: number) => void
  setIsFetching: (isFetching: boolean) => void
  setIsFollowing: (isFollowing: boolean, userId: number) => void
  getUsersTC: (currentPage: number, pageSize: number) => void
  users: UsersType
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
  followingInProgress: number[]
}

class UsersContainer extends React.Component<UsersPropsType> {
  componentDidMount() {
    this.props.getUsersTC(this.props.currentPage, this.props.pageSize)
    // this.props.setIsFetching(true)
    // usersApi.getUsers(this.props.currentPage, this.props.pageSize).then((res) => {
    //   this.props.setUsers(res.items)
    //   this.props.setTotalUsersCount(res.totalCount)
    //   this.props.setIsFetching(false)
  }
  onPageChanged = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber)
    this.props.setIsFetching(true)
    usersApi.getUsers(pageNumber, this.props.pageSize).then((res) => {
      this.props.setUsers(res.items)
      this.props.setIsFetching(false)
    })
  }
  render() {
    return (
      <>
        {this.props.isFetching ? <img src='https://media.tenor.com/RVvnVPK-6dcAAAAM/reload-cat.gif' /> : null}
        <Users
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          users={this.props.users}
          pageSize={this.props.pageSize}
          totalUsersCount={this.props.totalUsersCount}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          isFetching={this.props.isFetching}
          setIsFetching={this.props.setIsFetching}
          setIsFollowing={this.props.setIsFollowing}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    )
  }
}

const mapStateToProps = (state: RootStoreType) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  }
}
// const mapDispatchToProps = (dispatch: (action: ActionsType) => void) => {
//   return {
//     follow: (userId: number) => {
//       dispatch(followAC(userId))
//     },
//     unfollow: (userId: number) => {
//       debugger
//       dispatch(unfollowAC(userId))
//     },
//     setUsers: (users: any) => {
//       dispatch(setUsersAC(users))
//     },
//     setCurrentPage: (currentPage: number) => {
//       dispatch(setCurrentPageAC(currentPage))
//     },
//     setTotalUsersCount: (totalUsersCount: number) => {
//       dispatch(setTotalUsersCountAC(totalUsersCount))
//     },
//     setIsFetching: (isFetching: boolean) => {
//       dispatch(setIsFetchingAC(isFetching))
//     },
//   }
// }

export default connect(mapStateToProps, { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, setIsFetching, setIsFollowing, getUsersTC })(
  UsersContainer
)

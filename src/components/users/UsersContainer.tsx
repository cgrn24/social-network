import axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { AuthRedirect } from '../../hoc/AuthRedirect'
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsers } from '../../redux/selectors/usersSelectors'
import { RootStoreType } from '../../redux/store'
import {
  follow,
  followTC,
  getUsersTC,
  setCurrentPage,
  setIsFetching,
  setIsFollowing,
  setTotalUsersCount,
  setUsers,
  unfollow,
  unfollowTC,
  UsersType,
} from '../../redux/usersReducer'
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
  followTC: (userId: number) => void
  unfollowTC: (userId: number) => void
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
  }
  onPageChanged = (pageNumber: number) => {
    this.props.getUsersTC(pageNumber, this.props.pageSize)
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
          followTC={this.props.followTC}
          unfollowTC={this.props.unfollowTC}
        />
      </>
    )
  }
}

const mapStateToProps = (state: RootStoreType) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  }
}

export default compose<React.ComponentType>(
  AuthRedirect,
  connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setIsFetching,
    setIsFollowing,
    getUsersTC,
    followTC,
    unfollowTC,
  })
)(UsersContainer)

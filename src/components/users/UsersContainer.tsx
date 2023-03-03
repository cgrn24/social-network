import { connect } from 'react-redux'
import { ActionsType } from '../../redux/store'
import { followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC } from '../../redux/usersReducer'
import { UsersAPI } from './UsersAPI'

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

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPI)

import { connect } from 'react-redux'
import { ActionsType } from '../../redux/store'
import { followAC, setCurrentPageAC, setUsersAC, unfollowAC } from '../../redux/usersReducer'
import { Users } from './Users'

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
  }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

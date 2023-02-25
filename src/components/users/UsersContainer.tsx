import { connect } from 'react-redux'
import { ActionsType } from '../../redux/store'
import { followAC, setUsersAC, unfollowAC } from '../../redux/usersReducer'
import { Users } from './Users'

const mapStateToProps = (state: any) => {
  return {
    users: state.usersPage.users,
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
  }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

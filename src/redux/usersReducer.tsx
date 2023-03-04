const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const IS_FETCHING = 'IS-FETCHING'

export type UserType = { name: string; id: number; photos: { small: string | null; large: string | null }; status: string | null; followed: boolean }
export type UsersType = Array<UserType>
type InitialStateType = { users: UsersType; pageSize: number; totalUsersCount: number; currentPage: number; isFetching: boolean }

const initialState: InitialStateType = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
}

export const usersReducer = (state: InitialStateType = initialState, action: any) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true }
          }
          return u
        }),
      }
    }
    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false }
          }
          return u
        }),
      }
    }
    case SET_USERS: {
      return { ...state, users: action.users }
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage }
    }
    case SET_TOTAL_USERS_COUNT: {
      debugger
      return { ...state, totalUsersCount: action.totalUsersCount }
    }
    case IS_FETCHING: {
      return { ...state, isFetching: action.isFetching }
    }
    default:
      return state
  }
}

type FollowType = ReturnType<typeof followAC>
type UnfollowType = ReturnType<typeof unfollowAC>
type SetUsersType = ReturnType<typeof setUsersAC>
type SetCurrentPageType = ReturnType<typeof setCurrentPageAC>
type SetTotalUsersCountType = ReturnType<typeof setTotalUsersCountAC>
type SetIsFetchingType = ReturnType<typeof setIsFetchingAC>
export type UsersPageType = FollowType | UnfollowType | SetUsersType | SetCurrentPageType | SetTotalUsersCountType | SetIsFetchingType

export const followAC = (userId: number) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId: number) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users: any) => ({ type: SET_USERS, users })
export const setCurrentPageAC = (currentPage: number) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCountAC = (totalUsersCount: number) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount })
export const setIsFetchingAC = (isFetching: boolean) => ({ type: IS_FETCHING, isFetching })

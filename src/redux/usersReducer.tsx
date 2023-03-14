import { Dispatch } from 'redux'
import { usersApi } from '../api/api'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const IS_FETCHING = 'IS-FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS'

export type UserType = { name: string; id: number; photos: { small: string | null; large: string | null }; status: string | null; followed: boolean }
export type UsersType = Array<UserType>
type InitialStateType = { users: UsersType; pageSize: number; totalUsersCount: number; currentPage: number; isFetching: boolean; followingInProgress: number[] }

const initialState: InitialStateType = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
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
    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFollowing ? [...state.followingInProgress, action.userId] : state.followingInProgress.filter((id) => id != action.userId),
      }
    }
    default:
      return state
  }
}

type FollowType = ReturnType<typeof follow>
type UnfollowType = ReturnType<typeof unfollow>
type SetUsersType = ReturnType<typeof setUsers>
type SetCurrentPageType = ReturnType<typeof setCurrentPage>
type SetTotalUsersCountType = ReturnType<typeof setTotalUsersCount>
type SetIsFetchingType = ReturnType<typeof setIsFetching>
type SetIsFollowingType = ReturnType<typeof setIsFollowing>
export type UsersPageType = FollowType | UnfollowType | SetUsersType | SetCurrentPageType | SetTotalUsersCountType | SetIsFetchingType | SetIsFollowingType

export const follow = (userId: number) => ({ type: FOLLOW, userId })
export const unfollow = (userId: number) => ({ type: UNFOLLOW, userId })
export const setUsers = (users: any) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage: number) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = (totalUsersCount: number) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount })
export const setIsFetching = (isFetching: boolean) => ({ type: IS_FETCHING, isFetching })
export const setIsFollowing = (isFollowing: boolean, userId: number) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFollowing, userId })

export const getUsersTC = (currentPage: number, pageSize: number) => (dispatch: Dispatch) => {
  dispatch(setIsFetching(true))
  usersApi.getUsers(currentPage, pageSize).then((res) => {
    dispatch(setUsers(res.items))
    dispatch(setTotalUsersCount(res.totalCount))
    dispatch(setIsFetching(false))
  })
}

export const unfollowTC = (userId: number) => (dispatch: Dispatch) => {
  dispatch(setIsFollowing(true, userId))
  usersApi.follow(userId).then((res: any) => {
    if (res.data.resultCode === 0) {
      dispatch(unfollow(userId))
      dispatch(setIsFollowing(false, userId))
    }
  })
}
export const followTC = (userId: number) => (dispatch: Dispatch) => {
  setIsFollowing(true, userId)
  usersApi.unfollow(userId).then((res: any) => {
    if (res.data.resultCode === 0) {
      dispatch(follow(userId))
      dispatch(setIsFollowing(false, userId))
    }
  })
}

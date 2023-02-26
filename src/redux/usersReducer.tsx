const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

export type UserType = { name: string; id: number; photos: { small: string | null; large: string | null }; status: string | null; followed: boolean }
export type UsersType = Array<UserType>
type InitialStateType = { users: UsersType }

const initialState = {
  users: [],
}

export const usersReducer = (state: InitialStateType = initialState, action: any) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, follow: true }
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
            return { ...u, follow: false }
          }
          return u
        }),
      }
    }
    case SET_USERS: {
      return { ...state, users: [...state.users, ...action.users] }
    }
    default:
      return state
  }
}

type FollowType = ReturnType<typeof followAC>
type UnfollowType = ReturnType<typeof unfollowAC>
type SetUsersType = ReturnType<typeof setUsersAC>
export type UsersPageType = FollowType | UnfollowType | SetUsersType

export const followAC = (userId: number) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId: number) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users: any) => ({ type: SET_USERS, users })

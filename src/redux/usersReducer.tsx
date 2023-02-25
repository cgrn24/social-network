const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

export type UserType = { id: number; photoUrl: string; follow: boolean; fullName: string; status: string; location: { city: string; country: string } }
export type UsersType = Array<UserType>
type InitialStateType = { users: UsersType }

const initialState = {
  users: [
    {
      id: 1,
      photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Alonso_2016.jpg/274px-Alonso_2016.jpg',
      follow: true,
      fullName: 'Jovan',
      status: 'Cool',
      location: { city: 'City 17', country: 'Good country' },
    },
    {
      id: 2,
      photoUrl: 'https://cdn-4.motorsport.com/images/mgl/0mb95oa2/s800/lewis-hamilton-mercedes-1.jpg',
      follow: false,
      fullName: 'Johan',
      status: 'Not Cool',
      location: { city: 'City 17', country: 'Strange country' },
    },
    {
      id: 3,
      photoUrl: 'https://cloudfront-us-east-2.images.arcpublishing.com/reuters/O2Q7N5NEFBNVPGZYCHPTLDF52U.jpg',
      follow: true,
      fullName: 'Iohan',
      status: 'Maybe Cool',
      location: { city: 'City 17', country: 'Cool country' },
    },
  ],
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

import { Dispatch } from 'redux'
import { profileAPI, usersApi } from '../api/api'
import { ProfilePageType } from './state'

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_STATUS = 'SET-STATUS'

let initialState = {
  posts: [
    { id: 1, message: 'Hi, havayu', likesCount: 12 },
    { id: 2, message: 'Its my first yopta?', likesCount: 9 },
  ],
  newPostText: '',
  profile: null,
  status: '',
}

const profileReducer = (state: ProfilePageType = initialState, action: ProfileActionsType) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      }
      const stateCopy = { ...state, posts: [...state.posts, newPost], newPostText: '' }
      return stateCopy
    }
    case UPDATE_NEW_POST_TEXT: {
      return { ...state, newPostText: action.newText }
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile }
    }
    case SET_STATUS: {
      return { ...state, status: action.status }
    }
    default:
      return state
  }
}

type AddPostType = ReturnType<typeof addPostAC>
type UpdateNewPostChangeType = ReturnType<typeof updateNewPostChangeAC>
type SetProfileType = ReturnType<typeof setUserProfile>
type SetStatusType = ReturnType<typeof setStatusAC>
export type ProfileActionsType = AddPostType | UpdateNewPostChangeType | SetProfileType | SetStatusType

export const addPostAC = () => ({ type: ADD_POST } as const)
export const updateNewPostChangeAC = (text: string) => ({ type: UPDATE_NEW_POST_TEXT, newText: text } as const)
export const setUserProfile = (profile: any) => ({ type: SET_USER_PROFILE, profile } as const)
export const setStatusAC = (status: string) => ({ type: SET_STATUS, status } as const)

export const getUserProfileTC = (userId: number | string) => (dispatch: Dispatch) => {
  usersApi.getProfile(userId).then((res) => {
    dispatch(setUserProfile(res.data))
  })
}

export const getUserStatusTC = (userId: number | string) => (dispatch: Dispatch) => {
  profileAPI.getStatus(userId).then((res) => {
    dispatch(setStatusAC(res.data))
  })
}
export const updateUserStatusTC = (status: string) => (dispatch: Dispatch) => {
  profileAPI.updateStatus(status).then((res) => {
    if (res.data.resultCode === 0) {
      dispatch(setStatusAC(res.data))
    }
  })
}

export default profileReducer

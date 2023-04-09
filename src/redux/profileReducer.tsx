import { Dispatch } from 'redux'
import { stopSubmit } from 'redux-form'
import { profileAPI, usersApi } from '../api/api'
import { ProfilePageType, ProfileType } from './state'
import { AppThunkType } from './store'

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_STATUS = 'SET-STATUS'
const DELETE_POST = 'DELETE_POST'
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'

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
        message: action.newPostTest,
        likesCount: 0,
      }
      const stateCopy = { ...state, posts: [...state.posts, newPost], newPostText: '' }
      return stateCopy
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile }
    }
    case SET_STATUS: {
      return { ...state, status: action.status }
    }
    case DELETE_POST:
      return { ...state, posts: state.posts.filter((p) => p.id != action.postId) }
    case SAVE_PHOTO_SUCCESS:
      return { ...state, profile: { ...state.profile, photos: action.photos } }
    default:
      return state
  }
}

type AddPostType = ReturnType<typeof addPostAC>
type SetProfileType = ReturnType<typeof setUserProfile>
type SetStatusType = ReturnType<typeof setStatusAC>
type DeletePostType = ReturnType<typeof deletePostAC>
type SavePhotoType = ReturnType<typeof savePhotoSuccess>
export type ProfileActionsType = AddPostType | SetProfileType | SetStatusType | DeletePostType | SavePhotoType

export const addPostAC = (newPostTest: string) => ({ type: ADD_POST, newPostTest: newPostTest } as const)
export const setUserProfile = (profile: any) => ({ type: SET_USER_PROFILE, profile } as const)
export const setStatusAC = (status: string) => ({ type: SET_STATUS, status } as const)
export const deletePostAC = (postId: number) => ({ type: DELETE_POST, postId } as const)
export const savePhotoSuccess = (photos: any) => ({ type: SAVE_PHOTO_SUCCESS, photos } as const)

export const getUserProfileTC =
  (userId: number): AppThunkType =>
  (dispatch) => {
    usersApi.getProfile(userId).then((res) => {
      dispatch(setUserProfile(res.data))
    })
  }

export const getUserStatusTC =
  (userId: number): AppThunkType =>
  (dispatch) => {
    profileAPI.getStatus(userId).then((res) => {
      dispatch(setStatusAC(res.data))
    })
  }
export const updateUserStatusTC =
  (status: string): AppThunkType =>
  (dispatch) => {
    try {
      profileAPI.updateStatus(status).then((res) => {
        if (res.data.resultCode === 0) {
          dispatch(setStatusAC(status))
        }
      })
    } catch (e) {
      console.log(e)
    }
  }

export const savePhotoTC =
  (file: any): AppThunkType =>
  async (dispatch) => {
    try {
      let response = await profileAPI.savePhoto(file)
      if (response.data.resultCode === 0) {
        debugger
        dispatch(savePhotoSuccess(response.data.data.photos))
      }
    } catch (e) {
      console.log(e)
    }
  }

export const saveProfile =
  (profile: ProfileType): AppThunkType =>
  async (dispatch, getState) => {
    const userId = getState().auth.userId
    const response = await profileAPI.saveProfile(profile)
    if (userId) {
      if (response.data.resultCode === 0) {
        dispatch(getUserProfileTC(userId))
      } else {
        dispatch(stopSubmit('edit-profile', { _error: response.data.messages[0] }))
        return Promise.reject(response.data.messages[0])
      }
    }
  }

export default profileReducer

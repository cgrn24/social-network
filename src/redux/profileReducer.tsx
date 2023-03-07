import { ProfilePageType } from './state'

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET-USER-PROFILE'

let initialState = {
  posts: [
    { id: 1, message: 'Hi, havayu', likesCount: 12 },
    { id: 2, message: 'Its my first yopta?', likesCount: 9 },
  ],
  newPostText: '',
  profile: null,
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
    default:
      return state
  }
}

type AddPostType = ReturnType<typeof addPostAC>
type UpdateNewPostChangeType = ReturnType<typeof updateNewPostChangeAC>
type SetProfileType = ReturnType<typeof setUserProfile>
export type ProfileActionsType = AddPostType | UpdateNewPostChangeType | SetProfileType

export const addPostAC = () => ({ type: ADD_POST } as const)
export const updateNewPostChangeAC = (text: string) => ({ type: UPDATE_NEW_POST_TEXT, newText: text } as const)
export const setUserProfile = (profile: any) => ({ type: SET_USER_PROFILE, profile } as const)

export default profileReducer

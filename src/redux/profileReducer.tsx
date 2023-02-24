import { ProfilePageType } from './state'

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
  posts: [
    { id: 1, message: 'Hi, havayu', likesCount: 12 },
    { id: 2, message: 'Its my first yopta?', likesCount: 9 },
  ],
  newPostText: '',
}

const profileReducer = (state: ProfilePageType = initialState, action: AddPostType | UpdateNewPostChangeType) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      }
      const stateCopy = { ...state }
      stateCopy.posts = [...state.posts]
      stateCopy.posts.push(newPost)
      stateCopy.newPostText = ''
      return stateCopy
    }
    case UPDATE_NEW_POST_TEXT: {
      const stateCopy = { ...state }
      stateCopy.newPostText = action.newText
      return stateCopy
    }
    default:
      return state
  }
}

type AddPostType = ReturnType<typeof addPostAC>
type UpdateNewPostChangeType = ReturnType<typeof updateNewPostChangeAC>
export type ProfileActionsType = AddPostType | UpdateNewPostChangeType

export const addPostAC = () => ({ type: ADD_POST } as const)
export const updateNewPostChangeAC = (text: string) => ({ type: UPDATE_NEW_POST_TEXT, newText: text } as const)

export default profileReducer

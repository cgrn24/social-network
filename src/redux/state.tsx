import { StringLiteralLike } from 'typescript'

export type PostsType = {
  id?: number
  message: string
  likesCount?: number
}

export type DialogsType = {
  id: number
  name: string
}

export type MessagesType = {
  id: number
  message: string
}

export type FriendType = {
  id: number
  name: string
  avatar: string
}

export type ProfilePageType = {
  posts: Array<PostsType>
  newPostText: string
}

export type DialogsPageType = {
  dialogs: Array<DialogsType>
  messages: Array<MessagesType>
  newMessageBody: string
}

export type SidebarType = {
  friendsData: Array<FriendType>
}

export type RootStateType = {
  profilePage: ProfilePageType
  dialogsPage: DialogsPageType
  sidebar: SidebarType
}

// export type AddPostType = {
//   addPost: (postMessage: string) => void
// }

// export type StateType = {
//   state: RootStateType
//   addPost: AddPostType
// }

// export const state: RootStateType = {
//   profilePage: {
//     posts: [
//       { id: 1, message: 'Hi, havayu', likesCount: 12 },
//       { id: 2, message: 'Its my first yopta?', likesCount: 9 },
//     ],
//     newPostText: '',
//   },
//   dialogsPage: {
//     dialogs: [
//       { id: 1, name: 'Zhmykh' },
//       { id: 2, name: 'Valera' },
//       { id: 3, name: 'Pozhiloy' },
//       { id: 4, name: 'Arsen' },
//     ],
//     messages: [
//       { id: 1, message: 'Hi' },
//       { id: 2, message: 'How are you? Havaesh?' },
//       { id: 3, message: 'Yopta' },
//     ],
//     newMessageBody: '',
//   },
//   sidebar: {},
// }

// export const addPost = (postText: string) => {
//   let newPost: PostsType = {
//     id: 3,
//     message: state.profilePage.newPostText,
//     likesCount: 100,
//   }
//   state.profilePage.posts.push(newPost)
//   state.profilePage.newPostText = ''
//   rerenderEntireTree(state)
// }

// export const updateNewPostText = (newText: string) => {
//   state.profilePage.newPostText = newText
//   rerenderEntireTree(state)
// }

// let rerenderEntireTree = () => {

// }

// export const subscribe = (observer) = {
//   rerenderEntireTree(observer)
// }

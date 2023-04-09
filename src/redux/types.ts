export type AuthType = {
  userId: number | null
  email: string | null
  login: string | null
  isAuth: boolean
  captcha: string | null
}
export type AppType = {
  initialized: boolean
}

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

export type ProfileType = {
  aboutMe: string
  userId: number
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  contacts: {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
  }
  photos: {
    small: string
    large: string
  }
}

export type ProfilePageType = {
  posts: Array<PostsType>
  newPostText: string
  profile: ProfileType | null
  status: string
}

export type DialogsPageType = {
  dialogs: Array<DialogsType>
  messages: Array<MessagesType>
}

export type SidebarType = {
  friendsData: Array<FriendType>
}

export type RootStateType = {
  profilePage: ProfilePageType
  dialogsPage: DialogsPageType
  sidebar: SidebarType
}

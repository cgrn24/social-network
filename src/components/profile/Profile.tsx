import React from 'react'
import { ProfileType } from '../../redux/state'
import { MyPostsContainer } from './myposts/MyPostsContainer'
import p from './Profile.module.css'
import { ProfileInfo } from './profileinfo/ProfileInfo'

type ProfileComponentType = {
  profile: ProfileType
  status: string
  updateStatus: (status: string) => void
  userId: number
  isAuth: boolean
  isOwner: boolean
  savePhoto: (photoFile: any) => void
  saveProfile: (profile: ProfileType) => void
}

export const Profile = (props: ProfileComponentType) => {
  return (
    <div>
      <ProfileInfo
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
        isOwner={props.isOwner}
        savePhoto={props.savePhoto}
        saveProfile={props.saveProfile}
      />
      <MyPostsContainer />
    </div>
  )
}

import React from 'react'
import { ProfileType } from '../../redux/types'
import { MyPostsContainer } from './myposts/MyPostsContainer'
import p from './Profile.module.css'
import { ProfileInfo } from './profileinfo/ProfileInfo'

type ProfileComponentType = {
  profile: ProfileType | null
  status: string
  updateStatus: (status: string) => void
  userId: number
  isAuth: boolean
  isOwner: boolean
  savePhoto: (photoFile: any) => void
  saveProfile: (value: Omit<ProfileType, 'userId' | 'photos'>) => Promise<any>
}

export const Profile = (props: ProfileComponentType) => {
  return (
    <div className={p.content}>
      <div className={p.profileTop}>
        <ProfileInfo
          profile={props.profile}
          status={props.status}
          updateStatus={props.updateStatus}
          isOwner={props.isOwner}
          savePhoto={props.savePhoto}
          saveProfile={props.saveProfile}
        />
      </div>
      <MyPostsContainer />
    </div>
  )
}

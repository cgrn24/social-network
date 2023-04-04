import React, { ChangeEvent } from 'react'
import { ProfileType } from '../../../redux/state'
import p from './ProfileInfo.module.css'
import { ProfileStatus } from './ProfileStatus'
import userPhoto from '../../../assets/ava.jpg'

type ProfileInfoType = {
  profile: ProfileType
  status: string
  updateStatus: (status: string) => void
  isOwner: boolean
  savePhoto: (photoFile: any) => void
}

export const ProfileInfo = (props: ProfileInfoType) => {
  const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files!.length) {
      props.savePhoto(e.target.files![0])
    }
  }
  if (!props.profile) {
    return <img src='https://media.tenor.com/RVvnVPK-6dcAAAAM/reload-cat.gif' />
  }
  return (
    <div className={p.infoBlock}>
      <div>
        <img src='https://i.pinimg.com/originals/15/25/98/1525982651a585ec0c993b9c7d36abc9.jpg'></img>
      </div>
      <div className={p.descriptionBlock}>
        <img src={props.profile.photos.large || userPhoto} className={p.mainPhoto} />
        {props.isOwner && <input type='file' onChange={onMainPhotoSelected} />}
        <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
      </div>
    </div>
  )
}

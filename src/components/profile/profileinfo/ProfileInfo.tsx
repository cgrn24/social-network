import React from 'react'
import { ProfileType } from '../../../redux/state'
import p from './ProfileInfo.module.css'

type ProfileInfoType = {
  profile: ProfileType
}

export const ProfileInfo = (props: ProfileInfoType) => {
  if (!props.profile) {
    return <img src='https://media.tenor.com/RVvnVPK-6dcAAAAM/reload-cat.gif' />
  }
  return (
    <div className={p.infoBlock}>
      <div>
        <img src='https://i.pinimg.com/originals/15/25/98/1525982651a585ec0c993b9c7d36abc9.jpg'></img>
      </div>
      <div className={p.descriptionBlock}>
        <img src={props.profile.photos.large} />
        ava + descr
      </div>
    </div>
  )
}

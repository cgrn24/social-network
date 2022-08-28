import React from 'react';
import p from './Profileinfo.module.css'

export const ProfileInfo = () => {
  return (
    <div className={p.infoBlock}>
      <div>
        <img src='https://i.pinimg.com/originals/15/25/98/1525982651a585ec0c993b9c7d36abc9.jpg'></img>
      </div>
      <div className={p.descriptionBlock}>
        ava + descr
      </div>
    </div>
  )
}
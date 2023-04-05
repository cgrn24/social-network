import React, { ChangeEvent, useState } from 'react'
import { ProfileType } from '../../../redux/state'
import p from './ProfileInfo.module.css'
import { ProfileStatus } from './ProfileStatus'
import userPhoto from '../../../assets/ava.jpg'
import { ProfileDataFormReduxForm } from './ProfileDataForm'
import { saveProfile } from '../../../redux/profileReducer'

type ProfileInfoType = {
  profile: ProfileType
  status: string
  updateStatus: (status: string) => void
  isOwner: boolean
  savePhoto: (photoFile: any) => void
  saveProfile: (profile: ProfileType) => void
}

export const ProfileInfo = (props: ProfileInfoType) => {
  let [editMode, setEditMode] = useState(false)
  const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files!.length) {
      props.savePhoto(e.target.files![0])
    }
  }
  if (!props.profile) {
    return <img src='https://media.tenor.com/RVvnVPK-6dcAAAAM/reload-cat.gif' />
  }
  const onSubmit = async (formData: ProfileType) => {
    const res = await saveProfile(formData)
    setEditMode(false)
  }
  return (
    <div className={p.infoBlock}>
      <div>
        <img src='https://i.pinimg.com/originals/15/25/98/1525982651a585ec0c993b9c7d36abc9.jpg'></img>
      </div>
      <div className={p.descriptionBlock}>
        <img src={props.profile.photos.large || userPhoto} className={p.mainPhoto} />
        {props.isOwner && <input type='file' onChange={onMainPhotoSelected} />}
        {editMode ? (
          //@ts-ignore
          <ProfileDataFormReduxForm initialValues={props.profile} onSubmit={onSubmit} />
        ) : (
          <ProfileData
            goToEditMode={() => {
              setEditMode(true)
            }}
            profile={props.profile}
            isOwner={props.isOwner}
          />
        )}
        <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
      </div>
    </div>
  )
}

const ProfileData = ({ profile, isOwner, goToEditMode }: any) => {
  return (
    <div>
      {isOwner && (
        <div>
          <button onClick={goToEditMode}>edit</button>
        </div>
      )}
      <div>
        <b>Full name</b>: {profile.fullName}
      </div>
      <div>
        <b>Looking for a job</b>: {profile.lookingForAJob ? 'yes' : 'no'}
      </div>
      {profile.lookingForAJob && (
        <div>
          <b>My professional skills</b>: {profile.lookingForAJobDescription}
        </div>
      )}

      <div>
        <b>About me</b>: {profile.aboutMe}
      </div>
      <div>
        <b>Contacts</b>:{' '}
        {Object.keys(profile.contacts).map((key) => {
          return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
        })}
      </div>
    </div>
  )
}

const Contact = ({ contactTitle, contactValue }: any) => {
  return (
    <div className={p.contact}>
      <b>{contactTitle}</b>: {contactValue}
    </div>
  )
}

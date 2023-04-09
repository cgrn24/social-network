import { ChangeEvent, FC, useState } from 'react'
import s from './ProfileInfo.module.css'
import logo from '../../../assets/ava.jpg'
import { ProfileType } from '../../../redux/types'
import Preloader from '../../common/Preloader/Preloader'
import { ProfileStatus } from './ProfileStatus'
import { ProfileDataReduxForm } from './ProfileDataForm'

type ProfileInfoType = {
  profile: ProfileType | null
  status: string
  updateStatus: (status: string) => void
  isOwner: boolean
  savePhoto: (file: File) => void
  saveProfile: (profile: Omit<ProfileType, 'userId' | 'photos'>) => Promise<any>
}
type FormDataType = {
  [key: string]: string
}
export type FormDataFullType = FormDataType & {
  lookingForAJob: boolean
}
export const ProfileInfo: FC<ProfileInfoType> = ({ profile, status, isOwner, savePhoto, updateStatus, saveProfile }) => {
  const [editMode, setEditMode] = useState(false)
  const onSubmit = (formData: FormDataFullType) => {
    const { aboutMe, fullName, lookingForAJob, github, instagram, facebook, twitter, website, youtube, mainLink, vk, lookingForAJobDescription } = formData

    const newProfile: Omit<ProfileType, 'userId' | 'photos'> = {
      fullName: fullName || profile?.fullName || '',
      lookingForAJob: lookingForAJob || false,
      lookingForAJobDescription: (lookingForAJobDescription || profile?.lookingForAJobDescription) ?? '',
      aboutMe: aboutMe ? aboutMe : '',
      contacts: {
        github: github ?? profile?.contacts.github ?? null,
        instagram: instagram ?? profile?.contacts.instagram ?? null,
        facebook: facebook ?? profile?.contacts.facebook ?? null,
        twitter: twitter ?? profile?.contacts.twitter ?? null,
        vk: vk ?? profile?.contacts.vk ?? null,
        website: website ?? profile?.contacts.website ?? null,
        youtube: youtube ?? profile?.contacts.website ?? null,
        mainLink: mainLink ?? profile?.contacts.mainLink ?? null,
      },
    }
    saveProfile(newProfile).then(() => {
      setEditMode(false)
    })
  }
  const onMainPhotoUpdate = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      savePhoto(e.target.files[0])
    }
  }
  if (!profile) {
    return <Preloader />
  }
  return (
    <div className={s.block}>
      <div className={s.photoContainer}>
        <img src={profile.photos.large || logo} alt='avatar' className={s.mainPhoto} />
        {isOwner && <input type={'file'} onChange={onMainPhotoUpdate}></input>}
        <div className={s.statusBlock}>
          <span className={s.statusSpan}>Status:</span>
          <ProfileStatus status={status} updateStatus={updateStatus} />
        </div>
      </div>
      <div className={s.descriptionBlock}>
        {editMode ? (
          <ProfileDataReduxForm profile={profile} onSubmit={onSubmit} />
        ) : (
          <ProfileData profile={profile} setEditMode={setEditMode} isOwner={isOwner} />
        )}
      </div>
    </div>
  )
}

type ProfileDataType = {
  profile: ProfileType
  isOwner: boolean
  setEditMode: (value: boolean) => void
}
const ProfileData = ({ profile, setEditMode, isOwner }: ProfileDataType) => {
  return (
    <div className={s.form}>
      <div className={s.infoField}>
        <b>Full name:</b> {profile.fullName}
      </div>

      <div className={s.infoField}>
        <b>Looking for a job: </b>
        {profile.lookingForAJob ? <span>{profile.lookingForAJobDescription}</span> : <span>no</span>}
      </div>
      <div>
        <b>Contacts:</b>
        {profile.contacts.facebook && (
          <p>
            <b>Facebook:</b> {profile.contacts.facebook}
          </p>
        )}
        {profile.contacts.website && (
          <p>
            <b>Web-site:</b> {profile.contacts.website}
          </p>
        )}
        {profile.contacts.vk && (
          <p>
            <b>Vk:</b> {profile.contacts.vk}
          </p>
        )}
        {profile.contacts.twitter && (
          <p>
            <b>Twitter:</b> {profile.contacts.twitter}
          </p>
        )}
        {profile.contacts.instagram && (
          <p>
            <b>Instagram:</b> {profile.contacts.instagram}
          </p>
        )}
        {profile.contacts.youtube && (
          <p>
            <b>YouTube:</b> {profile.contacts.youtube}
          </p>
        )}
        {profile.contacts.github && (
          <p>
            <b>GitHub:</b> {profile.contacts.github}
          </p>
        )}
        {profile.contacts.mainLink && (
          <p>
            <b>MainLink:</b> {profile.contacts.mainLink}
          </p>
        )}
        <div>
          {isOwner && (
            <button
              onClick={() => {
                setEditMode(true)
              }}
            >
              edit
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

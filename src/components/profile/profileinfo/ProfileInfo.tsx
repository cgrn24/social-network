import { ChangeEvent, FC, useState } from 'react'
import s from './ProfileInfo.module.css'
import logo from '../../../assets/ava.jpg'
import { ProfileTypeWN } from '../../../redux/state'
import Preloader from '../../common/Preloader/Preloader'
import { ProfileStatus } from './ProfileStatus'
import { ProfileDataReduxForm } from './ProfileDataForm'

type ProfileInfoType = {
  profile: ProfileTypeWN | null
  status: string
  updateStatus: (status: string) => void
  isOwner: boolean
  savePhoto: (file: File) => void
  saveProfile: (profile: Omit<ProfileTypeWN, 'userId' | 'photos'>) => Promise<any>
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
    const { fullName, lookingForAJob, github, instagram, facebook, twitter, website, youtube, mainLink, vk, lookingForAJobDescription } = formData

    const newProfile: Omit<ProfileTypeWN, 'userId' | 'photos'> = {
      fullName: fullName || profile?.fullName || '',
      lookingForAJob: lookingForAJob || false,
      lookingForAJobDescription: (lookingForAJobDescription || profile?.lookingForAJobDescription) ?? '',
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
    <div>
      <img src={profile.photos.large || logo} alt='avatar' className={s.profile_image} />
      {isOwner && <input type={'file'} onChange={onMainPhotoUpdate} />}
      <ProfileStatus status={status} updateStatus={updateStatus} />
      {editMode ? (
        <ProfileDataReduxForm profile={profile} onSubmit={onSubmit} />
      ) : (
        <ProfileData profile={profile} setEditMode={setEditMode} isOwner={isOwner} />
      )}
    </div>
  )
}

type ProfileDataType = {
  profile: ProfileTypeWN
  isOwner: boolean
  setEditMode: (value: boolean) => void
}
const ProfileData = ({ profile, setEditMode, isOwner }: ProfileDataType) => {
  return (
    <>
      {isOwner && (
        <button
          onClick={() => {
            console.log('ture')
            setEditMode(true)
          }}
        >
          edit
        </button>
      )}
      <h2>{profile.fullName}</h2>

      <p>
        <b>Looking for a job: </b>
        {profile.lookingForAJob ? <span>{profile.lookingForAJobDescription}</span> : <span>no</span>}
      </p>
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
      </div>
    </>
  )
}

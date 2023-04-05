import React, { FC } from 'react'
import s from './ProfileInfo.module.css'
import { createField, Input, Textarea } from '../../common/FormsControls/FormsControls'
import { InjectedFormProps, reduxForm } from 'redux-form'
import style from '../../common/FormsControls/FormsControls.module.css'
import { ProfileType } from '../../../redux/state'

export type ProfileDataFormType = {
  fullName: string
  lookingForAJob: boolean
  lookingForAJobDescription: string
  aboutMe: string
}

const ProfileDataForm: FC<InjectedFormProps<ProfileDataFormType>> = ({ handleSubmit, initialValues, error }) => {
  const profile = initialValues as ProfileType
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <button>save</button>
      </div>
      {error && <div className={style.formSummaryError}>{error}</div>}
      <div>
        <b>Full name</b>: {createField('fullName', Input, { placeholder: 'Full name' })}
      </div>
      <div>
        <b>Looking for a job</b>:{createField('lookingForAJob', Input, { type: 'checkbox' })}
      </div>
      <div>
        <b>My professional skills</b>:{createField('lookingForAJobDescription', Textarea, { placeholder: 'My professional skills' })}
      </div>
      <div>
        <b>About me</b>: {createField('aboutMe', Textarea, { placeholder: 'About me' })}
      </div>
      <div>
        <b>Contacts</b>:{' '}
        {Object.keys(profile ? profile.contacts : '').map((key) => (
          <div key={key}>
            <b>{key}</b>:{createField('contacts.' + key, Input, { placeholder: key })}{' '}
          </div>
        ))}
      </div>
    </form>
  )
}

export const ProfileDataFormReduxForm = reduxForm<ProfileDataFormType>({ form: 'editProfile' })(ProfileDataForm)

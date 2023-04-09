import { FC } from 'react'
import { InjectedFormProps, reduxForm } from 'redux-form'
import { ProfileType } from '../../../redux/types'
import { createField, Input, Textarea } from '../../common/FormsControls/FormsControls'
import { FormDataFullType } from './ProfileInfo'

type ProfileDataFormType = {
  profile: ProfileType
}
const ProfileDataForm: FC<InjectedFormProps<FormDataFullType, ProfileDataFormType> & ProfileDataFormType> = ({ profile, handleSubmit, ...props }) => {
  console.log(profile)

  return (
    <form onSubmit={handleSubmit}>
      {props.error && <div style={{ color: 'red' }}>{props.error}</div>}
      <b>Full Name :</b>
      {createField(profile.fullName, 'fullName', [], Input)}

      <p>
        <b>Looking for a job: </b>
        {createField('Are you looking for a job?', 'lookingForAJob', [], Input, { type: 'checkbox' })}
      </p>
      <p>
        <b>Looking for a job description: </b>
        {createField('Are you looking for a job?', 'lookingForAJobDescription', [], Textarea, { type: 'checkbox' })}
      </p>
      <p>
        <b>About me:</b> {createField('About me', 'aboutMe', [], Input)}
      </p>
      <div>
        <b>Contacts:</b>

        <p>
          <b>Facebook:</b>
          {createField('Facebook', 'facebook', [], Input)}
        </p>

        <p>
          <b>Web-site:</b>
          {createField(profile.contacts.website ?? 'Website', 'website', [], Input)}
        </p>

        <p>
          <b>Vk:</b> {createField(profile.contacts.vk ?? 'VK', 'vk', [], Input)}
        </p>

        <p>
          <b>Twitter:</b>
          {createField(profile.contacts.twitter ?? 'Twitter', 'twitter', [], Input)}
        </p>

        <p>
          <b>Instagram:</b>
          {createField(profile.contacts.instagram ?? 'Instagram', 'instagram', [], Input)}
        </p>

        <p>
          <b>YouTube:</b>
          {createField(profile.contacts.youtube ?? 'YouTube', 'youTube', [], Input)}
        </p>

        <p>
          <b>GitHub:</b>
          {createField(profile.contacts.github ?? 'GitHub', 'gitHub', [], Input)}
        </p>

        <p>
          <b>MainLink:</b>
          {createField(profile.contacts.mainLink ?? 'Main link', 'mainLink', [], Input)}
        </p>
        <div>
          <button>save</button>
        </div>
      </div>
    </form>
  )
}

export const ProfileDataReduxForm = reduxForm<FormDataFullType, ProfileDataFormType>({
  form: 'edit-profile',
  enableReinitialize: true,
})(ProfileDataForm)

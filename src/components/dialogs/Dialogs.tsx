import React from 'react'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { DialogsType, MessagesType } from '../../redux/types'
import { maxLengthCreator, required } from '../../utils/validators/validators'
import { Textarea } from '../common/FormsControls/FormsControls'
import { DialogItem } from './DialogItem/DialogItem'
import s from './Dialogs.module.css'
import { Message } from './Message/Message'

type DialogsPageType = {
  isAuth: boolean
  dialogs: Array<DialogsType>
  messages: Array<MessagesType>
  sendMessage: (newMessageBody: string) => void
}

type FormDataType = {
  newMessageBody: string
}

export const Dialogs = ({ dialogs, messages, sendMessage, isAuth }: DialogsPageType) => {
  let dialogsElements = dialogs.map((d) => <DialogItem name={d.name} id={d.id} key={d.id} />)
  let messagesElements = messages.map((m) => <Message message={m.message} key={m.id} />)
  const addNewMessage = (values: FormDataType) => {
    sendMessage(values.newMessageBody)
  }
  console.log(isAuth)

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>

      <div className={s.messages}>{messagesElements}</div>
      <AddMessageReduxForm onSubmit={addNewMessage} />
    </div>
  )
}
const maxLength50 = maxLengthCreator(50)
const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={s.form}>
        <Field component={Textarea} validate={[required, maxLength50]} placeholder='Enter your message' name='newMessageBody' />
      </div>
      <div className={s.form}>
        <button>Send message</button>
      </div>
    </form>
  )
}

const AddMessageReduxForm = reduxForm<FormDataType>({ form: 'dialogAddMessageForm' })(AddMessageForm)

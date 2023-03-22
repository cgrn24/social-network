import React, { ChangeEvent, ChangeEventHandler } from 'react'
import { Redirect } from 'react-router-dom'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { DialogsType, MessagesType } from '../../redux/state'
import { DialogItem } from './DialogItem/DialogItem'
import s from './Dialogs.module.css'
import { Message } from './Message/Message'

type DialogsInpageType = {
  dialogs: Array<DialogsType>
  messages: Array<MessagesType>
}

type StateDialogsType = {
  dialogsPage: DialogsInpageType
  sendMessage: (message: string) => void
  isAuth: boolean
}

type FormDataType = {
  newMessageBody: string
}

export const Dialogs = (props: StateDialogsType) => {
  let dialogsElements = props.dialogsPage.dialogs.map((d) => <DialogItem name={d.name} id={d.id} />)
  let messagesElements = props.dialogsPage.messages.map((m) => <Message message={m.message} />)
  const addNewMessage = (values: FormDataType) => {
    props.sendMessage(values.newMessageBody)
  }
  if (!props.isAuth) return <Redirect to={'/login'} />
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>

      <div className={s.messages}>{messagesElements}</div>
      <AddMessageReduxForm onSubmit={addNewMessage} />
    </div>
  )
}

const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field component={'textarea'} name={'newMessageBody'} placeholder='Enter your message'></Field>
      <button>Send</button>
    </form>
  )
}

const AddMessageReduxForm = reduxForm<FormDataType>({ form: 'dialogsAddMessageForm' })(AddMessageForm)

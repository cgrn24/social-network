import React, { ChangeEvent, ChangeEventHandler } from 'react'
import { NavLink } from 'react-router-dom'
import { sendMessageAC, updateNewMessageAC } from '../../redux/dialogsReducer'
import { DialogsType, MessagesType } from '../../redux/state'
import { DialogItem } from './DialogItem/DialogItem'
import s from './Dialogs.module.css'
import { Message } from './Message/Message'

type DialogsInpageType = {
  dialogs: Array<DialogsType>
  messages: Array<MessagesType>
  newMessageBody: string
}

type StateDialogsType = {
  dialogsPage: DialogsInpageType
  onSendMessageClick: () => void
  onNewMessageChange: (body: string) => void
}

export const Dialogs = (props: StateDialogsType) => {
  let newMessageBody = props.dialogsPage.newMessageBody
  let dialogsElements = props.dialogsPage.dialogs.map((d) => <DialogItem name={d.name} id={d.id} />)
  let messagesElements = props.dialogsPage.messages.map((m) => <Message message={m.message} />)
  let onSendMessageClick = () => {
    props.onSendMessageClick()
  }
  let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const body = e.target.value
    props.onNewMessageChange(body)
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        {messagesElements}
        <div>
          <div>
            <div>
              <textarea onChange={onNewMessageChange} value={newMessageBody} placeholder='Enter your message'></textarea>
            </div>
          </div>
          <div>
            <button onClick={onSendMessageClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  )
}

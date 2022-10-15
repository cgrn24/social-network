import React from 'react'
import { NavLink } from 'react-router-dom'
import { DialogsPageType, DialogsType, MessagesType } from '../../redux/state'
import { DialogItem } from './DialogItem/DialogItem'
import s from './Dialogs.module.css'
import { Message } from './Message/Message'

// type UserType = {
//   id: number
//   name: string
// }

// type MessageType = {
//   message: string
// }

// const DialogItem: React.FC<UserType> = (props) => {
//     return (
//         <div className={s.dialogs + '' + s.active}>
//             <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
//         </div>
//     )
// }

// const Message: React.FC<MessageType> = (props) => {
//     return (
//         <div>{props.message}</div>
//     )
// }

type DialogsInpageType = {
  dialogs: Array<DialogsType>
  messages: Array<MessagesType>
  newMessageBody: string
}

type StateDialogsType = {
  state: DialogsInpageType
}

export const Dialogs = (props: StateDialogsType) => {
  // let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
  // let messagesElements = state.messages.map(m => <Message message={m.message} />)
  // let newMessageBody = state.newMessageBody

  // let onSendMessageClick = () => {
  //     props.store.dispatch(sendMessageCreator())

  // }

  // let onNewMessageChange = (e) => {
  //     let body = e.target.value
  //     props.store.dispatch(updateNewMessageBodyCreator(body))

  // }

  let dialogsElements = props.state.dialogs.map((d) => <DialogItem name={d.name} id={d.id} />)
  let messagesElements = props.state.messages.map((m) => <Message message={m.message} />)

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        {messagesElements}
        <div>
          <div>
            <textarea placeholder='Enter your message'></textarea>
          </div>
          <div>
            <button>Send</button>
          </div>
        </div>
      </div>
    </div>
  )
}

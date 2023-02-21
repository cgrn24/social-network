import React, { ChangeEvent, ChangeEventHandler } from 'react'
import { NavLink } from 'react-router-dom'
import { sendMessageAC, updateNewMessageAC } from '../../redux/dialogsReducer'
import { StoreType } from '../../redux/store'
import { Dialogs } from './Dialogs'

type DialogsContainerType = {
  store: StoreType
}

export const DialogsContainer = (props: DialogsContainerType) => {
  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageAC())
  }
  let onNewMessageChange = (body: string) => {
    props.store.dispatch(updateNewMessageAC(body))
  }

  return <Dialogs onSendMessageClick={onSendMessageClick} onNewMessageChange={onNewMessageChange} state={props.store.getState().dialogsPage} />
}

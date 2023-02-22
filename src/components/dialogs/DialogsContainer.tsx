import React, { ChangeEvent, ChangeEventHandler } from 'react'
import { connect } from 'react-redux'
import { sendMessageAC, updateNewMessageAC } from '../../redux/dialogsReducer'
import { ActionsType } from '../../redux/store'
import { Dialogs } from './Dialogs'

const mapStateToProps = (state: any) => {
  return {
    dialogsPage: state.dialogsPage,
  }
}
const mapDispatchToProps = (dispatch: (action: ActionsType) => void) => {
  return {
    onSendMessageClick: () => {
      dispatch(sendMessageAC())
    },
    onNewMessageChange: (body: string) => {
      dispatch(updateNewMessageAC(body))
    },
  }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

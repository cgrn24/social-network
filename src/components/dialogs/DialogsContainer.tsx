import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { AuthRedirect } from '../../hoc/AuthRedirect'
import { sendMessageAC } from '../../redux/dialogsReducer'
import { AppDispatch, RootStoreType } from '../../redux/store'
import { Dialogs } from './Dialogs'

const mapStateToProps = (state: RootStoreType) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    isAuth: state.auth.isAuth,
  }
}
const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    sendMessage: (newMessageBody: string) => {
      dispatch(sendMessageAC(newMessageBody))
    },
  }
}
export const DialogsContainer = compose<React.ComponentType>(connect(mapStateToProps, mapDispatchToProps), AuthRedirect, withRouter)(Dialogs)

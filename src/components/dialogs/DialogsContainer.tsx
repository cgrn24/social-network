import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { AuthRedirect } from '../../hoc/AuthRedirect'
import { sendMessageAC } from '../../redux/dialogsReducer'
import { ActionsType } from '../../redux/store'
import { Dialogs } from './Dialogs'

const mapStateToProps = (state: any) => {
  return {
    dialogsPage: state.dialogsPage,
  }
}
const mapDispatchToProps = (dispatch: (action: ActionsType) => void) => {
  return {
    sendMessage: (newMessageBody: string) => {
      dispatch(sendMessageAC(newMessageBody))
    },
  }
}

export default compose<React.ComponentType>(connect(mapStateToProps, mapDispatchToProps), AuthRedirect)(Dialogs)

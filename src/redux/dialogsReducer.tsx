import { DialogsPageType } from './types'

const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
  dialogs: [
    { id: 1, name: 'Zhmykh' },
    { id: 2, name: 'Valera' },
    { id: 3, name: 'Pozhiloy' },
    { id: 4, name: 'Arsen' },
  ],
  messages: [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How are you? Havaesh?' },
    { id: 3, message: 'Yopta' },
  ],
}

const dialogsReducer = (state: DialogsPageType = initialState, action: DialogsActionsType) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      let body = action.newMessageBody
      return { ...state, messages: [...state.messages, { id: 5, message: body }] }
    }
    default:
      return state
  }
}

type sendMessageACType = ReturnType<typeof sendMessageAC>
export type DialogsActionsType = sendMessageACType

export const sendMessageAC = (newMessageBody: string) => ({ type: SEND_MESSAGE, newMessageBody: newMessageBody } as const)

export default dialogsReducer

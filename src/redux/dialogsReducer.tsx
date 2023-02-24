import { DialogsPageType } from './state'

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSGE_BODY'
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
  newMessageBody: '',
}

const dialogsReducer = (state: DialogsPageType = initialState, action: sendMessageACType | updateNewMessageACType) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY: {
      return { ...state, newMessageBody: action.body }
    }
    case SEND_MESSAGE: {
      let body = state.newMessageBody
      return { ...state, messages: [...state.messages, { id: 5, message: body }], newMessageBody: '' }
    }
    default:
      return state
  }
}

type sendMessageACType = ReturnType<typeof sendMessageAC>
type updateNewMessageACType = ReturnType<typeof updateNewMessageAC>
export type DialogsActionsType = sendMessageACType | updateNewMessageACType

export const sendMessageAC = () => ({ type: SEND_MESSAGE } as const)
export const updateNewMessageAC = (body: string) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body } as const)

export default dialogsReducer

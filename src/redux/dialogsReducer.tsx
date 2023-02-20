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
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body
      return state
    case SEND_MESSAGE:
      let body = state.newMessageBody
      state.newMessageBody = ''
      state.messages.push({ id: 5, message: body })
      return state
    default:
      return state
  }
}

type sendMessageACType = ReturnType<typeof sendMessageAC>
type updateNewMessageACType = ReturnType<typeof updateNewMessageAC>

export const sendMessageAC = () => ({ type: SEND_MESSAGE } as const)
export const updateNewMessageAC = (body: string) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body } as const)

export default dialogsReducer

import { Dispatch } from 'redux'
import { authAPI } from '../api/api'
import { AuthType } from './state'

const SET_USER_DATA = 'SET-USER-DATA'

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
}

export const authReducer = (state: AuthType = initialState, action: AuthActionsType) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      }
    default:
      return state
  }
}

type SetUserType = ReturnType<typeof setUserData>
export type AuthActionsType = SetUserType

export const setUserData = (userId: string | number | null, email: string | null, login: string | null) => ({
  type: SET_USER_DATA,
  data: { userId, email, login },
})

export const getUserDataTC = () => (dispatch: Dispatch) => {
  authAPI.me().then((res) => {
    if (res.data.resultCode === 0) {
      const { id, login, email } = res.data.data
      dispatch(setUserData(id, email, login))
    }
  })
}

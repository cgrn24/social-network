import { Dispatch } from 'redux'
import { stopSubmit } from 'redux-form'
import { ThunkDispatch } from 'redux-thunk'
import { appDispatch } from '..'
import { authAPI } from '../api/api'
import { AuthType, RootStateType } from './state'
import { ActionsType } from './store'

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
        ...action.payload,
      }
    default:
      return state
  }
}

type SetUserType = ReturnType<typeof setUserData>
export type AuthActionsType = SetUserType

export const setUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth },
})

export const getUserDataTC = () => (dispatch: Dispatch) => {
  return authAPI.me().then((res) => {
    if (res.data.resultCode === 0) {
      const { id, login, email } = res.data.data
      dispatch(setUserData(id, email, login, true))
    }
  })
}

export const loginTC =
  (email: string, password: string, rememberMe?: boolean) => (dispatch: ThunkDispatch<RootStateType, unknown, ReturnType<typeof stopSubmit>>) => {
    authAPI.login(email, password, rememberMe).then((res) => {
      if (res.data.resultCode === 0) {
        dispatch(getUserDataTC())
      } else {
        const message = res.data.messages.lenght > 0 ? res.data.messages[0] : 'Some error'
        dispatch(stopSubmit('login', { _error: message }))
      }
    })
  }
export const logoutTC = () => (dispatch: Dispatch) => {
  authAPI.logout().then((res) => {
    if (res.data.resultCode === 0) {
      dispatch(setUserData(null, null, null, false))
    }
  })
}

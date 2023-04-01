import { Dispatch } from 'redux'
import { stopSubmit } from 'redux-form'
import { ThunkDispatch } from 'redux-thunk'
import { authAPI } from '../api/api'
import { AuthType, RootStateType } from './state'
import { AppDispatch, AppThunkType } from './store'

const SET_USER_DATA = 'auth/SET-USER-DATA'

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

export const getUserDataTC = (): AppThunkType => async (dispatch) => {
  const res = await authAPI.me()
  if (res.data.resultCode === 0) {
    const { id, login, email } = res.data.data
    dispatch(setUserData(id, email, login, true))
  }
}

export const loginTC =
  (email: string, password: string, rememberMe?: boolean): AppThunkType =>
  async (dispatch) => {
    const res = await authAPI.login(email, password, rememberMe)
    if (res.data.resultCode === 0) {
      dispatch(getUserDataTC())
    } else {
      const message = res.data.messages.lenght > 0 ? res.data.messages[0] : 'Some error'
      dispatch(stopSubmit('login', { _error: message }))
    }
  }
export const logoutTC = (): AppThunkType => async (dispatch) => {
  const res = await authAPI.logout()
  if (res.data.resultCode === 0) {
    dispatch(setUserData(null, null, null, false))
  }
}

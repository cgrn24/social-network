import { stopSubmit } from 'redux-form'
import { authAPI, securityAPI } from '../api/api'
import { AuthType } from './types'
import { AppThunkType } from './store'

const SET_USER_DATA = 'auth/SET-USER-DATA'
const SET_CAPTCHA_URL = 'auth/GET-CAPTCHA-URL'

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captcha: null,
}

export const authReducer = (state: AuthType = initialState, action: AuthActionsType) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      }
    case SET_CAPTCHA_URL:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}

type SetUserType = ReturnType<typeof setUserData>
type SetCaptchaType = ReturnType<typeof setCaptcha>
export type AuthActionsType = SetUserType | SetCaptchaType

export const setUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean) =>
  ({
    type: SET_USER_DATA,
    payload: { userId, email, login, isAuth },
  } as const)
export const setCaptcha = (captcha: string) =>
  ({
    type: SET_CAPTCHA_URL,
    payload: { captcha },
  } as const)

export const getUserDataTC = (): AppThunkType => async (dispatch) => {
  const res = await authAPI.me()
  if (res.data.resultCode === 0) {
    const { id, login, email } = res.data.data
    dispatch(setUserData(id, email, login, true))
  }
}

export const loginTC =
  (email: string, password: string, rememberMe?: boolean, captcha: string | null = null): AppThunkType =>
  async (dispatch) => {
    const res = await authAPI.login(email, password, rememberMe, captcha)
    if (res.data.resultCode === 0) {
      dispatch(getUserDataTC())
    }
    if (res.data.resultCode === 10) {
      dispatch(getCaptchaUrlTC())
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
export const getCaptchaUrlTC = (): AppThunkType => async (dispatch) => {
  const res = await securityAPI.getCaptchaUrl()
  const captchaUrl = res.data.url
  dispatch(setCaptcha(captchaUrl))
}

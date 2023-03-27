import { Dispatch } from 'redux'
import { initialize, stopSubmit } from 'redux-form'
import { ThunkDispatch } from 'redux-thunk'
import { appDispatch } from '..'
import { authAPI } from '../api/api'
import { getUserDataTC } from './authReducer'
import { AppType, AuthType, RootStateType } from './state'
import { ActionsType, AppThunkType } from './store'

const SET_INITIALIZED = 'SET-INITIALIZED'

const initialState = {
  initialized: false,
}

export const appReducer = (state: AppType = initialState, action: SetInitializedType) => {
  switch (action.type) {
    case SET_INITIALIZED:
      return {
        ...state,
        initialized: action.initialized,
      }
    default:
      return state
  }
}

type SetInitializedType = ReturnType<typeof setInitializedAC>
export type AppActionsType = SetInitializedType

export const setInitializedAC = () => ({
  type: SET_INITIALIZED,
  initialized: true,
})
export const initializeAppTC = (): AppThunkType => async (dispatch) => {
  dispatch(getUserDataTC())
  dispatch(setInitializedAC())
}

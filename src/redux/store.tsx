import dialogsReducer, { DialogsActionsType } from './dialogsReducer'
import sidebarReducer from './sidebarReducer'
import profileReducer, { ProfileActionsType } from './profileReducer'
import { applyMiddleware, combineReducers, createStore, Store } from 'redux'
import { UsersPageType, usersReducer } from './usersReducer'
import { AuthActionsType, authReducer } from './authReducer'
import { reducer as formReducer } from 'redux-form'
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { AppActionsType, appReducer } from './appReducer'

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
})

export type RootStoreType = ReturnType<typeof reducers>
export type ActionsType = ProfileActionsType | DialogsActionsType | UsersPageType | AuthActionsType | AppActionsType
export type StoreType = Store<RootStoreType, ActionsType>
export type AppDispatch = ThunkDispatch<RootStoreType, unknown, any>
export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, RootStoreType, unknown, any>

export const store = createStore(reducers, applyMiddleware(thunk))

//@ts-ignore
window.store = store

import dialogsReducer, { DialogsActionsType } from './dialogsReducer'
import sidebarReducer from './sidebarReducer'
import profileReducer, { ProfileActionsType } from './profileReducer'
import { combineReducers, createStore, Store } from 'redux'
import { UsersPageType, usersReducer } from './usersReducer'

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
})

export type RootStoreType = ReturnType<typeof reducers>
export type ActionsType = ProfileActionsType | DialogsActionsType | UsersPageType
export type StoreType = Store<RootStoreType, ActionsType>

export const store = createStore(reducers)

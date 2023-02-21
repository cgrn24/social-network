import dialogsReducer, { DialogsActionsType } from './dialogsReducer'
import sidebarReducer from './sidebarReducer'
import profileReducer, { ProfileActionsType } from './profileReducer'
import { combineReducers, createStore, Store } from 'redux'

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
})

export type RootStoreType = ReturnType<typeof reducers>
export type ActionsType = ProfileActionsType | DialogsActionsType
export type StoreType = Store<RootStoreType, ActionsType>

export const store = createStore(reducers)

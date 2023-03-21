import dialogsReducer, { DialogsActionsType } from './dialogsReducer'
import sidebarReducer from './sidebarReducer'
import profileReducer, { ProfileActionsType } from './profileReducer'
import { applyMiddleware, combineReducers, createStore, Store } from 'redux'
import { UsersPageType, usersReducer } from './usersReducer'
import { AuthActionsType, authReducer } from './authReducer'
import { reducer as formReducer } from 'redux-form'
import thunk from 'redux-thunk'

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
})

export type RootStoreType = ReturnType<typeof reducers>
export type ActionsType = ProfileActionsType | DialogsActionsType | UsersPageType | AuthActionsType
export type StoreType = Store<RootStoreType, ActionsType>
// type FormReducerType = ReturnType<typeof formReducer>

export const store = createStore(reducers, applyMiddleware(thunk))

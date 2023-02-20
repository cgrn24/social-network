import dialogsReducer from './dialogsReducer'
import sidebarReducer from './sidebarReducer'
import profileReducer from './profileReducer'
import { combineReducers, createStore } from 'redux'
import { RootStateType } from './state'

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
})

export type StoreType = {
  state?: RootStateType
  changeNewText?: (newText: string) => void
  addPost?: (postText: string) => void
  onChange?: () => void
  subscribe?: (callback: () => void) => void
  getState: () => RootStateType
  dispatch: (action: any) => void
}

export const store = createStore(reducers)

export type RootStoreType = ReturnType<typeof reducers>

import { configureStore } from '@reduxjs/toolkit'
import  storage  from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { combineReducers } from '@reduxjs/toolkit'
import credentialsReducer from '../features/userCredentials/userCredentialsSlice'

import thunk from 'redux-thunk'
import userDataSlice from '../features/userData/userDataSlice'

const persistConfig ={
  key :'root',
  storage,
  whitelist:['userState']
}
const rootReducer = combineReducers({
    userState : credentialsReducer
})
const persistedReducer = persistReducer(persistConfig,rootReducer)
export const store = configureStore({
  reducer: {
 
    credentials : persistedReducer,
    userData : userDataSlice
  },
  middleware :[thunk]
})
import { configureStore } from '@reduxjs/toolkit'
import  storage  from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { combineReducers } from '@reduxjs/toolkit'
import credentialsReducer from '../features/userCredentials/userCredentialsSlice'
import  productSlice  from '../features/products/productSlice'
import carritoSlice from '../features/carrito/carritoSlice'
import favoriteSlice from '../features/favorite/favoriteSlice'

import thunk from 'redux-thunk'
import userDataSlice from '../features/userData/userDataSlice'
import productsIdSlice from '../features/productsId/productsIdSlice'

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
    userData : userDataSlice,
    products: productSlice,
    productsId: productsIdSlice,
    carrito: carritoSlice,
    favorite: favoriteSlice,
  },
  middleware :[thunk]
})
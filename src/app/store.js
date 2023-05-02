//Redux 
import { configureStore } from '@reduxjs/toolkit'

import thunk from 'redux-thunk'
//Redux Slice
import carritoSlice from '../features/carrito/carritoSlice'
import productSlice  from '../features/products/productSlice'
import favoriteSlice from '../features/favorite/favoriteSlice'
import userDataSlice from '../features/userData/userDataSlice'
import productsIdSlice from '../features/productsId/productsIdSlice'
import categoriesSlice from '../features/categories/categoriesSlice'
import credentialsReducer from '../features/userCredentials/userCredentialsSlice'


export const store = configureStore({
  reducer: {
    currentUser : credentialsReducer,
    userData : userDataSlice,
    products: productSlice,
    productsId: productsIdSlice,
    carrito: carritoSlice,
    favorite: favoriteSlice,
    categories: categoriesSlice,  
  },
  middleware :[thunk]
})
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import  productSlice  from '../features/counter/reducer/productSlice'
import carritoSlice from '../features/counter/reducer/carritoSlice'
import favoriteSlice from '../features/counter/reducer/favoriteSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    products: productSlice,
    carrito: carritoSlice,
    favorite: favoriteSlice,
  },
})
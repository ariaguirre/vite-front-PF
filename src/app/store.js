import { configureStore } from '@reduxjs/toolkit'
import  productSlice  from '../features/products/productSlice'
import carritoSlice from '../features/carrito/carritoSlice'
import favoriteSlice from '../features/favorite/favoriteSlice'

export const store = configureStore({
  reducer: {
    products: productSlice,
    carrito: carritoSlice,
    favorite: favoriteSlice,
  },
})
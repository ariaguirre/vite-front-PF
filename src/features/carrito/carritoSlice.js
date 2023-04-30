import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    carrito: []
}


export const carritoSlice = createSlice({
    name: 'carrito',
    initialState,
    reducers: {
        setCarrito: (state, action) => {
            state.carrito = action.payload
        },
        deleteIdCarrito: (state, action) =>{
            const filter = state.carrito.filter(ele => ele !== action.payload)
            state.carrito = filter 
        }
    }
})

export const { setCarrito, deleteIdCarrito } = carritoSlice.actions

export default carritoSlice.reducer
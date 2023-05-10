import { createSlice } from "@reduxjs/toolkit";
import addCartItem from "../../helper/addCartItem";
import removeCartItem from "../../helper/removeCartItem";
import clearCartItem from "../../helper/clearCartItem";

const initialState = {
  cartItems: [],
  cartTotal: 0
};

export const cartSlice = createSlice({
  name: "addItemToCart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      state.cartItems = addCartItem(state.cartItems, action.payload);
    },
    deleteCartItem: (state, action) => {
      state.cartItems = removeCartItem(state.cartItems, action.payload);
    },
    clearItemFromCart: (state, action) => {
      state.cartItems = clearCartItem(state.cartItems, action.payload);
    },
    setCartTotal: (state,action) => {
      state.cartTotal = action.payload; 
    },
    clearCart: (state) => {
      state.cartTotal = 0; 
      state.cartItems = [];
    }
  },
});

export const { addItemToCart, deleteCartItem, clearItemFromCart, setCartTotal, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

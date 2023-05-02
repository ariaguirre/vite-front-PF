import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  status: 'idle',
  error: null
}

const productSlice = createSlice({
    name: 'products',
    initialState,
      reducers: {
        getProductsActions: (state, action) =>{
          state.products = action.payload
      } 
      }
    });
    export const { getProductsActions } = productSlice.actions
    export default productSlice.reducer;
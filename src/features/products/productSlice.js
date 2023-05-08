import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  productsCopy:[],
  status: 'idle',
  error: null
}

const productSlice = createSlice({
    name: 'products',
    initialState,
      reducers: {
        getProductsActions: (state, action) =>{
          state.products = action.payload
          
      },
      productsCopy : (state,action)=>{
        state.productsCopy = action.payload
      }
      }
    });
    export const { getProductsActions,productsCopy } = productSlice.actions
    export default productSlice.reducer;
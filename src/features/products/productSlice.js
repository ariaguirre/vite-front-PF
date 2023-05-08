import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  productsCopy:[],
  status: 'idle',
  error: null,
  productById: null
}

const productSlice = createSlice({
    name: 'products',
    initialState,
      reducers: {
        getProductsActions: (state, action) =>{
          state.products = action.payload          
      },
         getProductById: (state, action) => {
      state.productById = state.products.find(product => product.id === action.payload);
      },
      productsCopy : (state,action)=>{
        state.productsCopy = action.payload
      }
      }
    });
    export const { getProductsActions,productsCopy } = productSlice.actions
    export default productSlice.reducer;



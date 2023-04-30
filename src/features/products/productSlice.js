import { createSlice } from "@reduxjs/toolkit";

import { fetchProducts } from './productActions'



const productSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        status: 'idle',
        error: null
      },
      reducers: {},
      extraReducers: (builder) => {
        builder
         
          .addCase(fetchProducts.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.products = action.payload;
          })
         
      }
    });
    
    export default productSlice.reducer;
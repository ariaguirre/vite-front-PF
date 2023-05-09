import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  productsCopy:[],
  productsName:[],
  productsNameCopy:[],
  productsFilter:[],
  productsFilterCopy:[],
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
      },
      productsFilterAction : (state,action)=>{
        state.productsFilter = action.payload
      },
      prodFilterCopy : (state,action)=>{
        state.productsFilterCopy = action.payload
      },
      prodNameCopy : (state,action)=>{
        state.productsNameCopy = action.payload
      }
      }
    });
    export const {getProductsActions,getProductById,productsCopy,productsName,productsFilterAction,prodFilterCopy,prodNameCopy } = productSlice.actions
    export default productSlice.reducer;



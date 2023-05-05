import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  orderBy :"",
  orderType :"",
  filter : "",
  status: 'idle',
  error: null
}

const productsPag = createSlice({
    name: 'productsPag',
    initialState,
      reducers: {
        ProductsActions: (state, action) =>{
          state.products = action.payload
      },
      ProductsOrderBy: (state, action) =>{
        state.orderBy = action.payload
    },
      orderTypeActions: (state, action) =>{
        state.orderType = action.payload
    } ,
    filterActions: (state, action) =>{
        state.filter = action.payload
    } 
      }
    });
    export const { ProductsActions,orderTypeActions,filterActions,ProductsOrderBy } = productsPag.actions
    export default productsPag.reducer;
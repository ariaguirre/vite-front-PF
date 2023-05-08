import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  productById: null
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProductsActions: (state, action) => {
      state.products = action.payload;
    },
    getProductById: (state, action) => {
      state.productById = state.products.find(product => product.id === action.payload);
    }
  },
});
export const { getProductsActions, getProductById } = productSlice.actions;
export default productSlice.reducer;

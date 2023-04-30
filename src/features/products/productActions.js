import { createAsyncThunk } from '@reduxjs/toolkit';

import {getProducts} from "../../utils/firebase/firebaseClient"



export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const products = await getProducts();
    return products;
  }
);

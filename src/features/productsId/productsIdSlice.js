import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    productsId: []
}

const productsIdSlice = createSlice({
    name:'productsId',
    initialState,
    reducers:{
        getProductId: (state, action) =>{
            state.productsId = action.payload
        }
    }
})

export const { getProductId } = productsIdSlice.actions
export default productsIdSlice.reducer
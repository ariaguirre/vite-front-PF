import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: null,   
  orderInf: null
};

export const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    getUserData: (state, action) => {
      state.userData = action.payload;
    },    
    clearUserData: (state) => {
      state.userData = null;
    },
    setOrderInf: (state, action) =>  {
      state.orderInf = action.payload
    },
    clearOrderInf: (state) => {
      state.orderInf = null
    }
  },
});

// Action creators are generated for each case reducer function
export const { getUserData, clearUserData, setOrderInf, clearOrderInf } = userDataSlice.actions;

export default userDataSlice.reducer;

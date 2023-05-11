import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userData :{},
  dataAuth :{}
}

export const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    getUserData :(state,action)=>{     
  state.userData = action.payload;
    },
    userDataAuth : (state,action) =>{
     state.dataAuth = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const {getUserData,userDataAuth} = userDataSlice.actions

export default userDataSlice.reducer
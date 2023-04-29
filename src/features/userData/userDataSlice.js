import { createSlice } from '@reduxjs/toolkit'
import { userCredentialsSlice } from '../userCredentials/userCredentialsSlice';

const initialState = {
  userData :[]
}

export const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {

    getUserData :(state,action)=>{
     
  state.userData = action.payload;
    },
    logOut :(state) =>{
      state.userData =[]
    }
  },
})

// Action creators are generated for each case reducer function
export const {getUserData,logOut} = userDataSlice.actions

export default userDataSlice.reducer
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userCredentials: '',
}

export const userCredentialsSlice = createSlice({
  name: 'credentials',
  initialState,
  reducers: {
    getCredentials: (state,action) => {
    
      state.userCredentials = action.payload;
    },
    removeCredentials: (state) => {
    
      state.userCredentials = '';
    }
  },
})

// Action creators are generated for each case reducer function
export const { getCredentials,removeCredentials } = userCredentialsSlice.actions

export default userCredentialsSlice.reducer
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userCredentials: null,
}

export const userCredentialsSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    setCurrentUser: (state,action) => {    
      state.userCredentials = action.payload;
    }    
  },
})

// Action creators are generated for each case reducer function
export const { setCurrentUser } = userCredentialsSlice.actions

export default userCredentialsSlice.reducer
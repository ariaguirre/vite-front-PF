import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	userCredentials: null,
};

export const userCredentialsSlice = createSlice({
	name: 'currentUser',
	initialState,
	reducers: {
		setCurrentUser: (state, action) => {
			state.userCredentials = action.payload;
		},
		resetCurrentUser: (state) => {
			state.userCredentials = null;
		},
	},
});

// Action creators are generated for each case reducer function
export const { setCurrentUser, resetCurrentUser } =
	userCredentialsSlice.actions;

export default userCredentialsSlice.reducer;

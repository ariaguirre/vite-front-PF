import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favorite: []
}


export const favoriteSlice = createSlice({
    name: 'favoritos',
    initialState,
    reducers: {
        setFavorite: (state, action) => {
            state.favorite = action.payload
        },
        deleteIdFavorite: (state, action) =>{
            const filter = state.favorite.filter(ele => ele !== action.payload)
            state.favorite = filter 
        }
    }
})

export const { setFavorite, deleteIdFavorite } = favoriteSlice.actions

export default favoriteSlice.reducer
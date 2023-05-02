import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    categories: []
}

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        getCategoriesAction: (state, action) => {
            state.categories = action.payload
        }
    }
})

export const { getCategoriesAction } = categoriesSlice.actions
export default categoriesSlice.reducer
import { createSlice } from '@reduxjs/toolkit';

const searchBarSlice = createSlice({
    name: 'searchBar',
    initialState: {
        searchText: '',
    },
    reducers: {
        changeSearchText(state, action) {
            state.searchText = action.payload;
        },
    },
})

export const { changeSearchText } = searchBarSlice.actions;

export default searchBarSlice.reducer;

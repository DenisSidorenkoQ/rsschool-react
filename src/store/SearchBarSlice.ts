import { createSlice } from '@reduxjs/toolkit';

const SearchBarSlice = createSlice({
  name: 'searchBar',
  initialState: {
    searchText: '',
  },
  reducers: {
    changeSearchText(state, action) {
      state.searchText = action.payload;
    },
  },
});

export const { changeSearchText } = SearchBarSlice.actions;

export default SearchBarSlice.reducer;

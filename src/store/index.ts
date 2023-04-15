import { configureStore } from '@reduxjs/toolkit';
import searchBarReducer from './searchBarSlice';
import cardListReducer from './CardListSlice';

export default configureStore({
    reducer: {
        searchBar: searchBarReducer,
        cardList: cardListReducer,
    }
});

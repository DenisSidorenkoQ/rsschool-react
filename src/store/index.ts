import { configureStore } from '@reduxjs/toolkit';
import SearchBarReducer from './SearchBarSlice';
import CardListReducer from './CardListSlice';
import FormCardListReducer from './FormCardListSlice';

export const store = configureStore({
  reducer: {
    searchBar: SearchBarReducer,
    cardList: CardListReducer,
    formCardList: FormCardListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

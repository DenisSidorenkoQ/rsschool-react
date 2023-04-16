import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ResponseSearchUsers } from '../model/UserState';

const CardListSlice = createSlice({
  name: 'cardList',
  initialState: {
    cardList: {} as ResponseSearchUsers,
  },
  reducers: {
    changeCardList(state, action: PayloadAction<ResponseSearchUsers>) {
      return {
        ...state.cardList,
        cardList: action.payload,
      };
    },
  },
});

export const { changeCardList } = CardListSlice.actions;

export default CardListSlice.reducer;

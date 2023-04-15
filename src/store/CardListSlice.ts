import {createSlice} from "@reduxjs/toolkit";

const cardListSlice = createSlice({
    name: 'cardList',
    initialState: {
        cards: {},
    },
    reducers: {
        changeCardList(state, action) {
            state.cards = action.payload;
            console.log(state.cards);
        },
    },
})

export const { changeCardList } = cardListSlice.actions;

export default cardListSlice.reducer;

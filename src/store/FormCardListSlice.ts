import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {FormCardInfo} from "../model/FormCardState";

const FormCardListSlice = createSlice({
    name: 'formCards',
    initialState: {
        formCards: [] as FormCardInfo[],
    },
    reducers: {
        setCards(state, action: PayloadAction<FormCardInfo[]>) {
            return {
                ...state.formCards,
                formCards: action.payload,
            }
        },
    },
})

export const { setCards } = FormCardListSlice.actions;

export default FormCardListSlice.reducer;

import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {FormCardInfo} from "../model/FormCardState";

interface FormCardState {
    formCards: FormCardInfo[];
}

const FormCardListSlice = createSlice({
    name: 'formCards',
    initialState: {
        formCards: [] as FormCardInfo[],
    } as FormCardState,
    reducers: {
        setCards(state, action: PayloadAction<FormCardInfo[]>) {
            state.formCards = action.payload;
        },
    },
})

export const { setCards } = FormCardListSlice.actions;

export default FormCardListSlice.reducer;

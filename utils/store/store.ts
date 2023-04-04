import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { isActive: false, modalColor: "transparent" };

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        setActive(state, action) {
            state.isActive = action.payload;
        },
    },
});

const store = configureStore({
    reducer: { modalReducer: modalSlice.reducer }, // we can provide multiple reducers
});

export const modalActions = modalSlice.actions;
export default store;

import { createSlice } from "@reduxjs/toolkit";

const initialModalState = { isActive: false, modalColor: "transparent" };

export const modalSlice = createSlice({
    name: "modal",
    initialState: initialModalState,
    reducers: {
        setActive(state, action) {
            state.isActive = action.payload;
        },
    },
});

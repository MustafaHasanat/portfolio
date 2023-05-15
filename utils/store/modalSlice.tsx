import { createSlice } from "@reduxjs/toolkit";

const initialModalState = {
    isActive: false,
    modalContent: <div></div>,
};

export const modalSlice = createSlice({
    name: "modal",
    initialState: initialModalState,
    reducers: {
        setActive(state, action) {
            state.isActive = action.payload;
        },
        setModalContent(state, action) {
            state.modalContent = action.payload;
        },
    },
});

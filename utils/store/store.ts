import { configureStore } from "@reduxjs/toolkit";
import { modalSlice } from "./modalSlice";
import { snackbarSlice } from "./snackbarSlice";
import { navigationBarSlice } from "./navigationBarSlice";

const store = configureStore({
    reducer: {
        modalReducer: modalSlice.reducer,
        snackbarReducer: snackbarSlice.reducer,
        navigationBarReducer: navigationBarSlice.reducer,
    },
});

export const modalActions = modalSlice.actions;
export const snackbarActions = snackbarSlice.actions;
export const navigationBarActions = navigationBarSlice.actions;

export default store;

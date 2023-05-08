import { configureStore } from "@reduxjs/toolkit";
import { modalSlice } from "./modalSlice";
import { snackbarSlice } from "./snackbarSlice";
import { navigationBarSlice } from "./navigationBarSlice";
import { globalAssetsSlice } from "./globalAssetsSlice";

const store = configureStore({
    reducer: {
        modalReducer: modalSlice.reducer,
        snackbarReducer: snackbarSlice.reducer,
        navigationBarReducer: navigationBarSlice.reducer,
        globalAssetsReducer: globalAssetsSlice.reducer,
    },
});

export const modalActions = modalSlice.actions;
export const snackbarActions = snackbarSlice.actions;
export const navigationBarActions = navigationBarSlice.actions;
export const globalAssetsActions = globalAssetsSlice.actions;

export default store;

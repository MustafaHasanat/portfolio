import { AlertColor } from "@mui/material";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialModalState = { isActive: false, modalColor: "transparent" };

const initialSnackbarState: {
    isActive: boolean;
    textValue: string;
    colorScheme: AlertColor;
} = {
    isActive: false,
    textValue: "Snackbar message",
    colorScheme: "success",
};

const modalSlice = createSlice({
    name: "modal",
    initialState: initialModalState,
    reducers: {
        setActive(state, action) {
            state.isActive = action.payload;
        },
    },
});

const snackbarSlice = createSlice({
    name: "snackbar",
    initialState: initialSnackbarState,
    reducers: {
        setActive(state, action) {
            state.isActive = action.payload;
        },
        setMessage(state, action) {
            state.textValue = action.payload;
        },
        setColorScheme(state, action) {
            state.colorScheme = action.payload;
        },
    },
});

const store = configureStore({
    reducer: {
        modalReducer: modalSlice.reducer,
        snackbarReducer: snackbarSlice.reducer,
    },
});

export const modalActions = modalSlice.actions;
export const snackbarActions = snackbarSlice.actions;

export default store;

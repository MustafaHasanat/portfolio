import { AlertColor } from "@mui/material";
import { createSlice } from "@reduxjs/toolkit";

const initialSnackbarState: {
    isActive: boolean;
    textValue: string;
    colorScheme: AlertColor;
} = {
    isActive: false,
    textValue: "Snackbar message",
    colorScheme: "success",
};

export const snackbarSlice = createSlice({
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

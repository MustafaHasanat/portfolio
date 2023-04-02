import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: "#3A1078",
        },
        secondary: {
            main: "#006CC9",
        },
        error: {
            main: "#A30000",
        },
        base: {
            main: "#9361D0",
            light: "#FFF",
            dark: "#000",
        },
        purple: {
            main: "#9361D0",
            light: "#F1B7FF",
            dark: "#3A1078",
        },
        blue: {
            main: "#00B7E5",
            light: "#4AFCE2",
            dark: "#006CC9",
        },
    },
});

export default theme;

import { createTheme } from "@mui/material";

const theme = createTheme({
    typography: {
        fontFamily: "Georgia, 'Times New Roman', Times, serif",
    },
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
            main: "#3A1078",
        },
        blue: {
            main: "#006CC9",
            light: "#4AFCE2",
        },
        gold: {
            main: "#FFD700",
        },
    },
});

export default theme;

import { createTheme } from "@mui/material";

const theme = createTheme({
    typography: {
        fontFamily: "Georgia, 'Times New Roman', Times, serif",
    },
    palette: {
        primary: {
            main: "#FB8122",
        },
        secondary: {
            main: "#1D2228",
            light: "#FFFFFF",
            dark: "#000000",
        },
        text: {
            primary: "#E1E2E2",
        }
    },
});

export default theme;

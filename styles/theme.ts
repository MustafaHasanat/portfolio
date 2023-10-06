import { createTheme } from "@mui/material";
import { mq } from "./mq";

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
        },
    },

    breakpoints: {
        values: {
            xs: mq.XS,
            sm: mq.SM,
            md: mq.MD,
            lg: mq.LG,
            xl: mq.XL,
        },
    },
});

export default theme;

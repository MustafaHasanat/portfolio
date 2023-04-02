import { ThemeOptions } from "@mui/material/styles";
import React from "react";

declare module "@mui/material/styles" {
    interface Theme {
        palette: {
            base: { main: string; light: string; dark: string };
            purple: { main: string; light: string; dark: string };
            blue: { main: string; light: string; dark: string };
        };
    }

    interface PaletteOptions {
        base: PaletteOptions["primary"];
        purple: PaletteOptions["primary"];
        blue: PaletteOptions["primary"];
    }
}

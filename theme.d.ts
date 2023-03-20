import { ThemeOptions } from "@mui/material/styles";
import React from "react";

declare module "@mui/material/styles" {
    interface Theme {
        palette: {
            purple: { main: string; light: string; dark: string };
            blue: { main: string; light: string; dark: string };
        };
    }

    interface PaletteOptions {
        purple: PaletteOptions["primary"];
        blue: PaletteOptions["primary"];
    }
}

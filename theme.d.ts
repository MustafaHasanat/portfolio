import { ThemeOptions } from "@mui/material/styles";
import React from "react";

declare module "@mui/material/styles" {
    interface Theme {
        palette: {
            base: { main: string; light: string; dark: string };
            purple: { main: string; };
            blue: { main: string; light: string; };
            gold: { main: string };
        };
    }

    interface PaletteOptions {
        base: PaletteOptions["primary"];
        purple: PaletteOptions["primary"];
        blue: PaletteOptions["primary"];
        gold: PaletteOptions["primary"];
    }
}

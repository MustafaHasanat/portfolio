import { ThemeOptions } from "@mui/material/styles";
import React from "react";

declare module "@mui/material/styles" {
    interface Theme {
        palette: {
            blue: { main: string; light: string; dark: string };
        };
    }

    interface PaletteOptions {
        blue: PaletteOptions["primary"];
    }
}

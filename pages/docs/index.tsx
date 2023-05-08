import { Stack, useTheme } from "@mui/material";

export default function Docs() {
    const theme = useTheme();

    return (
        <Stack
            sx={{
                bgcolor: theme.palette.secondary.main,
                color: "white",
                px: 12,
                py: "25vh",
            }}
        ></Stack>
    );
}

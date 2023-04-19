import GlitchedText from "@/components/shared/glitchedText";
import { Stack, useTheme } from "@mui/material";

export default function ServerErrorPage() {
    const theme = useTheme();

    return (
        <Stack
            spacing={3}
            justifyContent="center"
            alignItems="center"
            sx={{
                height: "100vh",
                background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("images/desktopWP.jpg")`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}
        >
            <GlitchedText
                color={theme.palette.base.light}
                text={"500"}
                fontSize={"10vw"}
                shadowColor1={"#f80505"}
                shadowColor2={"#70ffec"}
                shiftScal={4}
            />

            <GlitchedText
                color={theme.palette.base.light}
                text={"Server Error"}
                fontSize={"2vw"}
                shadowColor1={"#f80505"}
                shadowColor2={"#70ffec"}
                shiftScal={1}
            />
        </Stack>
    );
}

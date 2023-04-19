import GlitchedText from "@/components/shared/glitchedText";
import { Stack, useTheme } from "@mui/material";

export default function NotFoundPage() {
    const theme = useTheme();

    return (
        <Stack
            spacing={3}
            justifyContent="center"
            alignItems="center"
            sx={{
                height: "100vh",
            }}
        >
            <GlitchedText
                color={theme.palette.base.light}
                text={"404"}
                fontSize={"10vw"}
                shadowColor1={"#f80505"}
                shadowColor2={"#70ffec"}
                shiftScal={4}
            />

            <GlitchedText
                color={theme.palette.base.light}
                text={"Page Not Found"}
                fontSize={"2vw"}
                shadowColor1={"#f80505"}
                shadowColor2={"#70ffec"}
                shiftScal={1}
            />
        </Stack>
    );
}

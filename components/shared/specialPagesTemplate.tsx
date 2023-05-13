import GlitchedText from "@/components/shared/glitchedText";
import { Stack, useTheme } from "@mui/material";

const SpecialPagesTemplate = ({
    text,
    statusCode,
}: {
    text: string;
    statusCode: string;
}) => {
    const theme = useTheme();

    return (
        <Stack
            spacing={3}
            justifyContent="center"
            alignItems="center"
            bgcolor={theme.palette.secondary.main}
            sx={{
                height: "100vh",
            }}
        >
            <GlitchedText
                color={theme.palette.text.primary}
                text={statusCode}
                fontSize={"10vw"}
                shadowColor1={"#f80505"}
                shadowColor2={"#70ffec"}
                shiftScale={4}
            />

            <GlitchedText
                color={theme.palette.text.primary}
                text={text}
                fontSize={"2vw"}
                shadowColor1={"#f80505"}
                shadowColor2={"#70ffec"}
                shiftScale={1}
            />
        </Stack>
    );
};

export default SpecialPagesTemplate;

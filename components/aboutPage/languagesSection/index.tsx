import { MutableRefObject } from "react";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import AnimatedTitle from "@/components/shared/animatedTitle";

interface LanguagesSectionProps {
    inViewRef: MutableRefObject<null>;
}

const LanguagesSection = ({ inViewRef }: LanguagesSectionProps) => {
    const theme = useTheme();

    return (
        <Stack id="about-languages" height="105vh" px={12} position="relative">
            <Box
                ref={inViewRef}
                sx={{
                    position: "absolute",
                    top: "50%",
                    width: " 100%",
                }}
            />

            <AnimatedTitle buttonWidth="40%" text="languages" />
        </Stack>
    );
};

export default LanguagesSection;

import { MutableRefObject } from "react";
import { Box, Stack } from "@mui/material";

interface LanguagesSectionProps {
    inViewRef: MutableRefObject<null>;
}

const LanguagesSection = ({ inViewRef }: LanguagesSectionProps) => {
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
        </Stack>
    );
};

export default LanguagesSection;

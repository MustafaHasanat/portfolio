import { MutableRefObject } from "react";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import AnimatedTitle from "@/components/shared/animatedTitle";

interface ExperienceSectionProps {
    inViewRef: MutableRefObject<null>;
}

const CertificatesSection = ({ inViewRef }: ExperienceSectionProps) => {
    const theme = useTheme();

    return (
        <Stack
            id="about-certificates"
            height="105vh"
            px={12}
            position="relative"
        >
            <Box
                ref={inViewRef}
                sx={{
                    position: "absolute",
                    top: "50%",
                    width: " 100%",
                }}
            />

            <AnimatedTitle buttonWidth="50%" text="certifications" />
        </Stack>
    );
};

export default CertificatesSection;

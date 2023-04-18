import { MutableRefObject } from "react";
import { Box, Stack } from "@mui/material";

interface ExperienceSectionProps {
    inViewRef: MutableRefObject<null>;
}

const ExperienceSection = ({ inViewRef }: ExperienceSectionProps) => {
    return (
        <Stack id="about-experience" height="105vh" px={12} position="relative">
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

export default ExperienceSection;

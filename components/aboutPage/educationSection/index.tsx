import { Box, Stack } from "@mui/material";
import { MutableRefObject } from "react";

interface EducationSectionProps {
    inViewRef: MutableRefObject<null>;
}

const EducationSection = ({ inViewRef }: EducationSectionProps) => {
    return (
        <Stack id="about-education" height="105vh" px={12} position="relative">
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

export default EducationSection;

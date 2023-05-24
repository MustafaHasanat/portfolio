import AnimatedTitle from "@/components/shared/animatedTitle";
import { Box, Stack, useTheme } from "@mui/material";
import { Fragment, MutableRefObject } from "react";
import { Certificate } from "@/types/certificate";
import EducationCard from "./educationCard";

interface EducationSectionProps {
    inViewRef: MutableRefObject<null>;
    certificates: Certificate[];
}

const EducationSection = ({
    inViewRef,
    certificates,
}: EducationSectionProps) => {
    const theme = useTheme();

    return (
        <Stack
            id="about-education"
            px={{ xs: 5, md: 12 }}
            py={10}
            position="relative"
            alignItems="center"
            bgcolor={theme.palette.text.primary}
        >
            <Box
                ref={inViewRef}
                sx={{
                    position: "absolute",
                    top: "50%",
                    width: " 100%",
                }}
            />

            <Box
                sx={{
                    width: { xs: "100%", md: "80%", lg: "40%", xl: "30%" },
                    height: { xs: "11rem", lg: "13rem" },
                }}
            >
                <AnimatedTitle
                    text="education"
                    tertiary={theme.palette.secondary.main}
                    shadowColor={theme.palette.primary.main}
                    fontSize={{
                        xs: "0.8rem",
                        sm: "1rem",
                        md: "1.2rem",
                        lg: "1.7rem",
                    }}
                />
            </Box>

            <Stack
                width="100%"
                justifyContent="center"
                gap={{ xs: 5, md: 15 }}
                my={{ xs: 0, md: 5 }}
                flexWrap={{ xs: "nowrap", md: "wrap" }}
                direction={{ xs: "column", md: "row" }}
            >
                {certificates.map((cert, index) => {
                    return (
                        <Fragment key={`certificate number: ${index}`}>
                            <EducationCard cert={cert} />
                        </Fragment>
                    );
                })}
            </Stack>
        </Stack>
    );
};

export default EducationSection;

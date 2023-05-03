import { MutableRefObject, useState } from "react";
import { Box, Stack, useTheme } from "@mui/material";
import AnimatedTitle from "@/components/shared/animatedTitle";
import CertsChart from "./certsChart";
import CertsList from "./certsList";
import { Course } from "@/types/course";

interface CertificatesSectionProps {
    inViewRef: MutableRefObject<null>;
    courses: Course[];
}

const CertificatesSection = ({
    inViewRef,
    courses,
}: CertificatesSectionProps) => {
    const theme = useTheme();
    const [chartType, setChartType] = useState("radar");

    return (
        <Stack
            id="about-certificates"
            px={12}
            py={10}
            position="relative"
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

            <AnimatedTitle
                buttonWidth="40%"
                text="courses"
                tertiary={theme.palette.secondary.main}
                shadowColor={theme.palette.primary.main}
            />

            <Stack
                direction="row"
                p={5}
                justifyContent="space-evenly"
                alignItems="center"
                width="100%"
            >
                <CertsChart courses={courses} chartType={chartType} />
                <CertsList
                    courses={courses}
                    chartType={chartType}
                    setChartType={setChartType}
                />
            </Stack>
        </Stack>
    );
};

export default CertificatesSection;

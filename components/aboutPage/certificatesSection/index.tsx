import { MutableRefObject } from "react";
import { Box, Stack } from "@mui/material";
import AnimatedTitle from "@/components/shared/animatedTitle";
import CertsChart from "./certsChart";
import CertsList from "./certsList";
import { Course } from "@/types/course";

interface ExperienceSectionProps {
    inViewRef: MutableRefObject<null>;
    courses: Course[];
}

const CertificatesSection = ({
    inViewRef,
    courses,
}: ExperienceSectionProps) => {

    return (
        <Stack id="about-certificates" px={12} position="relative">
            <Box
                ref={inViewRef}
                sx={{
                    position: "absolute",
                    top: "50%",
                    width: " 100%",
                }}
            />

            <AnimatedTitle buttonWidth="40%" text="certifications" />

            <Stack
                direction="row"
                p={5}
                justifyContent="center"
                alignItems="center"
            >
                <CertsChart courses={courses} />
                <CertsList courses={courses} />
            </Stack>
        </Stack>
    );
};

export default CertificatesSection;

/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, MutableRefObject, useEffect } from "react";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import AnimatedTitle from "@/components/shared/animatedTitle";
import ExperiencesSectionConstants from "@/utils/constants/aboutPage/experiencesSection";
import RoleBox from "./roleBox";
import { Experience } from "@/types/experience";

interface ExperienceSectionProps {
    inViewRef: MutableRefObject<null>;
    experiences: Experience[];
}

const ExperienceSection = ({
    inViewRef,
    experiences,
}: ExperienceSectionProps) => {
    const theme = useTheme();

    useEffect(() => {
        experiences.sort((a, b) =>
            a.order < b.order ? 1 : b.order < a.order ? -1 : 0
        );
    }, []);

    return (
        <Stack
            id="about-experience"
            px={12}
            py={10}
            position="relative"
            bgcolor={theme.palette.secondary.main}
        >
            <Box
                ref={inViewRef}
                sx={{
                    position: "absolute",
                    top: "50%",
                    width: " 100%",
                }}
            />

            <AnimatedTitle buttonWidth="40%" text="experiences" />

            <Stack spacing={5} position="relative">
                {experiences.map((experience, index) => {
                    return (
                        <Fragment key={`experience box number: ${index}`}>
                            <RoleBox experience={experience} index={index} />
                        </Fragment>
                    );
                })}
            </Stack>
        </Stack>
    );
};

export default ExperienceSection;

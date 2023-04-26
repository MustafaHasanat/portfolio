import { Fragment, MutableRefObject } from "react";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import AnimatedTitle from "@/components/shared/animatedTitle";
import ExperiencesSectionConstants from "@/utils/constants/aboutPage/experiencesSection";
import RoleBox from "./roleBox";

interface ExperienceSectionProps {
    inViewRef: MutableRefObject<null>;
}

const ExperienceSection = ({ inViewRef }: ExperienceSectionProps) => {
    const theme = useTheme();

    return (
        <Stack id="about-experience" px={12} pb={5} position="relative">
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
                {ExperiencesSectionConstants.experiences.map(
                    (experience, index) => {
                        return (
                            <Fragment key={`experience box number: ${index}`}>
                                <RoleBox
                                    experience={experience}
                                    index={index}
                                />
                            </Fragment>
                        );
                    }
                )}
            </Stack>
        </Stack>
    );
};

export default ExperienceSection;

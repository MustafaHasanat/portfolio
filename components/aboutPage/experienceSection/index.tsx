import { Fragment, MutableRefObject } from "react";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import InteractiveTitle from "@/components/shared/title";
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

            <InteractiveTitle
                primary={theme.palette.blue.main}
                secondary={theme.palette.base.dark}
                tertiary={theme.palette.gold.main}
                containerHeight="30vh"
                buttonWidth="40%"
                buttonHeight="60%"
                linesSpace={15}
                buttonCuttingRatio={0.17}
                buttonGap={18}
            >
                <Typography
                    fontSize="2.7vw"
                    color={theme.palette.base.dark}
                    textTransform="uppercase"
                    letterSpacing={3}
                    fontWeight="bold"
                >
                    Experiences
                </Typography>
            </InteractiveTitle>

            <Stack spacing={5} position="relative">
                {ExperiencesSectionConstants.experiences.map(
                    (experience, index) => {
                        return (
                            <Fragment key={`experience box number: ${index}`}>
                                <RoleBox experience={experience} index={index} />
                            </Fragment>
                        );
                    }
                )}
            </Stack>
        </Stack>
    );
};

export default ExperienceSection;

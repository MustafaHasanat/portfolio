/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, MutableRefObject, useEffect } from "react";
import { Box, Stack, useTheme } from "@mui/material";
import AnimatedTitle from "@/components/shared/animatedTitle";
import RoleBox from "./roleBox";
import { Experience } from "@/types/experience";
import sortByOrder from "@/utils/helpers/sortByOrder";

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
        sortByOrder(experiences);
    }, []);

    return (
        <Stack
            id="about-experience"
            px={12}
            py={10}
            position="relative"
            alignItems="center"
            width="100%"
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

            <Box
                sx={{
                    width: { xs: "70%", lg: "40%" },
                    height: { xs: "12rem", sm: "15rem", lg: "13rem" },
                }}
            >
                <AnimatedTitle
                    text="experiences"
                    shadowColor={theme.palette.primary.main}
                />
            </Box>

            <Stack spacing={5} position="relative" width="100%">
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

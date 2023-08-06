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
            px={{ xs: 5, md: 12 }}
            py={10}
            position="relative"
            alignItems="center"
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
                    width: { xs: "100%", md: "80%", lg: "40%", xl: "30%" },
                    height: { xs: "11rem", lg: "13rem" },
                }}
            >
                <AnimatedTitle
                    text="experiences"
                    shadowColor={theme.palette.primary.main}
                    fontSize={{
                        xs: "0.8rem",
                        sm: "1rem",
                        md: "1.2rem",
                        lg: "1.7rem",
                    }}
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

import GlassBox from "@/components/shared/glassBox";
import { Experience } from "@/types/experience";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import { AnimationControls, motion } from "framer-motion";

interface ExperienceInfoProps {
    experience: Experience;
    roleAnimation: AnimationControls;
    index: number;
    roleInView: boolean;
}

const ExperienceInfo = ({
    experience,
    roleAnimation,
    roleInView,
    index,
}: ExperienceInfoProps) => {
    const theme = useTheme();

    const {
        role,
        employmentType,
        startDate,
        endDate,
        company,
        location,
        locationType,
    } = experience;

    const floatingText = (
        title: string,
        text: string,
        x: string,
        y: string,
        textTransform: string,
        delay: number
    ) => {
        const baseTransform = "translateX(-50%) translateY(-50%)";

        return (
            <Stack
                component={motion.div}
                animate={roleAnimation}
                initial="hidden"
                variants={{
                    visible: {
                        transform: baseTransform + " scale(1)",
                        top: y,
                        left: x,
                        transition: {
                            type: "spring",
                            delay: delay,
                        },
                    },
                    hidden: {
                        transform: baseTransform + " scale(0)",
                        top: "50%",
                        left: "50%",
                    },
                }}
                alignItems="center"
                spacing={0.7}
                sx={{
                    position: "absolute",
                }}
            >
                <GlassBox
                    id={`experience info number: ${index}`}
                    extraSX={{
                        width: "fit-content",
                        height: "fit-content",
                        position: "relative",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 3,
                        padding: 1,
                        boxShadow: `0 0 3px ${theme.palette.primary.main}`,
                    }}
                >
                    <Typography
                        color={theme.palette.text.primary}
                        fontWeight="bold"
                        variant="h6"
                        sx={{
                            textTransform: textTransform,
                        }}
                    >
                        {title}
                    </Typography>

                    <Typography
                        color={theme.palette.text.primary}
                        sx={{
                            opacity: 0.8,
                            textTransform: textTransform,
                        }}
                    >
                        {text}
                    </Typography>
                </GlassBox>
            </Stack>
        );
    };

    return (
        <Box
            sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
            }}
        >
            {floatingText("role", role, "30%", "20%", "capitalize", 0)}
            {floatingText(
                "employment type",
                employmentType,
                "20%",
                "50%",
                "capitalize",
                0.1
            )}
            {floatingText(
                "From - To",
                `${startDate.toString()} - ${
                    !endDate ? "Present" : endDate.toString()
                }`,
                "30%",
                "80%",
                "capitalize",
                0.2
            )}
            {floatingText("company", company, "70%", "20%", "capitalize", 0.3)}
            {floatingText(
                "location",
                location,
                "80%",
                "50%",
                "capitalize",
                0.4
            )}
            {floatingText(
                "location type",
                locationType,
                "70%",
                "80%",
                "capitalize",
                0.5
            )}
        </Box>
    );
};

export default ExperienceInfo;

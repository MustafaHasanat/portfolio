import { Box, Stack, Typography, useTheme } from "@mui/material";
import { AnimationControls, motion } from "framer-motion";

interface ExperienceInfoProps {
    experiences: {
        role: string;
        employmentType: string;
        duration: string;
        company: string;
        location: string;
        locationType: string;
    };
    roleAnimation: AnimationControls;
    roleInView: boolean;
}

const ExperienceInfo = ({
    experiences,
    roleAnimation,
    roleInView,
}: ExperienceInfoProps) => {
    const theme = useTheme();

    const { role, employmentType, duration, company, location, locationType } =
        experiences;

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
                <Typography
                    color={theme.palette.text.primary}
                    fontWeight="bold"
                    fontSize="1.6vw"
                    sx={{
                        textTransform: textTransform,
                    }}
                >
                    {title}
                </Typography>

                <Typography
                    color={theme.palette.text.primary}
                    fontSize="1.3vw"
                    sx={{
                        opacity: 0.8,
                        textTransform: textTransform,
                    }}
                >
                    {text}
                </Typography>
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
                "duration",
                duration,
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

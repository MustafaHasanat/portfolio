/* eslint-disable react-hooks/exhaustive-deps */
import { Stack, Typography, useMediaQuery } from "@mui/material";
import theme from "@/styles/theme";
import IconicButton from "@/components/shared/iconicButton";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import { Experience } from "@/types/experience";
import { motion } from "framer-motion";
import { useState } from "react";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

interface SwitchBoxProps {
    experience: Experience;
}

const SwitchBox = ({ experience }: SwitchBoxProps) => {
    const lgScreen = useMediaQuery("(min-width:1440px)");
    const [bulletsIsVisible, setBulletsIsVisible] = useState(false);

    const pairBox = (title: string, text: string) => {
        return (
            <Stack direction="row" spacing={1}>
                <Typography
                    color={theme.palette.text.primary}
                    fontWeight="bold"
                >
                    {title}
                </Typography>

                <Typography
                    color={theme.palette.text.primary}
                    sx={{
                        opacity: 0.8,
                    }}
                >
                    {text}
                </Typography>
            </Stack>
        );
    };

    return (
        <Stack
            direction={{ xs: "row", lg: "column" }}
            component={motion.div}
            initial={{ y: 0, x: 0 }}
            animate={{
                y: !lgScreen ? 0 : bulletsIsVisible ? "-50%" : 0,
                x: lgScreen ? 0 : bulletsIsVisible ? "-50%" : 0,
            }}
            sx={{
                width: { xs: "40rem", md: "60rem", lg: "calc(100% - 15rem)" },
                height: { xs: "auto", lg: "30rem" },
                overflow: "hidden",
                justifyContent: { xs: "start", lg: "start" },
                py: { xs: 3, lg: 1 },
                px: 3,
            }}
        >
            <Stack
                direction={{ xs: "column", lg: "row" }}
                spacing={{ xs: 3, lg: 0 }}
                sx={{
                    width: { xs: "20rem", md: "30rem", lg: "100%" },
                    height: "100%",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Stack
                    justifyContent="space-evenly"
                    spacing={{ xs: 2, lg: 0 }}
                    height={{ xs: "50%", lg: "100%" }}
                >
                    {pairBox("Role:", experience.role)}
                    {pairBox("Employment Type:", experience.employmentType)}
                    {pairBox(
                        "From - To:",
                        `${experience.startDate.toString()} - ${
                            !experience.endDate
                                ? "Present"
                                : experience.endDate.toString()
                        }`
                    )}
                    {pairBox("Company:", experience.company)}
                    {pairBox("Location:", experience.location)}
                    {pairBox("Location Type:", experience.locationType)}
                </Stack>

                <IconicButton
                    icon={
                        <FormatListNumberedIcon
                            sx={{
                                color: theme.palette.primary.main,
                                height: "100%",
                            }}
                        />
                    }
                    buttonHeight="4rem"
                    color={theme.palette.text.primary}
                    hoverColor={theme.palette.primary.main}
                    onClick={() => {
                        setBulletsIsVisible(true);
                    }}
                    extraSX={{
                        width: "15rem",
                    }}
                >
                    <Typography
                        fontSize="1rem"
                        textTransform="uppercase"
                        letterSpacing={2}
                    >
                        responsibilities
                    </Typography>
                </IconicButton>
            </Stack>

            <Stack
                direction={{ xs: "column", lg: "row" }}
                spacing={{ xs: 3, lg: 0 }}
                sx={{
                    width: { xs: "20rem", md: "30rem", lg: "100%" },
                    height: "100%",
                    justifyContent: "space-between",
                    alignItems: "center",
                    pt: 1,
                }}
            >
                <Stack
                    height="100%"
                    justifyContent="space-evenly"
                    width={{ xs: "60%", lg: "70%" }}
                    spacing={{ xs: 2, lg: 0 }}
                >
                    {experience.bullets.map((bullet, bulletIndex) => {
                        return (
                            <Stack
                                direction="row"
                                spacing={2}
                                key={`experience bullet number: ${bulletIndex}`}
                            >
                                <TaskAltIcon
                                    sx={{
                                        color: theme.palette.primary.main,
                                    }}
                                />

                                <Typography
                                    fontSize="1rem"
                                    fontWeight="bold"
                                    color={theme.palette.text.primary}
                                >
                                    {bullet}
                                </Typography>
                            </Stack>
                        );
                    })}
                </Stack>

                <IconicButton
                    icon={
                        <FormatListNumberedIcon
                            sx={{
                                color: theme.palette.primary.main,
                                height: "100%",
                            }}
                        />
                    }
                    buttonHeight="4rem"
                    color={theme.palette.text.primary}
                    hoverColor={theme.palette.primary.main}
                    onClick={() => {
                        setBulletsIsVisible(false);
                    }}
                    extraSX={{
                        width: "8rem",
                        height: "4rem",
                    }}
                >
                    <Typography
                        fontSize="1rem"
                        textTransform="uppercase"
                        letterSpacing={2}
                    >
                        info
                    </Typography>
                </IconicButton>
            </Stack>
        </Stack>
    );
};

export default SwitchBox;

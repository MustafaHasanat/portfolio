/* eslint-disable react-hooks/exhaustive-deps */
import { Stack, Typography } from "@mui/material";
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
    const [bulletsIsVisible, setBulletsIsVisible] = useState(false);

    const pairBox = (title: string, text: string) => {
        return (
            <Stack direction="row" spacing={1}>
                <Typography
                    color={theme.palette.secondary.main}
                    fontWeight="bold"
                >
                    {title}
                </Typography>

                <Typography
                    color={theme.palette.secondary.main}
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
            component={motion.div}
            initial={{ y: 0 }}
            animate={{ y: bulletsIsVisible ? "-50%" : 0 }}
            sx={{
                width: "calc(100% - 15rem)",
                height: "30rem",
                overflow: "hidden",
                py: 1,
                px: 3,
            }}
        >
            <Stack
                direction="row"
                sx={{
                    width: "100%",
                    height: "100%",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Stack justifyContent="space-evenly" height="100%">
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
                    color={theme.palette.secondary.main}
                    hoverColor={theme.palette.primary.main}
                    onClick={() => {
                        setBulletsIsVisible(true);
                    }}
                    extraSX={{
                        width: "15rem",
                        height: "4rem",
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
                direction="row"
                sx={{
                    width: "100%",
                    height: "100%",
                    justifyContent: "space-between",
                    alignItems: "center",
                    pt: 1,
                }}
            >
                <Stack height="100%" justifyContent="space-evenly" width="70%">
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

                                <Typography fontSize="1rem" fontWeight="bold">
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
                    color={theme.palette.secondary.main}
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

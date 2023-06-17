import { Box, Stack, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { Dispatch, Fragment, SetStateAction } from "react";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import { SkillSet } from "@/types/skillSet";

interface DesktopControlBoxProps {
    setHoveredSkillSet: Dispatch<SetStateAction<SkillSet | null>>;
    skillSets: SkillSet[];
    currentSkillSet: SkillSet;
    setCurrentSkillSet: Dispatch<SetStateAction<SkillSet>>;
}

const DesktopControlBox = ({
    setHoveredSkillSet,
    skillSets,
    currentSkillSet,
    setCurrentSkillSet,
}: DesktopControlBoxProps) => {
    const theme = useTheme();

    return (
        <Stack
            direction="row"
            sx={{
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                gap: 3,
            }}
        >
            {skillSets.map((skillSetItem, skillIndex) => {
                return (
                    <Stack
                        key={`skill set number:${skillIndex}`}
                        sx={{
                            bgcolor: theme.palette.text.primary,
                            borderRadius: 3,
                            position: "relative",
                            width: "10rem",
                            aspectRatio: "3 / 1",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Box
                            component={motion.div}
                            initial={{ scale: 0, opacity: 0.5 }}
                            animate={{
                                scale:
                                    skillSetItem.title === currentSkillSet.title
                                        ? 0
                                        : 1,
                                rotate: 0,
                            }}
                            whileHover={{
                                opacity: 1,
                                scale:
                                    skillSetItem.title === currentSkillSet.title
                                        ? 0
                                        : 1.5,
                                rotate:
                                    skillSetItem.title === currentSkillSet.title
                                        ? -180
                                        : 180,
                            }}
                            sx={{
                                width: { xs: "1.7rem" },
                                height: "auto",
                                cursor: "pointer",
                            }}
                            onClick={() => {
                                setCurrentSkillSet(skillSetItem);
                                setHoveredSkillSet(null);
                            }}
                            onMouseEnter={() => {
                                setHoveredSkillSet(skillSetItem);
                            }}
                            onMouseLeave={() => {
                                setHoveredSkillSet(null);
                            }}
                        >
                            <WorkspacesIcon
                                sx={{
                                    color: theme.palette.primary.main,
                                    width: "100%",
                                    height: "100%",
                                }}
                            />
                        </Box>

                        <Box
                            component={motion.div}
                            initial={{
                                top: "50%",
                                left: "50%",
                                width: "100%",
                                transform:
                                    "translateX(-50%) translateY(-50%) scale(0)",
                            }}
                            animate={{
                                transform:
                                    skillSetItem.title === currentSkillSet.title
                                        ? "translateX(-50%) translateY(-50%) scale(1)"
                                        : "translateX(-50%) translateY(-50%) scale(0)",
                            }}
                            sx={{
                                position: "absolute",
                            }}
                        >
                            <Typography
                                color={theme.palette.secondary.main}
                                fontSize={{ xs: "1.3rem" }}
                                textTransform="capitalize"
                                textAlign="center"
                            >
                                {skillSetItem.title}
                            </Typography>
                        </Box>
                    </Stack>
                );
            })}
        </Stack>
    );
};

export default DesktopControlBox;

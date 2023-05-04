import GlassBox from "@/components/shared/glassBox";
import { SkillSet } from "@/types/skillSet";
import { Typography, useTheme, Stack, Avatar } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { Fragment, useEffect } from "react";

interface SkillsListProps {
    index: number;
    skillSet: SkillSet;
    isDrawerActive: boolean;
}

const SkillsList = ({ index, skillSet, isDrawerActive }: SkillsListProps) => {
    const { skills } = skillSet;
    const theme = useTheme();
    const listAnimation = useAnimation();

    useEffect(() => {
        isDrawerActive
            ? listAnimation.start("visible")
            : listAnimation.start("hidden");
    }, [isDrawerActive, listAnimation]);

    return (
        <Stack
            position="absolute"
            component={motion.div}
            animate={listAnimation}
            initial="hidden"
            variants={{
                hidden: {
                    height: "0px",
                },
                visible: {
                    height: "fit-content",
                },
            }}
            sx={{
                zIndex: 20,
                top: "10vh",
            }}
        >
            <GlassBox
                id={`skill-list-glass-box-${index}`}
                extraSX={{
                    position: "relative",
                    width: "18vw",
                    overflow: "hidden",
                    boxShadow: `0 0 4px ${theme.palette.primary.main}`,
                    borderRadius: 3,
                }}
            >
                <Stack spacing={3} py={5} px={5}>
                    {skills.map((skill, skillIndex) => {
                        return (
                            <Fragment key={`skill set number:${skillIndex}`}>
                                <Stack
                                    direction="row"
                                    justifyContent="space-between"
                                    alignItems="center"
                                    bgcolor={theme.palette.text.primary}
                                    overflow="hidden"
                                    borderRadius={2}
                                    py={1}
                                    px={2}
                                    height="7.5vh"
                                >
                                    <Typography
                                        color={theme.palette.secondary.main}
                                        fontSize="1.4vw"
                                    >
                                        {skill.name}
                                    </Typography>

                                    <Avatar
                                        variant="square"
                                        src={skill.logo.asset.url}
                                        sx={{
                                            padding: 0.5,
                                            bgcolor: "white",
                                            height: "100%",
                                            width: "auto",
                                            borderRadius: 2,
                                        }}
                                    />
                                </Stack>
                            </Fragment>
                        );
                    })}
                </Stack>
            </GlassBox>
        </Stack>
    );
};

export default SkillsList;

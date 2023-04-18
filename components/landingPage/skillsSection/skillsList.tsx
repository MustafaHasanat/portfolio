import GlassBox from "@/components/shared/glassBox";
import { Typography, useTheme, Stack, Avatar } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { Fragment, useEffect } from "react";

interface SkillsListProps {
    index: number;
    category: {
        skills: {
            name: string;
            src: string;
        }[];
    };
    isOpened: boolean;
}

const SkillsList = ({ index, category, isOpened }: SkillsListProps) => {
    const { skills } = category;
    const theme = useTheme();
    const listAnimation = useAnimation();

    useEffect(() => {
        isOpened
            ? listAnimation.start("visible")
            : listAnimation.start("hidden");
    }, [isOpened, listAnimation]);

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
                    width: "25vw",
                    overflow: "hidden",
                    borderRadius: 3,
                }}
            >
                <Stack spacing={3} py={5} px={5}>
                    {skills.map((skill, skillIndex) => {
                        return (
                            <Fragment key={`skill set number:${skillIndex}`}>
                                <Stack
                                    component={motion.div}
                                    initial="hidden"
                                    animate={listAnimation}
                                    variants={{
                                        hidden: {
                                            scale: 0,
                                        },
                                        visible: {
                                            scale: 1,
                                            transition: {
                                                delay: (skillIndex + 1) * 0.05,
                                            },
                                        },
                                    }}
                                    direction="row"
                                    justifyContent="space-between"
                                    alignItems="center"
                                    bgcolor={theme.palette.blue.main}
                                    overflow="hidden"
                                    borderRadius={2}
                                    py={1}
                                    px={5}
                                    height="7.5vh"
                                >
                                    <Typography
                                        color={theme.palette.base.light}
                                        fontSize="1.4vw"
                                    >
                                        {skill.name}
                                    </Typography>

                                    <Avatar
                                        variant="square"
                                        src={skill.src}
                                        sx={{
                                            padding: 0.5,
                                            bgcolor: theme.palette.base.light,
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

import { SkillSet } from "@/types/skillSet";
import { Avatar, Stack, Typography, useTheme } from "@mui/material";
import { Fragment } from "react";

interface SkillsBoxProps {
    hoveredSkillSet: SkillSet | null;
    currentSkillSet: SkillSet;
}

const SkillsBox = ({ hoveredSkillSet, currentSkillSet }: SkillsBoxProps) => {
    const theme = useTheme();

    return (
        <Stack
            spacing={4}
            sx={{
                width: { xs: "100%", md: "60%", lg: "35vw" },
                p: 3,
                borderRadius: 3,
                boxShadow: `0 0 15px ${theme.palette.primary.main}`,
                height: { xs: "70vh", md: "100%" },
                alignItems: "center",
            }}
        >
            <Typography
                textTransform="uppercase"
                fontSize={{ xs: "1.5rem" }}
                color={
                    hoveredSkillSet
                        ? theme.palette.primary.main
                        : theme.palette.text.primary
                }
            >
                {hoveredSkillSet ? hoveredSkillSet.title : "skills"}
            </Typography>

            <Stack width="100%" spacing={2} overflow="scroll">
                {currentSkillSet.skills.map((skill, skillIndex) => {
                    return (
                        <Fragment key={`skill set list number:${skillIndex}`}>
                            <Stack
                                direction="row"
                                justifyContent="space-between"
                                alignItems="center"
                                bgcolor={theme.palette.text.primary}
                                borderRadius={2}
                                py={1}
                                px={2}
                                height="4rem"
                                width="100%"
                            >
                                <Typography
                                    color={theme.palette.secondary.main}
                                    fontSize={{ xs: "1.2rem", md: "1.5rem" }}
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
        </Stack>
    );
};

export default SkillsBox;

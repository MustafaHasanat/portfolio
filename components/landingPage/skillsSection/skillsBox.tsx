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
                width: { xs: "100%", lg: "60vw" },
                p: 3,
                borderRadius: 3,
                boxShadow: `0 0 15px ${theme.palette.primary.main}`,
                height: "100%",
                alignItems: "center",
                background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("wallpapers/landingPage.svg")`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                transition: "all 0.3s ease"
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

            <Stack
                width="100%"
                gap={3}
                flexWrap="wrap"
                direction="row"
                justifyContent="center"
            >
                {currentSkillSet.skills.map((skill, skillIndex) => {
                    return (
                        <Stack
                            key={`skill set list number:${skillIndex}`}
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            bgcolor={theme.palette.text.primary}
                            borderRadius={2}
                            py={1}
                            px={2}
                            height="4rem"
                            width="15rem"
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
                    );
                })}
            </Stack>
        </Stack>
    );
};

export default SkillsBox;

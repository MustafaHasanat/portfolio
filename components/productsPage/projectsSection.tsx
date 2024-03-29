import { Project } from "@/types/project";
import { Box, Stack, useTheme } from "@mui/material";
import { Fragment } from "react";
import Card from "../projectsPage/card";
import AnimatedTitle from "../shared/animatedTitle";

interface ProjectsSectionProps {
    projects: Project[];
}

const ProjectsSection = ({ projects }: ProjectsSectionProps) => {
    const theme = useTheme();

    return (
        <Stack alignItems="center">
            <Box
                sx={{
                    width: { xs: "100%", lg: "60%" },
                    height: { xs: "12rem", sm: "15rem", lg: "13rem" },
                }}
            >
                <AnimatedTitle
                    text="previous projects"
                    shadowColor={theme.palette.primary.main}
                />
            </Box>

            <Stack spacing={5}>
                {projects.map((project, index) => {
                    return (
                        <Fragment
                            key={`product: project card number: ${index}`}
                        >
                            <Card project={project} />
                        </Fragment>
                    );
                })}
            </Stack>
        </Stack>
    );
};

export default ProjectsSection;

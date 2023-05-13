import { Project } from "@/types/project";
import { Stack, useTheme } from "@mui/material";
import { Fragment } from "react";
import Card from "../projectsPage/card";
import AnimatedTitle from "../shared/animatedTitle";

interface ProjectsSectionProps {
    projects: Project[];
}

const ProjectsSection = ({ projects }: ProjectsSectionProps) => {
    const theme = useTheme()

    return (
        <Stack>
            <AnimatedTitle
                buttonWidth="55%"
                text="previous projects"
                buttonCuttingRatio={0.15}
                tertiary={theme.palette.primary.main}
                shadowColor={theme.palette.primary.main}
            />

            <Stack spacing={5}>
                {projects.map((project, index) => {
                    return (
                        <Fragment
                            key={`product: project card number: ${index}`}
                        >
                            <Card project={project} filterIsOpened={false} />
                        </Fragment>
                    );
                })}
            </Stack>
        </Stack>
    );
};

export default ProjectsSection;

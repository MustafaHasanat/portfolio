import ProjectsPage from "@/components/projectsPage";
import AnimatedTitle from "@/components/shared/animatedTitle";
import { Project } from "@/types/project";
import { getAllProjects } from "@/utils/sanity/project";
import { Box, Stack, useTheme } from "@mui/material";

interface ProjectsProps {
    projects: Project[];
}

export const getStaticProps = async (): Promise<{ props: ProjectsProps }> => {
    const projects = await getAllProjects();

    return {
        props: { projects },
    };
};

export default function Projects({ projects }: ProjectsProps) {
    const theme = useTheme();

    return (
        <Stack
            sx={{
                bgcolor: theme.palette.secondary.main,
                color: "white",
                px: { xs: 0, lg: 12 },
                pt: "10rem",
                pb: "5rem",
                alignItems: "center",
            }}
        >
            <Box
                sx={{
                    width: { xs: "100%", md: "80%", lg: "40%", xl: "30%" },
                    height: { xs: "11rem", lg: "13rem" },
                }}
            >
                <AnimatedTitle
                    text="projects"
                    shadowColor={theme.palette.primary.main}
                    fontSize={{
                        xs: "0.8rem",
                        sm: "1rem",
                        md: "1.2rem",
                        lg: "1.7rem",
                    }}
                />
            </Box>

            <ProjectsPage projects={projects} />
        </Stack>
    );
}

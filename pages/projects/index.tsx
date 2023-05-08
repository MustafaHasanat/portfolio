import CardsContainer from "@/components/projectsPage/cardsContainer";
import { Project } from "@/types/project";
import { getAllProjects } from "@/utils/sanity/project";
import { Stack, useTheme } from "@mui/material";

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
                px: 12,
                py: "25vh",
            }}
        >
            <CardsContainer projects={projects} />
        </Stack>
    );
}

import ProjectPage from "@/components/projectsPage/projectPage";
import { Project } from "@/types/project";
import { getAllProjects, getProjectByAlt } from "@/utils/sanity/project";
import { Stack, useTheme } from "@mui/material";

interface ProjectProps {
    project: Project;
}

export const getStaticPaths = async () => {
    const projects = await getAllProjects();

    const paths = projects.map((project) => {
        return {
            params: { title: project?.alt.toString() },
        };
    });

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async (
    context: any
): Promise<{
    props: ProjectProps;
}> => {
    const altText = context.params.title;
    const project = await getProjectByAlt(altText);

    return {
        props: { project },
    };
};

export default function ProjectDetails({ project }: ProjectProps) {
    const theme = useTheme();

    return (
        <Stack
            sx={{
                color: "white",
                bgcolor: theme.palette.secondary.main,
                px: { xs: 3, md: 10, lg: 25 },
                py: "20vh",
            }}
        >
            <ProjectPage project={project} />
        </Stack>
    );
}

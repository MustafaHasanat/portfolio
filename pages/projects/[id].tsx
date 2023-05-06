import { Project } from "@/types/project";
import { getAllProjects, getProjectById } from "@/utils/sanity/project";
import { Stack, useTheme } from "@mui/material";

interface ProjectProps {
    project: Project;
}

export const getStaticPaths = async () => {
    const projects = await getAllProjects();

    const paths = projects.map((project) => {
        return {
            params: { id: project._id.toString() },
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
    const id = context.params.id;
    const project = await getProjectById(id);

    return {
        props: { project },
    };
};

const Project = ({ project }: ProjectProps) => {
    const theme = useTheme();

    return (
        <Stack
            height="100vh"
            sx={{
                color: "white",
                bgcolor: theme.palette.secondary.main,
            }}
        ></Stack>
    );
};

export default Project;

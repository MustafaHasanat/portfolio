import { Project } from "@/types/project";
import { Link, Stack, useTheme } from "@mui/material";

interface CardProps {
    project: Project;
}

const Card = ({ project }: CardProps) => {
    const theme = useTheme();

    return (
        <Stack
            sx={{
                width: "40vw",
                height: "40vh",
                bgcolor: theme.palette.text.primary,
            }}
        >
            <Link href={"/projects/" + project._id}>{project.title}</Link>
        </Stack>
    );
};

export default Card;

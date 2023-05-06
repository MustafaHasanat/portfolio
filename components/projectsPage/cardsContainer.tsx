import { Project } from "@/types/project";
import { Stack, useTheme } from "@mui/material";
import { Fragment } from "react";
import Card from "./card";

interface CardsContainerProps {
    projects: Project[];
}

const CardsContainer = ({ projects }: CardsContainerProps) => {
    const theme = useTheme();

    return (
        <Stack
            direction="row"
            flexWrap="wrap"
            justifyContent="center"
            alignItems="center"
            gap={5}
            py={5}
            sx={{
                width: "100%",
                bgcolor: "green",
            }}
        >
            {projects.map((project, index) => {
                return (
                    <Fragment key={`project card number: ${index}`}>
                        <Card project={project} />
                    </Fragment>
                );
            })}
        </Stack>
    );
};

export default CardsContainer;

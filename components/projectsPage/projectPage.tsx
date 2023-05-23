import { Project } from "@/types/project";
import { Chip, Stack, Typography, useTheme } from "@mui/material";
import { GitHub } from "@mui/icons-material";
import { Fragment } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import LandingPagePic from "./landingPagePic";

interface ProjectProps {
    project: Project;
}

const ProjectPage = ({ project }: ProjectProps) => {
    const theme = useTheme();

    const textPair = (key: string, value: string) => {
        return (
            <Stack direction="row" spacing={2}>
                <Typography variant="h5" fontWeight="bold">
                    {key}
                </Typography>

                <Typography
                    variant="h5"
                    sx={{
                        opacity: 0.8,
                    }}
                >
                    {value}
                </Typography>
            </Stack>
        );
    };

    const githubButton = (url: string, text: string) => {
        return (
            <Link href={url} target="_blank">
                <Stack
                    spacing={1}
                    alignItems="center"
                    component={motion.div}
                    initial={{ color: theme.palette.text.primary }}
                    whileHover={{ color: theme.palette.primary.main }}
                    sx={{
                        width: { xs: 40, md: 60, lg: 50 },
                        height: { xs: 40, md: 60, lg: 50 },
                    }}
                >
                    <GitHub
                        sx={{
                            width: "100%",
                            height: "100%",
                        }}
                    />

                    <Typography>{text}</Typography>
                </Stack>
            </Link>
        );
    };

    return (
        <Stack>
            <Typography
                sx={{
                    mb: 5,
                    ml: "30px",
                    fontSize: { xs: "2rem", lg: "3rem" },
                    position: "relative",

                    "&::before": {
                        position: "absolute",
                        top: 0,
                        left: "-30px",
                        content: `""`,
                        width: "10px",
                        height: "100%",
                        bgcolor: theme.palette.primary.main,
                    },
                }}
            >
                {project.title}
            </Typography>

            <Stack
                direction={{ xs: "column-reverse", lg: "row" }}
                spacing={{ xs: 10, lg: 5 }}
            >
                <Stack spacing={3} width={{ xs: "100%", lg: "50%" }}>
                    <Typography variant="h5" textAlign="justify">
                        {project.description}
                    </Typography>

                    {textPair("Type:", project.productType.title)}
                    {textPair("Launched on:", project.launchedAt)}
                    {textPair("Role:", project.role)}
                </Stack>

                <Stack
                    direction={{ xs: "column", md: "row", lg: "column" }}
                    alignItems={{ xs: "center", md: "start", lg: "end" }}
                    spacing={3}
                    sx={{
                        width: { xs: "100%", lg: "50%" },
                    }}
                >
                    {project.website ? (
                        <LandingPagePic
                            href={project.website}
                            project={project}
                            filterIsOpened={true}
                        />
                    ) : (
                        <LandingPagePic
                            project={project}
                            filterIsOpened={true}
                        />
                    )}

                    <Stack
                        direction={{ xs: "row", md: "column", lg: "row" }}
                        spacing={{ xs: 10, lg: 5 }}
                        height={{ xs: "100%", lg: "auto" }}
                        justifyContent={{ xs: "center" }}
                    >
                        {project.githubFrontend &&
                            githubButton(project.githubFrontend, "frontend")}
                        {project.githubBackend &&
                            githubButton(project.githubBackend, "backend")}
                    </Stack>
                </Stack>
            </Stack>

            <Typography mt={5} variant="h5" fontWeight="bold">
                Tools
            </Typography>

            <Stack
                direction="row"
                width={{ xs: "100%", lg: "50%" }}
                gap={3}
                p={3}
                flexWrap="wrap"
            >
                {project.tools.map((tool, index) => {
                    return (
                        <Fragment
                            key={`project ${project.title} tool number: ${index}`}
                        >
                            <Chip
                                label={tool}
                                sx={{
                                    color: theme.palette.primary.main,
                                    bgcolor: theme.palette.secondary.main,
                                    boxShadow: `0 0 3px ${theme.palette.primary.main}`,
                                }}
                            />
                        </Fragment>
                    );
                })}
            </Stack>
        </Stack>
    );
};

export default ProjectPage;

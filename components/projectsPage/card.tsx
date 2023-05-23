import { Project } from "@/types/project";
import { Divider, Link, Stack, Typography, useTheme } from "@mui/material";
import SlidingTitle from "../shared/slidingTitle";
import LandingPagePic from "./landingPagePic";
import getDateInfo from "@/utils/helpers/getDateInfo";
import { Dispatch } from "react";
import { CardProps } from "./styles";

const Card = ({
    projectsState,
    dispatchProject,
    project,
}: CardProps) => {
    const theme = useTheme();

    const textPair = (key: string, value: string) => {
        return (
            <Stack direction="row" spacing={2}>
                <Typography
                    fontWeight="bold"
                    color={theme.palette.secondary.main}
                >
                    {key}
                </Typography>

                <Typography
                    color={theme.palette.secondary.main}
                    sx={{
                        opacity: 0.8,
                    }}
                >
                    {value}
                </Typography>
            </Stack>
        );
    };

    return (
        <Stack
            direction={projectsState.filterIsOpened ? "column" : "row"}
            justifyContent="space-between"
            alignItems="center"
            py={projectsState.filterIsOpened ? 4 : 0}
            px={4}
            sx={{
                height: projectsState.filterIsOpened ? "auto" : "45vh",
                bgcolor: theme.palette.text.primary,
                overflow: "hidden",
                borderRadius: 3,
                transition: "height 0.3s ease",
            }}
        >
            <LandingPagePic
                href={project.website}
                project={project}
                filterIsOpened={projectsState.filterIsOpened}
            />

            <Divider
                orientation={projectsState.filterIsOpened ? "vertical" : "horizontal"}
                sx={{
                    bgcolor: theme.palette.secondary.main,
                    width: projectsState.filterIsOpened ? "80%" : "1px",
                    height: projectsState.filterIsOpened ? "1px" : "80%",
                    my: projectsState.filterIsOpened ? 3 : 0,
                    opacity: 0.4,
                }}
            />

            <Stack
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={1}
                width={projectsState.filterIsOpened ? "100%" : "45%"}
                height={projectsState.filterIsOpened ? "auto" : "85%"}
            >
                <Link
                    href={"/projects/" + project.alt}
                    sx={{
                        textDecoration: "none",
                    }}
                >
                    <SlidingTitle
                        text={project.title}
                        primary={theme.palette.primary.main}
                        secondary={theme.palette.secondary.main}
                        extraSX={{
                            fontSize: "3.5vh",
                        }}
                    />
                </Link>

                <Typography
                    color={theme.palette.secondary.main}
                    textAlign="justify"
                    sx={{
                        opacity: 0.8,
                    }}
                >
                    {project.description}
                </Typography>

                {textPair("Type:", project.productType.title)}
                {textPair(
                    "Launched on:",
                    getDateInfo(project.launchedAt).readableForm
                )}
            </Stack>
        </Stack>
    );
};

export default Card;

import { Project } from "@/types/project";
import { Divider, Link, Stack, Typography, useTheme } from "@mui/material";
import SlidingTitle from "../shared/slidingTitle";
import LandingPagePic from "./landingPagePic";

interface CardProps {
    project: Project;
    filterIsOpened: boolean;
}

const Card = ({ project, filterIsOpened }: CardProps) => {
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
            direction={filterIsOpened ? "column" : "row"}
            justifyContent="space-between"
            alignItems="center"
            py={filterIsOpened ? 4 : 0}
            px={4}
            sx={{
                height: filterIsOpened ? "auto" : "40vh",
                bgcolor: theme.palette.text.primary,
                overflow: "hidden",
                borderRadius: 3,
                transition: "height 0.3s ease",
            }}
        >
            <LandingPagePic
                href={project.website}
                project={project}
                filterIsOpened={filterIsOpened}
            />

            <Divider
                orientation={filterIsOpened ? "vertical" : "horizontal"}
                sx={{
                    bgcolor: theme.palette.secondary.main,
                    width: filterIsOpened ? "80%" : "1px",
                    height: filterIsOpened ? "1px" : "80%",
                    my: filterIsOpened ? 3 : 0,
                    opacity: 0.4,
                }}
            />

            <Stack
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={1}
                width={filterIsOpened ? "100%" : "45%"}
                height={filterIsOpened ? "auto" : "85%"}
            >
                <Link
                    href={"/projects/" + project._id}
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

                {textPair("Type:", project.type)}
                {textPair("Launched at:", project.launchedAt.toString())}

                <Typography
                    color={theme.palette.secondary.main}
                    textAlign="justify"
                    sx={{
                        opacity: 0.8,
                    }}
                >
                    {project.description}
                </Typography>
            </Stack>
        </Stack>
    );
};

export default Card;

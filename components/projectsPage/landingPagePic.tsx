import { Project } from "@/types/project";
import { Avatar, Box, useTheme, Link } from "@mui/material";

const LandingPagePic = ({
    href,
    project,
    filterIsOpened,
}: {
    href: string;
    project: Project;
    filterIsOpened: boolean;
}) => {
    const theme = useTheme();

    const avatarPhoto = (
        <Avatar
            variant="square"
            alt={project.title}
            src={project.landingPage.asset.url}
            sx={{
                borderRadius: 3,
                width: "auto",
                height: "100%",
                border: `1px solid ${theme.palette.secondary.main}`,
            }}
        />
    );

    const sx = {
        width: filterIsOpened ? "100%" : "50%",
        height: filterIsOpened ? "auto" : "85%",
    };

    return href ? (
        <Link
            href={project.website}
            target="_blank"
            sx={{
                ...sx,
                transition: "opacity 0.3s ease",

                "&:hover": {
                    opacity: 0.7,
                },
            }}
        >
            {avatarPhoto}
        </Link>
    ) : (
        <Box sx={sx}>{avatarPhoto}</Box>
    );
};

export default LandingPagePic;

import { Project } from "@/types/project";
import { Avatar, Box, useTheme, Link } from "@mui/material";
import { motion } from "framer-motion";

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

    const initialSX = {
        width: "50%",
        height: "85%",
    };

    const animatedSX = {
        width: filterIsOpened ? "100%" : "50%",
        height: filterIsOpened ? "100%" : "85%",
    };

    return href ? (
        <Link
            href={project.website}
            component={motion.a}
            initial={initialSX}
            animate={animatedSX}
            whileHover={{ opacity: 0.7 }}
            transition={{ duration: 0.2 }}
            target="_blank"
        >
            {avatarPhoto}
        </Link>
    ) : (
        <Box
            component={motion.div}
            initial={initialSX}
            animate={animatedSX}
            whileHover={{ opacity: 0.7 }}
            transition={{ duration: 0.2 }}
        >
            {avatarPhoto}
        </Box>
    );
};

export default LandingPagePic;

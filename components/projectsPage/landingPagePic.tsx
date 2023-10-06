import { Project } from "@/types/project";
import {
    Avatar,
    Box,
    useTheme,
    Link,
    Typography,
    useMediaQuery,
    Stack,
} from "@mui/material";
import { motion } from "framer-motion";
import LaunchIcon from "@mui/icons-material/Launch";
import { mqHook } from "@/styles/mq";

const LandingPagePic = ({
    href,
    project,
    filterIsOpened,
}: {
    href?: string;
    project: Project;
    filterIsOpened: boolean;
}) => {
    const lgScreen = useMediaQuery(mqHook.LG);
    const theme = useTheme();

    const avatarPhoto = (
        <Avatar
            variant="square"
            alt={project.alt}
            src={project.landingPage.asset.url}
            sx={{
                width: "auto",
                height: "100%",
                border: `1px solid ${theme.palette.secondary.main}`,
            }}
        />
    );

    const backlight = (
        <Stack
            component={motion.div}
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            spacing={3}
            direction="row"
            sx={{
                position: "absolute",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background:
                    "linear-gradient(rgba(255,255,255,0.6), rgba(255,255,255,0.6))",
            }}
        >
            <Typography
                fontSize={{ xs: "2.5rem", md: "4.5rem", lg: "3rem" }}
                letterSpacing={4}
                color={theme.palette.secondary.main}
            >
                visit
            </Typography>
            <LaunchIcon
                sx={{
                    color: theme.palette.secondary.main,
                    height: { xs: "2rem", md: "4rem", lg: "2.5rem" },
                    width: "auto",
                }}
            />
        </Stack>
    );

    const initialSX = {
        width: "50%",
        height: "85%",
    };

    const animatedSX = {
        width: !lgScreen || filterIsOpened ? "100%" : "50%",
        height: !lgScreen || filterIsOpened ? "100%" : "85%",
    };

    return href ? (
        <Link
            href={project.website}
            component={motion.a}
            initial={initialSX}
            animate={animatedSX}
            transition={{ duration: 0.2 }}
            target="_blank"
            sx={{
                borderRadius: 3,
                position: "relative",
                overflow: "hidden",
            }}
        >
            {avatarPhoto}
            {backlight}
        </Link>
    ) : (
        <Box
            component={motion.div}
            initial={initialSX}
            animate={animatedSX}
            transition={{ duration: 0.2 }}
        >
            {avatarPhoto}
        </Box>
    );
};

export default LandingPagePic;

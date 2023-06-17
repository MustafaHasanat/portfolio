import { AnimationControls, motion } from "framer-motion";
import Navbar from "../navbar";
import { Stack, useTheme } from "@mui/material";

interface LeftDrawerProps {
    animation: AnimationControls;
    drawerIsOpened: boolean;
}
const LeftDrawer = ({ animation, drawerIsOpened }: LeftDrawerProps) => {
    const theme = useTheme();

    return (
        <Stack
            component={motion.div}
            initial={{ x: "100%" }}
            animate={{
                x: drawerIsOpened ? 0 : "100%",
                transition: { type: "tween" },
            }}
            justifyContent="start"
            alignItems="center"
            sx={{
                position: "fixed",
                top: 0,
                right: 0,
                pt: { xs: "20vh", sm: "16vh" },
                px: { xs: 0, sm: 7 },
                width: { xs: "100%", md: "auto" },
                height: "100%",
                bgcolor: theme.palette.secondary.main,
                borderLeft: {
                    xs: "unset",
                    md: `3px solid ${theme.palette.primary.main}`,
                },
                borderBottom: {
                    xs: `3px solid ${theme.palette.primary.main}`,
                    md: "unset",
                },
                zIndex: 35,
            }}
        >
            <Navbar animation={animation} />
        </Stack>
    );
};

export default LeftDrawer;

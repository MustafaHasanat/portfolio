import { AnimationControls, motion } from "framer-motion";
import Navbar from "../navbar";
import { Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import BMCBox from "./bmcBox";

interface LeftDrawerProps {
    animation: AnimationControls;
    drawerIsOpened: boolean;
}
const LeftDrawer = ({ animation, drawerIsOpened }: LeftDrawerProps) => {
    const theme = useTheme();
    const mdScreen = useMediaQuery("(min-width:768px)");

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
                width: { xs: "100%", sm: "auto" },
                height: "100%",
                bgcolor: theme.palette.secondary.main,
                borderLeft: {
                    xs: "unset",
                    sm: `3px solid ${theme.palette.primary.main}`,
                },
                borderBottom: {
                    xs: `3px solid ${theme.palette.primary.main}`,
                    sm: "unset",
                },
                zIndex: 35,
            }}
        >
            <Navbar animation={animation} />

            {!mdScreen && (
                <Stack
                    direction="row"
                    p={3}
                    mt={3}
                    spacing={3}
                    justifyContent="center"
                    alignItems="center"
                >
                    <BMCBox />

                    <Typography
                        variant="h6"
                        color={theme.palette.text.primary}
                        width="50%"
                    >
                        Buy me a coffee !
                    </Typography>
                </Stack>
            )}
        </Stack>
    );
};

export default LeftDrawer;

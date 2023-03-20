import Navbar from "../navbar";
import { Stack, Avatar, Typography, Box } from "@mui/material";
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useTheme } from "@mui/material";
import {
    headerVariants,
    headerBoxStyles,
    headerColoredBoxStyles,
} from "./styles";

interface HeaderProps {
    switchPointInView: boolean;
}

const Header = ({ switchPointInView }: HeaderProps) => {
    const theme = useTheme();
    const headerAnimations = useAnimation();

    useEffect(() => {
        switchPointInView
            ? headerAnimations.start("visible")
            : headerAnimations.start("hidden");
    }, [headerAnimations, switchPointInView]);

    return (
        <Box sx={{ position: "relative" }}>
            <Stack id="header-box" direction="row" sx={headerBoxStyles}>
                <Box
                    id="header-colored-box"
                    sx={headerColoredBoxStyles(theme.palette.purple.dark)}
                    component={motion.div}
                    animate={headerAnimations}
                    initial="visible"
                    variants={headerVariants}
                />

                <Stack
                    id="header-logo-box"
                    direction="row"
                    alignItems="center"
                    spacing={2}
                >
                    <Avatar
                        variant="square"
                        src="images\logo.png"
                        sx={{
                            width: "3rem",
                            height: "auto",
                        }}
                    />

                    <Typography>Mustafa Alhasanat</Typography>
                </Stack>

                <Navbar
                    animation={headerAnimations}
                    switchPointInView={switchPointInView}
                />
            </Stack>
        </Box>
    );
};

export default Header;

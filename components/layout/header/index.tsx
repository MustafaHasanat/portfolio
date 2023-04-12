import Navbar from "../navbar";
import { Stack, Avatar, Typography, Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useAnimation, motion } from "framer-motion";
import { useTheme } from "@mui/material";
import {
    headerVariants,
    headerBoxStyles,
    headerColoredBoxStyles,
    titleStyles,
    titleCloneStyles,
} from "./styles";

interface HeaderProps {
    landingSectionInView: boolean;
}

const Header = ({ landingSectionInView }: HeaderProps) => {
    const theme = useTheme();
    const headerAnimations = useAnimation();

    useEffect(() => {
        landingSectionInView
            ? headerAnimations.start("visible")
            : headerAnimations.start("hidden");
    }, [headerAnimations, landingSectionInView]);

    return (
        <Box
            component="header"
            sx={{
                position: "relative",
                zIndex: 40,
            }}
        >
            <Stack
                id="header-box"
                direction="row"
                sx={headerBoxStyles(
                    landingSectionInView,
                    landingSectionInView
                        ? "transparent"
                        : theme.palette.base.dark
                )}
            >
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
                    sx={{
                        cursor: "pointer",
                    }}
                >
                    <Avatar
                        variant="square"
                        src="images\logo.png"
                        alt="logo"
                        sx={{
                            width: "3rem",
                            height: "auto",
                        }}
                    />

                    <Typography
                        sx={titleStyles(
                            landingSectionInView
                                ? theme.palette.base.light
                                : theme.palette.base.light,
                            landingSectionInView
                                ? theme.palette.blue.main
                                : theme.palette.base.light
                        )}
                    >
                        <Box component="span">
                            &nbsp;&nbsp;Mustafa&nbsp;Alhasanat&nbsp;&nbsp;
                        </Box>
                        <Box
                            id="shadow-title"
                            component="span"
                            sx={titleCloneStyles(
                                landingSectionInView
                                    ? theme.palette.blue.light
                                    : theme.palette.base.light
                            )}
                            aria-hidden="true"
                        >
                            &nbsp;&nbsp;Mustafa&nbsp;Alhasanat&nbsp;&nbsp;
                        </Box>
                    </Typography>
                </Stack>

                <Navbar
                    animation={headerAnimations}
                    landingSectionInView={landingSectionInView}
                />
            </Stack>
        </Box>
    );
};

export default Header;

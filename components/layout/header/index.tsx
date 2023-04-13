import Navbar from "../navbar";
import { Stack, Avatar, Typography, Box, Link } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { useAnimation, motion } from "framer-motion";
import { useTheme } from "@mui/material";
import {
    // headerVariants,
    headerBoxStyles,
    // headerColoredBoxStyles,
    titleStyles,
    titleCloneStyles,
} from "./styles";
import { urls } from "@/utils/constants/global/global";

interface HeaderProps {
    landingSectionInView: boolean;
}

const Header = ({ landingSectionInView }: HeaderProps) => {
    const theme = useTheme();
    const headerAnimations = useAnimation();
    const bmcAnimations = useAnimation();
    const [headerPosition, setHeaderPosition] = useState("0vh");

    useEffect(() => {
        var lastScroll = 0;

        // useMemo(() => first, [second])

        window.addEventListener("scroll", () => {
            const currentScroll = window.scrollY;

            if (currentScroll >= lastScroll) {
                setHeaderPosition("-16vh");
                console.log("down");
            } else if (currentScroll < lastScroll) {
                setHeaderPosition("0vh");
                console.log("up");
            }

            lastScroll = currentScroll;
        });
    }, []);

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
                    headerPosition,
                    landingSectionInView
                        ? "transparent"
                        : theme.palette.base.light,
                    theme.palette.base.dark
                )}
            >
                {/* <Box
                    id="header-colored-box"
                    sx={headerColoredBoxStyles(theme.palette.purple.dark)}
                    component={motion.div}
                    animate={headerAnimations}
                    initial="visible"
                    variants={headerVariants}
                /> */}

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

                    <Box
                        sx={{
                            position: "relative",
                            bgcolor: theme.palette.base.light,
                            width: "6vh",
                            height: "6vh",
                            borderRadius: 2,
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <Link href={urls.myBMCURL} title="bmc" target="_blank">
                            <Avatar
                                src="icons\websites\bmcIcon.png"
                                component="div"
                                onMouseEnter={() => {
                                    bmcAnimations.start("visible");
                                }}
                                onMouseLeave={() => {
                                    bmcAnimations.start("hidden");
                                }}
                                sx={{
                                    position: "relative",
                                    width: "auto",
                                    height: "80%",
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                }}
                            />
                        </Link>

                        <Avatar
                            component={motion.div}
                            animate={bmcAnimations}
                            initial="hidden"
                            variants={{
                                visible: {
                                    opacity: 1,
                                    transition: { duration: 0.3 },
                                },
                                hidden: {
                                    opacity: 0,
                                    transition: { duration: 0.3 },
                                },
                            }}
                            src="icons\websites\bmcIcon2.png"
                            sx={{
                                padding: 1,
                                bgcolor: theme.palette.base.light,
                                border: `2px solid ${theme.palette.base.dark}`,
                                width: "200px",
                                height: "auto",
                                top: 80,
                                position: "absolute",
                                borderRadius: 2,
                                left: "50%",
                                transform: "translateX(-50%)",
                            }}
                        />
                    </Box>
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

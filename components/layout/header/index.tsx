import Navbar from "../navbar";
import { Stack, Avatar, Box, Link, useMediaQuery } from "@mui/material";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { motion, AnimationControls } from "framer-motion";
import { useTheme } from "@mui/material";
import { headerBoxStyles } from "./styles";
import SlidingTitle from "@/components/shared/slidingTitle";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import BMCBox from "./bmcBox";
import { mqHook } from "@/styles/mq";

interface HeaderProps {
    landingSectionInView: boolean;
    headerAnimations: AnimationControls;
    setDrawerIsOpened: Dispatch<SetStateAction<boolean>>;
    drawerIsOpened: boolean;
}

const Header = ({
    landingSectionInView,
    headerAnimations,
    setDrawerIsOpened,
    drawerIsOpened,
}: HeaderProps) => {
    const theme = useTheme();
    const [headerPosition, setHeaderPosition] = useState("0vh");
    const lgScreen = useMediaQuery(mqHook.LG);
    const mdScreen = useMediaQuery(mqHook.MD);

    useEffect(() => {
        var lastScroll = 0;

        document
            .getElementById("layout-box")
            ?.addEventListener("scroll", () => {
                const currentScroll = window.scrollY;
                console.log(currentScroll);

                if (currentScroll >= lastScroll) {
                    setHeaderPosition("-16vh");
                    setDrawerIsOpened(false);
                    console.log("down");
                } else if (currentScroll < lastScroll) {
                    setHeaderPosition("0vh");
                    console.log("up");
                }

                lastScroll = currentScroll;
            });
    }, [setDrawerIsOpened]);

    useEffect(() => {
        landingSectionInView
            ? headerAnimations.start("visible")
            : headerAnimations.start("hidden");
    }, [headerAnimations, landingSectionInView]);

    return (
        <Stack
            component="header"
            id="header-box"
            direction="row"
            sx={headerBoxStyles(
                landingSectionInView,
                headerPosition,
                landingSectionInView
                    ? "transparent"
                    : theme.palette.primary.main,
                theme.palette.secondary.main
            )}
        >
            <Stack
                id="header-logo-box"
                direction="row"
                alignItems="center"
                spacing={2}
                sx={{
                    cursor: "pointer",
                }}
            >
                <Link
                    href="/"
                    sx={{
                        width: "3rem",
                        height: "auto",
                    }}
                >
                    <Avatar
                        variant="square"
                        src={"/icons/logo.png"}
                        alt="logo"
                        sx={{
                            width: "3rem",
                            height: "auto",
                            filter: `drop-shadow(0px 0px 2px ${theme.palette.primary.main})`,
                        }}
                    />
                </Link>

                {mdScreen && (
                    <Link href="/" sx={{ textDecoration: "none" }}>
                        <SlidingTitle
                            text={"Mustafa Alhasanat"}
                            primary={theme.palette.primary.main}
                            secondary={theme.palette.text.primary}
                        />
                    </Link>
                )}

                {mdScreen && <BMCBox />}
            </Stack>

            {!lgScreen && (
                <Box
                    component={motion.div}
                    initial={{ rotate: 0, opacity: 0 }}
                    animate={{
                        rotate: drawerIsOpened ? 90 : 0,
                        opacity: !lgScreen ? 1 : 0,
                    }}
                    onClick={() => {
                        setDrawerIsOpened((prev) => !prev);
                    }}
                    sx={{
                        width: "3rem",
                        height: "auto",
                    }}
                >
                    <MenuRoundedIcon
                        sx={{
                            color: theme.palette.text.primary,
                            width: "100%",
                            height: "100%",
                        }}
                    />
                </Box>
            )}

            {lgScreen && <Navbar animation={headerAnimations} />}
        </Stack>
    );
};

export default Header;

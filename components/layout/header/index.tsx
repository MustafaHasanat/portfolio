import Navbar from "../navbar";
import { Stack, Avatar, Box, Link, useMediaQuery } from "@mui/material";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { motion, AnimationControls } from "framer-motion";
import { useTheme } from "@mui/material";
import { headerBoxStyles } from "./styles";
import { useSelector } from "react-redux";
import { GlobalAssetProps } from "@/utils/store/globalAssetsSlice";
import SlidingTitle from "@/components/shared/slidingTitle";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import BMCBox from "./bmcBox";

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
    const lgScreen = useMediaQuery("(min-width:1440px)");
    const mdScreen = useMediaQuery("(min-width:768px)");
    const smScreen = useMediaQuery("(min-width:425px)");

    const globalAssets = useSelector(
        (state: { globalAssetsReducer: { globalAssets: GlobalAssetProps } }) =>
            state.globalAssetsReducer.globalAssets
    );

    useEffect(() => {
        var lastScroll = 0;

        window.addEventListener("scroll", () => {
            const currentScroll = window.scrollY;

            if (currentScroll >= lastScroll) {
                setHeaderPosition("-16vh");
                setDrawerIsOpened(false);
            } else if (currentScroll < lastScroll) {
                setHeaderPosition("0vh");
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
        <Box
            component="header"
            width="100%"
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
                    <Avatar
                        variant="square"
                        src={globalAssets?.websiteLogo?.src}
                        alt="logo"
                        sx={{
                            width: "3rem",
                            height: "auto",
                        }}
                    />

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
        </Box>
    );
};

export default Header;

import Navbar from "../navbar";
import { Stack, Avatar, Box, Link } from "@mui/material";
import { useEffect, useState } from "react";
import { useAnimation, motion } from "framer-motion";
import { useTheme } from "@mui/material";
import { headerBoxStyles, titleStyles, titleCloneStyles } from "./styles";
import { urls } from "@/utils/constants/global";
import { useSelector } from "react-redux";
import { GlobalAssetProps } from "@/utils/store/globalAssetsSlice";
import SlidingTitle from "@/components/shared/slidingTitle";

interface HeaderProps {
    landingSectionInView: boolean;
}

const Header = ({ landingSectionInView }: HeaderProps) => {
    const theme = useTheme();
    const headerAnimations = useAnimation();
    const bmcAnimations = useAnimation();
    const [headerPosition, setHeaderPosition] = useState("0vh");

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
            } else if (currentScroll < lastScroll) {
                setHeaderPosition("0vh");
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
            width="100vw"
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

                    <Link href="/" sx={{ textDecoration: "none" }}>
                        <SlidingTitle
                            text={"Mustafa Alhasanat"}
                            primary={theme.palette.primary.main}
                            secondary={theme.palette.text.primary}
                        />
                    </Link>

                    <Box
                        sx={{
                            position: "relative",
                            bgcolor: theme.palette.secondary.light,
                            width: "6vh",
                            height: "6vh",
                            borderRadius: 2,
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <Link href={urls.myBMCURL} title="bmc" target="_blank">
                            <Avatar
                                src={globalAssets?.bmcLogo?.src}
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
                                    scale: 1,
                                    x: "-50%",
                                    opacity: 1,
                                    transition: { duration: 0.2 },
                                },
                                hidden: {
                                    scale: 0,
                                    x: "-50%",
                                    opacity: 0,
                                    transition: { duration: 0.3 },
                                },
                            }}
                            src={globalAssets?.bmcSlogan?.src}
                            sx={{
                                padding: 1,
                                bgcolor: theme.palette.secondary.light,
                                border: `2px solid ${theme.palette.secondary.dark}`,
                                width: "200px",
                                height: "auto",
                                top: 80,
                                position: "absolute",
                                borderRadius: 2,
                                left: "50%",
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

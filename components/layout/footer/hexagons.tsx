/* eslint-disable react-hooks/exhaustive-deps */
import { Avatar, Box, Link, Stack, Typography, useTheme } from "@mui/material";
import LayoutConstants from "@/utils/constants/global/layout";
import { Fragment, useEffect, useState } from "react";
import HexagonRoundedIcon from "@mui/icons-material/HexagonRounded";
import { useSelector } from "react-redux";
import { FooterSocial } from "@/types/footerSocial";

const Hexagons = () => {
    const theme = useTheme();

    const defaultTitle = "Check my profiles!";
    const [title, setTitle] = useState(defaultTitle);

    const hexagonSize = "90px";

    let footerSocials = useSelector(
        (state: { globalAssetsReducer: { footerSocials: FooterSocial[] } }) =>
            state.globalAssetsReducer.footerSocials
    );

    return (
        <Stack
            p={2}
            justifyContent="space-evenly"
            alignItems="center"
            position="relative"
            width="40%"
            height="100%"
        >
            <Typography
                width="80%"
                textAlign="center"
                color={theme.palette.text.primary}
                fontSize="1.5vw"
            >
                {title}
            </Typography>

            <Box
                sx={{
                    position: "relative",
                    width: "100%",
                    height: "70%",
                }}
            >
                {footerSocials.map((website, index) => {
                    return (
                        <Fragment key={`footer social item number: ${index}`}>
                            <Box
                                component="div"
                                onMouseEnter={() => {
                                    setTitle(website.text);
                                }}
                                onMouseLeave={() => {
                                    setTitle(defaultTitle);
                                }}
                                sx={{
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    transform: website.transform,
                                    width: hexagonSize,
                                    height: hexagonSize,
                                    opacity: 0.7,
                                    transition: "0.3s ease",

                                    "&:hover": {
                                        opacity: 1,
                                        transform:
                                            website.transform + " scale(1.2)",
                                    },
                                }}
                            >
                                <Link
                                    href={website.link}
                                    title={website.title}
                                    target="_blank"
                                >
                                    <HexagonRoundedIcon
                                        sx={{
                                            position: "absolute",
                                            width: "100%",
                                            height: "100%",
                                            color: website.bgColor,
                                        }}
                                    />

                                    <Avatar
                                        src={website.image.asset.url}
                                        sx={{
                                            position: "absolute",
                                            top: "50%",
                                            left: "50%",
                                            transform:
                                                "translateX(-50%) translateY(-50%)",
                                            width: "60%",
                                            height: "60%",
                                        }}
                                    />
                                </Link>
                            </Box>
                        </Fragment>
                    );
                })}
            </Box>
        </Stack>
    );
};

export default Hexagons;

import { Avatar, Box, Link, Stack, useTheme } from "@mui/material";
import HexagonIcon from "@mui/icons-material/Hexagon";
import LayoutConstants from "@/utils/constants/global/layout";
import { Fragment } from "react";
import HexagonRoundedIcon from "@mui/icons-material/HexagonRounded";

const Hexagons = () => {
    const theme = useTheme();

    return (
        <Stack
            p={5}
            justifyContent="center"
            alignItems="center"
            position="relative"
            width="40%"
            height="100%"
        >
            {LayoutConstants.footerSocials.map((website, index) => {
                return (
                    <Fragment key={`footer social item number: ${index}`}>
                        <Box
                            sx={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: website.transform,
                                width: "100px",
                                height: "100px",
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
                                title={website.link}
                                target="_blank"
                            >
                                <HexagonRoundedIcon
                                    sx={{
                                        position: "absolute",
                                        width: "100%",
                                        height: "100%",
                                        color: website.bgcolor,
                                    }}
                                />

                                <Avatar
                                    src={website.src}
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
        </Stack>
    );
};

export default Hexagons;

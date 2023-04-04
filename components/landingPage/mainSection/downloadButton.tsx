import { Stack, Typography, Button, Box } from "@mui/material";
import { useTheme } from "@mui/material";
import {
    downloadButtonStyles,
    buttonVariants,
    downloadButtonWraperStyles,
} from "./styles";
import { useAnimation, motion } from "framer-motion";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import WelcomeSectionConstants from "@/utils/constants/landingPage/welcomeSection";
import { Fragment, useState } from "react";

const DownloadButton = () => {
    const theme = useTheme();
    const buttonAnimations = useAnimation();
    const [shadowColor, setShadowColor] = useState(theme.palette.base.dark)

    return (
        <Button
            component={motion.button}
            initial={{
                opacity: 0
            }}
            animate={{
                opacity: 1
            }}
            transition={{
                ease: "easeIn",
                duration: 0.3,
                type: "spring",
                stiffness: 400,
                damping: 15,
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            sx={downloadButtonStyles(theme.palette.base.light)}
            onMouseEnter={() => {
                setShadowColor(theme.palette.purple.dark)
                buttonAnimations.start("visible");
            }}
            onMouseLeave={() => {
                setShadowColor(theme.palette.base.dark)
                buttonAnimations.start("hidden");
            }}
        >
            <Stack
                component={motion.div}
                animate={buttonAnimations}
                initial="hidden"
                variants={buttonVariants(
                    theme.palette.purple.dark,
                    theme.palette.blue.light
                )}
                position="absolute"
                justifyContent="center"
                alignItems="center"
            >
                <Typography
                    fontWeight="bold"
                    fontSize="1.3vw"
                    width="15vw"
                    height="5vw"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    textTransform="uppercase"
                    color={theme.palette.base.dark}
                >
                    Download CV
                </Typography>

                <Box sx={downloadButtonWraperStyles}>
                    <FileDownloadOutlinedIcon
                        sx={{
                            width: "auto",
                            height: "90%",
                            color: theme.palette.base.light,
                        }}
                    />
                </Box>
            </Stack>

            {WelcomeSectionConstants.downloadButtonAnimations("3px", shadowColor).map((item, index) => {
                return (
                    <Fragment key={`shadow item number: ${index}`}>
                        <Box
                            component="span"
                            sx={{
                                position: "absolute",
                                display: "block",
                                top: item.pos[0],
                                bottom: item.pos[1],
                                left: item.pos[2],
                                right: item.pos[3],
                                width: item.width,
                                height: item.height,
                                background: item.background,
                                animation: item.animation,
                                animationDelay: item.animationDelay,
                            }}
                        />
                    </Fragment>
                );
            })}
        </Button>
    );
};

export default DownloadButton;

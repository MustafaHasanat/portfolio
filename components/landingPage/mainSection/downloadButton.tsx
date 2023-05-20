import { Stack, Typography, Button, Box, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material";
import {
    downloadButtonStyles,
    buttonVariants,
    downloadButtonWrapperStyles,
} from "./styles";
import { useAnimation, motion } from "framer-motion";
import Link from "next/link";
import { urls } from "@/utils/constants/global";
import DescriptionIcon from '@mui/icons-material/Description';

const DownloadButton = () => {
    const theme = useTheme();
    const buttonAnimations = useAnimation();

    const mdScreen = useMediaQuery("(min-width:768px)");
    const lgScreen = useMediaQuery("(min-width:1440px)");
    const fourKScreen = useMediaQuery("(min-width:2560px)");

    const buttonWidth = { xs: "12rem", md: "15rem" };
    const buttonHeight = fourKScreen
        ? "4rem"
        : lgScreen
        ? "4rem"
        : mdScreen
        ? "3rem"
        : "4rem";

    return (
        <Button
            component={motion.button}
            initial={{
                opacity: 0,
                x: -150,
            }}
            animate={{
                opacity: 1,
                x: lgScreen ? 0 : "-50%",
            }}
            transition={{
                ease: "easeIn",
                duration: 0.3,
                type: "spring",
                stiffness: 400,
                damping: 15,
            }}
            whileTap={{ scale: 0.9 }}
            sx={downloadButtonStyles(buttonWidth, buttonHeight)}
            onMouseEnter={() => {
                buttonAnimations.start("visible");
            }}
            onMouseLeave={() => {
                buttonAnimations.start("hidden");
            }}
        >
            <Stack
                component={motion.div}
                animate={buttonAnimations}
                initial="hidden"
                variants={buttonVariants(
                    theme.palette.secondary.main,
                    `${theme.palette.primary.main}CC`,
                    buttonHeight
                )}
                position="absolute"
                justifyContent="center"
                alignItems="center"
            >
                <Typography
                    fontWeight="bold"
                    fontSize="100%"
                    width={buttonWidth}
                    height={buttonHeight}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    textTransform="uppercase"
                    letterSpacing={3}
                    color={theme.palette.secondary.main}
                >
                    check my resume
                </Typography>

                <Link
                    href={urls.myResumeURL}
                    title="Go to my resume on drive"
                    target="_blank"
                >
                    <Box
                        sx={downloadButtonWrapperStyles(
                            buttonWidth,
                            buttonHeight
                        )}
                    >
                        <DescriptionIcon
                            sx={{
                                width: "auto",
                                height: "50%",
                                color: theme.palette.primary.main,
                            }}
                        />
                    </Box>
                </Link>
            </Stack>

            {/* {WelcomeSectionConstants.downloadButtonAnimations(
                "2px",
                shadowColor
            ).map((item, index) => {
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
            })} */}
        </Button>
    );
};

export default DownloadButton;

import { Stack, Typography, Button, Box } from "@mui/material";
import { useTheme } from "@mui/material";
import {
    downloadButtonStyles,
    buttonVariants,
    downloadButtonWraperStyles,
} from "./styles";
import { useAnimation, motion } from "framer-motion";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import Link from "next/link";
import { urls } from "@/utils/constants/global";

const DownloadButton = () => {
    const theme = useTheme();
    const buttonAnimations = useAnimation();

    const buttonWidth = "13vw";
    const buttonHeight = "4vw";

    return (
        <Button
            component={motion.button}
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
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
                    Download CV
                </Typography>

                <Link
                    href={urls.myResumeURL}
                    title="Go to my resume on drive"
                    target="_blank"
                >
                    <Box
                        sx={downloadButtonWraperStyles(
                            buttonWidth,
                            buttonHeight
                        )}
                    >
                        <FileDownloadOutlinedIcon
                            sx={{
                                width: "auto",
                                height: "90%",
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

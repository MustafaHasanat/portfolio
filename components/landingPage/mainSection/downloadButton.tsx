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
import { mqHook } from "@/styles/mq";

const DownloadButton = () => {
    const theme = useTheme();
    const buttonAnimations = useAnimation();

    const mdScreen = useMediaQuery(mqHook.MD);
    const lgScreen = useMediaQuery(mqHook.LG);
    const fourKScreen = useMediaQuery(mqHook.XL);

    const buttonWidth = { xs: "18rem", md: "15rem" };
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
            whileTap={{ scale: 0.9 }}
            onMouseEnter={() => {
                buttonAnimations.start("visible");
            }}
            onMouseLeave={() => {
                buttonAnimations.start("hidden");
            }}
            sx={downloadButtonStyles(buttonWidth, buttonHeight)}
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

        </Button>
    );
};

export default DownloadButton;

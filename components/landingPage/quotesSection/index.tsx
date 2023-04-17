import InteractiveTitle from "@/components/shared/title";
import { Box, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { MutableRefObject, useState } from "react";
import QuotesSectionConstants from "@/utils/constants/landingPage/quotesSection";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";

interface QuotesSecctionProps {
    inViewRef: MutableRefObject<null>;
}

const QuotesSecction = ({ inViewRef }: QuotesSecctionProps) => {
    const theme = useTheme();
    const [bgImage, setBgImage] = useState(0);

    const handleArrowClick = (arrow: string) => {
        if (arrow === "left") {
            setBgImage((prev) =>
                prev > 0 ? prev - 1 : QuotesSectionConstants.quotes.length - 1
            );
        } else {
            setBgImage((prev) =>
                prev < QuotesSectionConstants.quotes.length - 1 ? prev + 1 : 0
            );
        }
    };

    return (
        <Stack id="home-quotes" py={10} position="relative">
            <Box
                ref={inViewRef}
                sx={{
                    position: "absolute",
                    top: "50%",
                    width: " 100%",
                }}
            />

            <InteractiveTitle
                primary={theme.palette.blue.main}
                secondary={theme.palette.base.dark}
                tertiary={theme.palette.blue.main}
                containerHeight="30vh"
                buttonWidth="50%"
                buttonHeight="60%"
                linesSpace={15}
                buttonCuttingRatio={0.13}
                buttonGap={18}
            >
                <Typography
                    fontSize="2.7vw"
                    color={theme.palette.base.dark}
                    textTransform="uppercase"
                    letterSpacing={3}
                    fontWeight="bold"
                >
                    favorite quotes
                </Typography>
            </InteractiveTitle>

            <Stack
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
                sx={{ height: "80vh" }}
            >
                <Box
                    component={motion.div}
                    onClick={() => {
                        handleArrowClick("left");
                    }}
                    sx={{ width: "10%", height: "auto", cursor: "pointer" }}
                >
                    <KeyboardDoubleArrowLeftIcon
                        sx={{ height: "100%", width: "100%" }}
                    />
                </Box>

                <Stack sx={{ height: "80%", width: "60%" }} alignItems="center">
                    <Box
                        component={motion.div}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        sx={{
                            position: "relative",
                            width: "100%",
                            height: "100%",
                            backgroundImage: `
                                linear-gradient(rgba(0, 0, 0, 0.6), 
                                rgba(0, 0, 0, 0.9)), 
                                url("${QuotesSectionConstants.quotes[bgImage].src}")`,
                            backgroundRepeat: "no-repeat",
                            backgroundPositionY: "center",
                            backgroundPositionX: "center",
                            backgroundSize: "cover",
                        }}
                    >
                        <Typography
                            textTransform="capitalize"
                            fontSize="2.5vw"
                            sx={{
                                position: "absolute",
                                top: 80,
                                left: 80,
                                width: "80%",
                                bgcolor: "transparent",
                                color: theme.palette.base.light,
                            }}
                        >
                            {QuotesSectionConstants.quotes[bgImage].quote}
                        </Typography>

                        <Typography
                            textTransform="uppercase"
                            fontSize="1.5vw"
                            sx={{
                                position: "absolute",
                                bottom: 80,
                                right: 80,
                                bgcolor: "transparent",
                                color: theme.palette.base.light,
                            }}
                        >
                            {"~ " +
                                QuotesSectionConstants.quotes[bgImage].author}
                        </Typography>
                    </Box>
                </Stack>

                <Box
                    component={motion.div}
                    onClick={() => {
                        handleArrowClick("right");
                    }}
                    sx={{ width: "10%", height: "auto", cursor: "pointer" }}
                >
                    <KeyboardDoubleArrowRightIcon
                        sx={{ height: "100%", width: "100%" }}
                    />
                </Box>
            </Stack>
        </Stack>
    );
};

export default QuotesSecction;

/* eslint-disable react-hooks/exhaustive-deps */
import InteractiveTitle from "@/components/shared/title";
import { Box, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { Fragment, MutableRefObject, useEffect, useState } from "react";
import QuotesSectionConstants from "@/utils/constants/landingPage/quotesSection";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import GlassBox from "@/components/shared/glassBox";
import shuffleArray from "@/utils/helpers/shuffleArray";


interface QuotesSectionProps {
    inViewRef: MutableRefObject<null>;
}

const QuotesSection = ({ inViewRef }: QuotesSectionProps) => {
    const theme = useTheme();
    let shuffledQuotes = QuotesSectionConstants.quotes

    const cardWidth = "20vw";
    const cardsSpacing = "10vw";
    const cardsBoxWidth = `calc(${cardWidth} * 3 + ${cardsSpacing})`;

    const [shiftIndex, setShiftIndex] = useState(1);
    const shiftFactor = `calc((${cardWidth} + ${cardsSpacing} / 2) * ${shiftIndex})`;


    useEffect(() => {
        shuffledQuotes = shuffleArray(shuffledQuotes)
    }, [])
    

    const handleArrowClick = (arrow: string) => {
        if (arrow === "left") {
            setShiftIndex((prev) =>
                prev - 1 >= -1 * shuffledQuotes.length + 2
                    ? prev - 1
                    : prev
            );
        } else {
            setShiftIndex((prev) => (prev + 1 <= 1 ? prev + 1 : prev));
        }
    };

    const arrow = (
        transform: string,
        positionPair: { left: string } | { right: string },
        direction: string
    ) => {
        const newTransform = "translateY(-50%) " + transform;

        return (
            <Box
                component={motion.div}
                initial={{
                    transform: newTransform,
                }}
                whileHover={{
                    transform: newTransform + " scale(1.3)",
                }}
                whileTap={{
                    transform: newTransform + " scale(0.7)",
                }}
                onClick={() => {
                    handleArrowClick(direction);
                }}
                sx={{
                    position: "absolute",
                    top: "50%",
                    width: "7vw",
                    height: "7vw",
                    cursor: "pointer",
                    opacity: 0.5,
                    zIndex: 5,
                    ...positionPair,
                }}
            >
                <KeyboardDoubleArrowLeftIcon
                    sx={{ height: "100%", width: "100%" }}
                />
            </Box>
        );
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
                tertiary={theme.palette.gold.main}
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
                height="80vh"
                color={theme.palette.base.light}
                position="relative"
            >
                {arrow("rotate(0deg)", { left: "6%" }, "right")}
                {arrow("rotate(180deg)", { right: "6%" }, "left")}

                <Box
                    sx={{
                        position: "relative",
                        height: "80%",
                        width: "70vw",
                        overflow: "hidden",
                        zIndex: 4,
                    }}
                >
                    <Stack
                        direction="row"
                        alignItems="center"
                        sx={{
                            position: "relative",
                            height: "100%",
                            width: cardsBoxWidth,
                            overflow: "hidden",
                            zIndex: 4,
                        }}
                    >
                        <Stack
                            id="inner-moving-box"
                            component={motion.div}
                            initial={{ x: 0 }}
                            animate={{ x: shiftFactor }}
                            direction="row"
                            spacing={`calc(${cardsSpacing} / 2)`}
                            sx={{
                                height: "40%",
                                width: "fit-content",
                                color: theme.palette.base.light,
                            }}
                        >
                            {shuffledQuotes.map(
                                (quote, index) => {
                                    return (
                                        <Fragment
                                            key={`quote number: ${index}`}
                                        >
                                            <Box
                                                component={motion.div}
                                                initial={{
                                                    scale: 1,
                                                    zIndex: 5,
                                                }}
                                                animate={{
                                                    scale:
                                                        shiftIndex - 1 ===
                                                        index * -1
                                                            ? 2.3
                                                            : 1,
                                                    zIndex:
                                                        shiftIndex - 1 ===
                                                        index * -1
                                                            ? 6
                                                            : 5,
                                                }}
                                            >
                                                <GlassBox
                                                    id="quotes-glass-box"
                                                    extraSX={{
                                                        position: "relative",
                                                        height: "100%",
                                                        width: cardWidth,
                                                        overflow: "hidden",
                                                    }}
                                                >
                                                    <Box
                                                        sx={{
                                                            position:
                                                                "relative",
                                                            width: "100%",
                                                            height: "100%",
                                                            backgroundImage: `
                                                                linear-gradient(rgba(0, 0, 0, 0.6), 
                                                                rgba(0, 0, 0, 0.9)), 
                                                                url("${quote.src}")`,
                                                            backgroundRepeat:
                                                                "no-repeat",
                                                            backgroundPositionY:
                                                                "center",
                                                            backgroundPositionX:
                                                                "center",
                                                            backgroundSize:
                                                                "cover",
                                                        }}
                                                    >
                                                        <Typography
                                                            textTransform="capitalize"
                                                            fontSize="1vw"
                                                            sx={{
                                                                position:
                                                                    "absolute",
                                                                top: 15,
                                                                left: 15,
                                                                width: "80%",
                                                            }}
                                                        >
                                                            {quote.quote}
                                                        </Typography>

                                                        <Typography
                                                            textTransform="uppercase"
                                                            fontSize="0.6vw"
                                                            sx={{
                                                                position:
                                                                    "absolute",
                                                                bottom: 15,
                                                                right: 15,
                                                            }}
                                                        >
                                                            {"~ " +
                                                                quote.author}
                                                        </Typography>
                                                    </Box>
                                                </GlassBox>
                                            </Box>
                                        </Fragment>
                                    );
                                }
                            )}
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Stack>
    );
};

export default QuotesSection;

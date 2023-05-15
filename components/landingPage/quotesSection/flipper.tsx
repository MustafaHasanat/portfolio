import { Quote } from "@/types/quote";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { Fragment } from "react";

interface FlipperProps {
    shiftIndex: number;
    shuffledQuotes: Quote[];
}

const Flipper = ({ shiftIndex, shuffledQuotes }: FlipperProps) => {
    const theme = useTheme();

    const cardWidth = "20vw";
    const cardsSpacing = "10vw";
    const cardsBoxWidth = `calc(${cardWidth} * 3 + ${cardsSpacing})`;
    const shiftFactor = `calc((${cardWidth} + ${cardsSpacing} / 2) * ${shiftIndex})`;

    return (
        <Box
            sx={{
                position: "relative",
                height: "100%",
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
                        height: "30%",
                        width: "fit-content",
                        color: theme.palette.text.primary,
                    }}
                >
                    {shuffledQuotes.map((quote, index) => {
                        return (
                            <Fragment key={`quote number: ${index}`}>
                                <Box
                                    component={motion.div}
                                    initial={{
                                        scale: 1,
                                        zIndex: 5,
                                    }}
                                    animate={{
                                        scale:
                                            shiftIndex - 1 === index * -1
                                                ? 2.3
                                                : 1,
                                        zIndex:
                                            shiftIndex - 1 === index * -1
                                                ? 6
                                                : 5,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            overflow: "hidden",
                                            position: "relative",
                                            width: cardWidth,
                                            height: "100%",
                                            borderRadius: 3,
                                            boxShadow: `0 0 10px 10px white`,
                                            backgroundImage: `
                                                linear-gradient(
                                                    rgba(0, 0, 0, 0.8), 
                                                    rgba(0, 0, 0, 0.3)), 
                                                ${
                                                    quote.author.hImage &&
                                                    `url("${quote.author.hImage.asset.url}")`
                                                }`,
                                            backgroundRepeat: "no-repeat",
                                            backgroundPositionY: "center",
                                            backgroundPositionX: "center",
                                            backgroundSize: "cover",
                                        }}
                                    >
                                        <Typography
                                            textTransform="capitalize"
                                            fontSize="1vw"
                                            sx={{
                                                position: "absolute",
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
                                                position: "absolute",
                                                bottom: 15,
                                                right: 15,
                                            }}
                                        >
                                            {"~ " + quote.author.author}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Fragment>
                        );
                    })}
                </Stack>
            </Stack>
        </Box>
    );
};

export default Flipper;

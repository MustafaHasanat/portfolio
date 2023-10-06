/* eslint-disable react-hooks/exhaustive-deps */
import AnimatedTitle from "@/components/shared/animatedTitle";
import { Box, Stack, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material";
import { MutableRefObject, useEffect, useState } from "react";
import shuffleArray from "@/utils/helpers/shuffleArray";
import { Quote } from "@/types/quote";
import ArrowComponent from "./arrowComponent";
import Flipper from "./flipper";
import SVGBG from "@/components/shared/svgbg/svgbgTemplate";
import svgbg1 from "@/components/shared/svgbg/landingPage/svgbg1";
import svgbg3 from "@/components/shared/svgbg/landingPage/svgbg3";
import { mqHook } from "@/styles/mq";

interface QuotesSectionProps {
    inViewRef: MutableRefObject<null>;
    quotes: Quote[];
}

const QuotesSection = ({ inViewRef, quotes }: QuotesSectionProps) => {
    const theme = useTheme();
    let shuffledQuotes = quotes;
    const [shiftIndex, setShiftIndex] = useState(1);
    const mdScreen = useMediaQuery(mqHook.MD);

    useEffect(() => {
        shuffledQuotes = shuffleArray(shuffledQuotes);
    }, []);

    const handleArrowClick = (arrow: string) => {
        if (arrow === "left") {
            setShiftIndex((prev) =>
                prev - 1 >= -1 * shuffledQuotes.length + 2 ? prev - 1 : prev
            );
        } else {
            setShiftIndex((prev) => (prev + 1 <= 1 ? prev + 1 : prev));
        }
    };

    const leftArrow = (size: string) => {
        return (
            <ArrowComponent
                size={size}
                transform="rotate(180deg)"
                positionPair={{ right: "6%" }}
                direction="left"
                handleArrowClick={handleArrowClick}
            />
        );
    };

    const rightArrow = (size: string) => {
        return (
            <ArrowComponent
                size={size}
                transform="rotate(0deg)"
                positionPair={{ left: "6%" }}
                direction="right"
                handleArrowClick={handleArrowClick}
            />
        );
    };

    return (
        <Stack
            id="home-quotes"
            py={10}
            position="relative"
            bgcolor={theme.palette.text.primary}
            alignItems="center"
            sx={{
                "&::before": {
                    content: `""`,
                    display: "block",
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "100%",
                    opacity: 0.3,
                },
            }}
        >
            <Box
                ref={inViewRef}
                sx={{
                    position: "absolute",
                    top: "50%",
                    width: " 100%",
                }}
            />

            <Box
                sx={{
                    width: { xs: "70%", sm: "70%", lg: "40%", xl: "30%" },
                    height: { xs: "11rem", lg: "13rem" },
                }}
            >
                <AnimatedTitle
                    text="favorite quotes"
                    shadowColor={theme.palette.primary.main}
                />
            </Box>

            <SVGBG position="top" SVGElement={svgbg1}></SVGBG>
            <SVGBG position="bottom" SVGElement={svgbg3}></SVGBG>

            <Stack
                direction={{ xs: "column", md: "row" }}
                justifyContent="space-evenly"
                alignItems="center"
                height={{xs: "50vh", md: "90vh"}}
                color={theme.palette.text.primary}
                position="relative"
                width="100%"
            >
                {mdScreen && leftArrow("7vw")}

                <Flipper
                    shiftIndex={shiftIndex}
                    shuffledQuotes={shuffledQuotes}
                />

                {mdScreen && rightArrow("7vw")}

                {!mdScreen && (
                    <Stack
                        direction="row"
                        sx={{
                            position: "relative",
                            width: "35%",
                        }}
                    >
                        {leftArrow("12vw")}
                        {rightArrow("12vw")}
                    </Stack>
                )}
            </Stack>
        </Stack>
    );
};

export default QuotesSection;

/* eslint-disable react-hooks/exhaustive-deps */
import AnimatedTitle from "@/components/shared/animatedTitle";
import { Box, Stack } from "@mui/material";
import { useTheme } from "@mui/material";
import { MutableRefObject, useEffect, useState } from "react";
import shuffleArray from "@/utils/helpers/shuffleArray";
import { Quote } from "@/types/quote";
import ArrowComponent from "./arrowComponent";
import Flipper from "./flipper";

interface QuotesSectionProps {
    inViewRef: MutableRefObject<null>;
    quotes: Quote[];
}

const QuotesSection = ({ inViewRef, quotes }: QuotesSectionProps) => {
    const theme = useTheme();
    let shuffledQuotes = quotes;
    const [shiftIndex, setShiftIndex] = useState(1);

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

    return (
        <Stack
            id="home-quotes"
            py={10}
            position="relative"
            bgcolor={theme.palette.text.primary}
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
                    backgroundImage: `url("bg2.jpg")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backdropFilter: "blur(10px)",
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

            <AnimatedTitle
                buttonWidth="40%"
                text="favorite quotes"
                tertiary={theme.palette.secondary.main}
                shadowColor={theme.palette.primary.main}
            />

            <Stack
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
                height="80vh"
                color={theme.palette.text.primary}
                position="relative"
            >
                <ArrowComponent
                    transform="rotate(0deg)"
                    positionPair={{ left: "6%" }}
                    direction="right"
                    handleArrowClick={handleArrowClick}
                />

                <Flipper
                    shiftIndex={shiftIndex}
                    shuffledQuotes={shuffledQuotes}
                />

                <ArrowComponent
                    transform="rotate(180deg)"
                    positionPair={{ right: "6%" }}
                    direction="left"
                    handleArrowClick={handleArrowClick}
                />
            </Stack>
        </Stack>
    );
};

export default QuotesSection;

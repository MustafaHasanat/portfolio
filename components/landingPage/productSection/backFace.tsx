import { Stack, Typography, Box, Avatar } from "@mui/material";
import { useTheme } from "@mui/material";
import { Fragment, useState } from "react";
import FlipButton from "./flipButton";
import { motion } from "framer-motion";
import useBoxSize from "@/hooks/useBoxSize";
import {
    BackBox,
    MiniCardBox,
    MiniCardStandard,
    MiniCardHidden,
    MiniCardText,
} from "./styles";

interface BackFaceProps {
    index: number;
    contents: {
        cards: {
            src: string;
            name: string;
            projects: number;
        }[];
    };
    flipCard: (card: number, face: string) => void;
}

const BackFace = ({ index, contents, flipCard }: BackFaceProps) => {
    const { cards } = contents;
    const theme = useTheme();
    const { ref: miniCardRef, width: miniCardWidth } = useBoxSize();

    const [hoveredCard, setHoveredCard] = useState(0);

    return (
        <Fragment>
            <Stack direction="row" gap={3} sx={BackBox}>
                {cards.map((card, cardIndex) => {
                    return (
                        <Fragment key={`back card number: ${cardIndex}`}>
                            <Box
                                ref={miniCardRef}
                                onMouseEnter={() => {
                                    setHoveredCard(cardIndex + 1);
                                }}
                                onMouseLeave={() => {
                                    setHoveredCard(0);
                                }}
                                sx={MiniCardBox(
                                    miniCardWidth,
                                    theme.palette.blue.main,
                                    hoveredCard === cardIndex + 1
                                        ? "scale(1.1) rotate(-3deg)"
                                        : "scale(1) rotate(0deg)"
                                )}
                            >
                                <Box
                                    sx={MiniCardStandard(
                                        hoveredCard === cardIndex + 1
                                            ? "blur(7px)"
                                            : "none"
                                    )}
                                >
                                    <Avatar
                                        component={motion.div}
                                        initial={{ y: 0 }}
                                        animate={{
                                            y:
                                                hoveredCard === cardIndex + 1
                                                    ? [0, -10, 0]
                                                    : [0],
                                        }}
                                        transition={{
                                            duration: 3,
                                            ease: "easeInOut",
                                            repeat: Infinity,
                                        }}
                                        src={card.src}
                                        alt="framework"
                                        sx={{
                                            width: "60%",
                                            height: "auto",
                                        }}
                                    />
                                </Box>

                                <Stack
                                    component="div"
                                    justifyContent="center"
                                    alignItems="center"
                                    sx={MiniCardHidden}
                                >
                                    <Typography
                                        fontWeight="bold"
                                        sx={MiniCardText(
                                            theme.palette.base.light,
                                            theme.palette.base.dark
                                        )}
                                    >
                                        {card.name}
                                    </Typography>

                                    <Typography
                                        sx={{
                                            opacity: 0.8,
                                            ...MiniCardText(
                                                theme.palette.base.light,
                                                theme.palette.base.dark
                                            ),
                                        }}
                                    >
                                        {card.projects} projects
                                    </Typography>
                                </Stack>
                            </Box>
                        </Fragment>
                    );
                })}
            </Stack>

            <FlipButton index={index} face="back" flipCard={flipCard} />
        </Fragment>
    );
};

export default BackFace;

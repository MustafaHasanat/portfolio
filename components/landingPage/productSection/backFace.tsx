import { Stack, Typography, Box, Avatar } from "@mui/material";
import { useTheme } from "@mui/material";
import { Fragment, useState } from "react";
import FlipButton from "./flipButton";
import { motion } from "framer-motion";
import useBoxSize from "@/hooks/useBoxSize";

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
            <Stack
                direction="row"
                gap={3}
                sx={{
                    width: "100%",
                    height: "90%",
                    position: "relative",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    paddingY: 2,
                    overflowY: "scroll",
                }}
            >
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
                                sx={{
                                    display: "flex",
                                    position: "relative",
                                    width: "25%",
                                    height: miniCardWidth * 1.5,
                                    borderRadius: "10px",
                                    boxShadow: "0 0 10px rgba(0,0,0,0.25)",
                                    background: `${theme.palette.blue.dark}11`,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    overflow: "hidden",
                                    zIndex: 1,
                                    transition: "0.4s ease",
                                    transform:
                                        hoveredCard === cardIndex + 1
                                            ? "scale(1.1) rotate(-3deg)"
                                            : "none",

                                    "*::WebkitScrollbarThumb": "red",
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        width: "100%",
                                        height: "100%",
                                        transition: "0.4s ease",
                                        filter:
                                            hoveredCard === cardIndex + 1
                                                ? "blur(7px)"
                                                : "none",
                                    }}
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
                                    sx={{
                                        opacity: 0,
                                        position: "absolute",
                                        width: "100%",
                                        height: "100%",
                                        zIndex: 2,
                                        transition: "0.4s ease",
                                        background: "rgba(0, 0, 0, 0.07)",

                                        "&:hover": {
                                            opacity: 1,
                                        },
                                    }}
                                >
                                    <Typography
                                        fontSize="100%"
                                        color={theme.palette.base.light}
                                        textAlign="center"
                                        fontWeight="bold"
                                        sx={{
                                            textShadow: `0 0 10px ${theme.palette.base.dark}`,
                                        }}
                                    >
                                        {card.name}
                                    </Typography>
                                    <Typography
                                        fontSize="100%"
                                        color={theme.palette.base.light}
                                        textAlign="center"
                                        sx={{
                                            opacity: 0.8,
                                            textShadow: `0 0 10px ${theme.palette.base.dark}`,
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

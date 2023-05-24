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
import { Product } from "@/types/product";

interface BackFaceProps {
    index: number;
    product: Product;
    flipCard: (card: number, face: string) => void;
}

const BackFace = ({ index, product, flipCard }: BackFaceProps) => {
    const { cards } = product;
    const theme = useTheme();
    const { ref: miniCardRef, width: miniCardWidth } = useBoxSize();

    const [hoveredCard, setHoveredCard] = useState(0);

    return (
        <Stack alignItems="center" height="100%">
            <Stack direction="row" gap={{ xs: 8, md: 3 }} sx={BackBox}>
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
                                    theme.palette.primary.main,
                                    theme.palette.text.primary,
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
                                        src={card.logo.asset.url}
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
                                            theme.palette.text.primary,
                                            theme.palette.secondary.dark
                                        )}
                                    >
                                        {card.name}
                                    </Typography>

                                    <Typography
                                        sx={{
                                            opacity: 0.8,
                                            ...MiniCardText(
                                                theme.palette.text.primary,
                                                theme.palette.secondary.dark
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
        </Stack>
    );
};

export default BackFace;

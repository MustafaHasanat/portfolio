import ProductSectionConstants from "@/utils/constants/landingPage/productSection";
import { Avatar, Box, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material";
import { Fragment, useRef, useState } from "react";
import FrontFace from "./frontFace";
import BackFace from "./backFace";
import { motion, useInView } from "framer-motion";
import InteractiveTitle from "@/components/shared/title";

const ProductSection = () => {
    const theme = useTheme();
    const [cardTransform, setCardTransform] = useState("none");
    const [cardFlipped, setCardFlipped] = useState(0);

    const cardsContainerRef = useRef(null);
    const cardsContainerInView = useInView(cardsContainerRef);

    const flipCard = (card: number, face: string) => {
        if (card !== cardFlipped && cardTransform === "rotateY(180deg)") {
            if (face === "front") {
                setCardFlipped(card);
                setCardTransform("rotateY(180deg)");
            } else {
                setCardFlipped(0);
                setCardTransform("none");
            }
        } else if (face === "front") {
            setCardFlipped(card);
            setCardTransform("rotateY(180deg)");
        } else if (face === "back") {
            setCardFlipped(0);
            setCardTransform("none");
        }
    };

    return (
        <Stack
            sx={{
                position: "relative",
                alignItems: "center",
                paddingY: 10,
                bgcolor: theme.palette.base.light,
            }}
        >
            {ProductSectionConstants.blobs.map((blob, index) => {
                return (
                    <Fragment key={`blob number: ${index}`}>
                        <Avatar
                            component={motion.div}
                            animate={{ y: [0, 30, 0] }}
                            transition={{
                                duration: 5,
                                delay: blob.delay,
                                ease: "easeInOut",
                                repeat: Infinity,
                            }}
                            src={blob.src}
                            sx={{
                                position: "absolute",
                                inset: blob.inset,
                                width: blob.size,
                                height: blob.size,
                                zIndex: 1,
                            }}
                        />
                    </Fragment>
                );
            })}

            <InteractiveTitle
                primary={theme.palette.blue.dark}
                secondary={theme.palette.base.dark}
                tertiary={theme.palette.base.dark}
                containerHeight="30vh"
                buttonWidth="40%"
                buttonHeight="50%"
                linesSpace={15}
                buttonCuttingRatio={0.13}
            >
                <Typography
                    fontSize="2.7vw"
                    color={theme.palette.base.light}
                    textTransform="uppercase"
                    letterSpacing={3}
                    fontWeight="bold"
                >
                    What Do I do
                </Typography>
            </InteractiveTitle>

            <Stack
                id="cards-container"
                ref={cardsContainerRef}
                gap={5}
                width="90%"
                direction="row"
                flexWrap="wrap"
                justifyContent="space-evenly"
                alignItems="center"
                zIndex={2}
                position="relative"
                sx={{
                    transform: cardsContainerInView
                        ? "unset"
                        : "translateY(100px)",
                    transition: "1s ease",
                }}
            >
                {ProductSectionConstants.products.map((card, index) => {
                    return (
                        <Fragment key={`product card number: ${index}`}>
                            <Stack
                                id={`card-${index}`}
                                sx={{
                                    position: "relative",
                                    width: "30vw",
                                    height: "75vh",
                                    transformStyle: "preserve-3d",
                                    transition: "1s ease",
                                    transform:
                                        cardFlipped === index + 1
                                            ? cardTransform
                                            : "none",
                                }}
                            >
                                <FrontFace
                                    contents={card.front}
                                    index={index}
                                    flipCard={flipCard}
                                />
                                <BackFace
                                    contents={card.back}
                                    index={index}
                                    flipCard={flipCard}
                                />
                            </Stack>
                        </Fragment>
                    );
                })}
            </Stack>
        </Stack>
    );
};

export default ProductSection;

import ProductSectionConstants from "@/utils/constants/landingPage/productSection";
import { Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material";
import { Fragment, useRef, useState } from "react";
import FrontFace from "./frontFace";
import BackFace from "./backFace";
import { useInView } from "framer-motion";
import InteractiveTitle from "@/components/shared/title";
import Blobs from "../../shared/blobs";
import FlipBox from "@/components/shared/flipBox";

const ProductSection = () => {
    const theme = useTheme();
    const [cardTransform, setCardTransform] = useState("rotateY(0deg)");
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
                setCardTransform("rotateY(0deg)");
            }
        } else if (face === "front") {
            setCardFlipped(card);
            setCardTransform("rotateY(180deg)");
        } else if (face === "back") {
            setCardFlipped(0);
            setCardTransform("rotateY(0deg)");
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
            <Blobs blobs={ProductSectionConstants.blobs} />

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
                gap={15}
                width="90%"
                direction="row"
                flexWrap="wrap"
                justifyContent="center"
                alignItems="center"
                zIndex={2}
                position="relative"
                sx={{
                    transform: cardsContainerInView
                        ? "translateY(0px)"
                        : "translateY(100px)",
                    transition: "1s ease",
                }}
            >
                {ProductSectionConstants.products.map((card, index) => {
                    return (
                        <Fragment key={`product card number: ${index}`}>
                            <FlipBox
                                frontChildren={
                                    <FrontFace
                                        contents={card.front}
                                        index={index}
                                        flipCard={flipCard}
                                    />
                                }
                                frontSX={{
                                    justifyContent: "center",
                                    alignItems: "center",
                                    paddingX: 4,
                                }}
                                backChildren={
                                    <BackFace
                                        contents={card.back}
                                        index={index}
                                        flipCard={flipCard}
                                    />
                                }
                                backSX={{
                                    justifyContent: "flex-start",
                                    alignItems: "center",
                                    paddingX: 2,
                                    paddingY: 2,
                                }}
                                id={`card-${index}`}
                                transform={
                                    cardFlipped === index + 1
                                        ? cardTransform
                                        : "rotateY(0deg)"
                                }
                                width="30vw"
                                height="75vh"
                            />
                        </Fragment>
                    );
                })}
            </Stack>
        </Stack>
    );
};

export default ProductSection;

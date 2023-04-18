import ProductSectionConstants from "@/utils/constants/landingPage/productSection";
import { Box, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material";
import { Fragment, MutableRefObject, useRef, useState } from "react";
import FrontFace from "./frontFace";
import BackFace from "./backFace";
import { useInView } from "framer-motion";
import InteractiveTitle from "@/components/shared/title";
import Blobs from "../../shared/blobs";
import FlipBox from "@/components/shared/flipBox";
import { CardsBox, ProductBox } from "./styles";

interface ProductSectionProps {
    inViewRef: MutableRefObject<null>;
}

const ProductSection = ({ inViewRef }: ProductSectionProps) => {
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
        <Stack id="home-product" sx={ProductBox}>
            {/* <Blobs blobs={ProductSectionConstants.blobs} /> */}

            <Box
                ref={inViewRef}
                sx={{
                    position: "absolute",
                    top: "30%",
                    width: " 100%",
                }}
            />

            <InteractiveTitle
                primary={theme.palette.blue.main}
                secondary={theme.palette.base.dark}
                tertiary={theme.palette.gold.main}
                containerHeight="30vh"
                buttonWidth="40%"
                buttonHeight="60%"
                linesSpace={15}
                buttonCuttingRatio={0.17}
                buttonGap={18}
            >
                <Typography
                    fontSize="2.7vw"
                    color={theme.palette.gold.main}
                    textTransform="uppercase"
                    letterSpacing={3}
                    fontWeight="bold"
                    sx={{
                        textShadow: `3px 3px 15px ${theme.palette.base.dark}`
                    }}
                >
                    What Do I do
                </Typography>
            </InteractiveTitle>

            <Stack
                id="cards-container"
                ref={cardsContainerRef}
                mb={5}
                direction="row"
                sx={CardsBox(
                    cardsContainerInView
                        ? "translateY(0px)"
                        : "translateY(100px)"
                )}
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

import ProductSectionConstants from "@/utils/constants/landingPage/productSection";
import { Avatar, Box, Stack } from "@mui/material";
import { useTheme } from "@mui/material";
import { Fragment, MutableRefObject, useState } from "react";
import FrontFace from "./frontFace";
import BackFace from "./backFace";
import AnimatedTitle from "@/components/shared/animatedTitle";
import FlipBox from "@/components/shared/flipBox";
import { CardsBox, ProductBox } from "./styles";

interface ProductSectionProps {
    inViewRef: MutableRefObject<null>;
}

const ProductSection = ({ inViewRef }: ProductSectionProps) => {
    const theme = useTheme();
    const [cardTransform, setCardTransform] = useState("rotateY(0deg)");
    const [cardFlipped, setCardFlipped] = useState(0);

    const faceSX = {
        width: "100%",
        height: "100%",
        position: "absolute",
        backfaceVisibility: "hidden",
        background: theme.palette.secondary.main,
        boxShadow: "0 0 5px rgb(255, 255, 255)",
        backdropFilter: "blur(10px)",
    };

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
        <Stack id="home-product" sx={ProductBox(theme.palette.text.primary)}>
            <Box
                ref={inViewRef}
                sx={{
                    position: "absolute",
                    top: "30%",
                    width: " 100%",
                }}
            />

            <AnimatedTitle
                buttonWidth="40%"
                text="What Do I do"
                tertiary={theme.palette.secondary.main}
                shadowColor={theme.palette.primary.main}
            />

            <Stack id="cards-container" direction="row" sx={CardsBox}>
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
                                    ...faceSX,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    paddingX: 4,
                                    borderRadius: 3,
                                }}
                                backChildren={
                                    <BackFace
                                        contents={card.back}
                                        index={index}
                                        flipCard={flipCard}
                                    />
                                }
                                backSX={{
                                    ...faceSX,
                                    justifyContent: "flex-start",
                                    alignItems: "flex-end",
                                    paddingX: 3,
                                    paddingTop: 2,
                                    paddingBottom: 3,
                                    borderRadius: 3,
                                }}
                                id={`card-${index}`}
                                transform={
                                    cardFlipped === index + 1
                                        ? cardTransform
                                        : "rotateY(0deg)"
                                }
                                width="25vw"
                                height="65vh"
                            />
                        </Fragment>
                    );
                })}
            </Stack>
        </Stack>
    );
};

export default ProductSection;

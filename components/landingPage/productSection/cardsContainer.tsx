import { Stack } from "@mui/material";
import { useTheme } from "@mui/material";
import { Fragment, useState } from "react";
import FrontFace from "./frontFace";
import BackFace from "./backFace";
import FlipBox from "@/components/shared/flipBox";
import { CardsBox } from "./styles";
import { Product } from "@/types/product";

interface CardsContainerProps {
    products: Product[];
}

const CardsContainer = ({ products }: CardsContainerProps) => {
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
        <Stack id="cards-container" direction="row" sx={CardsBox}>
            {products.map((product, index) => {
                return (
                    <Fragment key={`product card number: ${index}`}>
                        <FlipBox
                            isActive={product.isActive}
                            frontChildren={
                                <FrontFace
                                    product={product}
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
                                    product={product}
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
                            width={{ xs: "65vw", lg: "25vw" }}
                            height={{ xs: "90vh", sm: "80vh", lg: "65vh" }}
                        />
                    </Fragment>
                );
            })}
        </Stack>
    );
};

export default CardsContainer;

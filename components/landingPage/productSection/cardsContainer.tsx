import { Stack } from "@mui/material";
import { useTheme } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
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
    const [filteredProducts, setFilteredProducts] = useState(products);

    const faceSX = {
        width: "100%",
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

    useEffect(() => {
        setFilteredProducts((products) =>
            products.filter((product) => {
                if (product.isActive) {
                    return product;
                }
            })
        );
    }, []);

    return (
        <Stack id="cards-container" direction="row" sx={CardsBox}>
            {filteredProducts.map((product, index) => {
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
                                paddingX: 3,
                                paddingTop: 2,
                                paddingBottom: 3,
                                borderRadius: 3,
                                position: "absolute",
                            }}
                            id={`card-${index}`}
                            transform={
                                cardFlipped === index + 1
                                    ? cardTransform
                                    : "rotateY(0deg)"
                            }
                            width={{ xs: "85vw", lg: "25vw", xl: "20vw" }}
                        />
                    </Fragment>
                );
            })}
        </Stack>
    );
};

export default CardsContainer;

import ProductSectionConstants from "@/utils/constants/landingPage/productSection";
import { Box, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material";
import { Fragment, useState } from "react";
import FrontFace from "./frontFace";
import BackFace from "./backFace";

const ProductSection = () => {
    const theme = useTheme();
    const [cardTransform, setCardTransform] = useState("none");
    const [cardFlipped, setCardFlipped] = useState(0);

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
            {/* {ProductSectionConstants.blobs.map((blob, index) => {
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
            })} */}

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingY: 5,
                }}
            >
                <Typography fontSize="5vw">What Do I do</Typography>
            </Box>

            <Stack
                id="cards-container"
                gap={5}
                width="90%"
                direction="row"
                flexWrap="wrap"
                justifyContent="space-evenly"
                alignItems="center"
                position="relative"
            >
                {ProductSectionConstants.products.map((card, index) => {
                    return (
                        <Fragment key={`product card number: ${index}`}>
                            <Stack
                                id={`card-${index}`}
                                sx={{
                                    position: "relative",
                                    zIndex: 2,
                                    width: "30vw",
                                    height: "75vh",
                                    transformStyle: "preserve-3d",
                                    transition: "1s",
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

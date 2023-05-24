import { Box, Stack } from "@mui/material";
import { useTheme } from "@mui/material";
import { MutableRefObject } from "react";
import { ProductBox } from "./styles";
import { Product } from "@/types/product";
import CardsContainer from "./cardsContainer";
import AnimatedTitle from "@/components/shared/animatedTitle";

interface ProductSectionProps {
    inViewRef: MutableRefObject<null>;
    products: Product[];
}

const ProductSection = ({ inViewRef, products }: ProductSectionProps) => {
    const theme = useTheme();

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

            <Box
                sx={{
                    width: { xs: "80%", sm: "70%", lg: "40%", xl: "30%" },
                    height: { xs: "11rem", lg: "13rem" },
                }}
            >
                <AnimatedTitle
                    text="What Do I do"
                    tertiary={theme.palette.secondary.main}
                    shadowColor={theme.palette.primary.main}
                />
            </Box>

            <CardsContainer products={products} />
        </Stack>
    );
};

export default ProductSection;

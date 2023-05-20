import CardsContainer from "@/components/landingPage/productSection/cardsContainer";
import AnimatedTitle from "@/components/shared/animatedTitle";
import { Product } from "@/types/product";
import sortByOrder from "@/utils/helpers/sortByOrder";
import { getAllProducts } from "@/utils/sanity/product";
import { Box, Stack, useTheme } from "@mui/material";

interface ProductsProps {
    products: Product[];
}

export const getStaticProps = async (): Promise<{ props: ProductsProps }> => {
    const products = await getAllProducts();

    return {
        props: { products },
    };
};

export default function Products({ products }: ProductsProps) {
    const theme = useTheme();

    return (
        <Stack
            sx={{
                alignItems: "center",
                bgcolor: theme.palette.secondary.main,
                px: 12,
                py: "25vh",
            }}
        >
            <Box
                sx={{
                    width: { xs: "70%", lg: "40%" },
                    height: { xs: "12rem", sm: "15rem", lg: "13rem" },
                }}
            >
                <AnimatedTitle
                    text="my products"
                    shadowColor={theme.palette.primary.main}
                />
            </Box>

            <CardsContainer products={sortByOrder(products)} />
        </Stack>
    );
}

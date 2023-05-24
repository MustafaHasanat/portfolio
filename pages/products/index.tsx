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
                px: {xs: 3, md: 12},
                py: { xs: "12vh", lg: "25vh" },
            }}
        >
            <Box
                sx={{
                    width: { xs: "100%", md: "80%", lg: "40%", xl: "30%" },
                    height: { xs: "11rem", lg: "13rem" },
                }}
            >
                <AnimatedTitle
                    text="my products"
                    shadowColor={theme.palette.primary.main}
                    fontSize={{
                        xs: "0.8rem",
                        sm: "1rem",
                        md: "1.2rem",
                        lg: "1.7rem",
                    }}
                />
            </Box>

            <CardsContainer products={sortByOrder(products)} />
        </Stack>
    );
}

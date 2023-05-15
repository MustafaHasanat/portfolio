import CardsContainer from "@/components/landingPage/productSection/cardsContainer";
import AnimatedTitle from "@/components/shared/animatedTitle";
import { Product } from "@/types/product";
import sortByOrder from "@/utils/helpers/sortByOrder";
import { getAllProducts } from "@/utils/sanity/product";
import { Stack, useTheme } from "@mui/material";

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
                bgcolor: theme.palette.secondary.main,
                color: "white",
                px: 12,
                py: "25vh",
            }}
        >
            <AnimatedTitle
                buttonWidth="40%"
                text="My Products"
                tertiary={theme.palette.primary.main}
                shadowColor={theme.palette.primary.main}
            />

            <CardsContainer products={sortByOrder(products)} />
        </Stack>
    );
}

import { Product } from "@/types/product";
import { getAllProducts, getProductById } from "@/utils/sanity/product";
import { getAllProjects, getProjectById } from "@/utils/sanity/project";
import { Stack, useTheme } from "@mui/material";

interface ProductProps {
    product: Product;
}

export const getStaticPaths = async () => {
    const products = await getAllProducts();

    const paths = products.map((product) => {
        return {
            params: { id: product._id.toString() },
        };
    });

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async (
    context: any
): Promise<{
    props: ProductProps;
}> => {
    const id = context.params.id;
    const product = await getProductById(id);

    return {
        props: { product },
    };
};

export default function ProjectDetails({ product }: ProductProps) {
    const theme = useTheme();

    return (
        <Stack
            height="100vh"
            sx={{
                color: "white",
                bgcolor: theme.palette.secondary.main,
                p: 30,
            }}
        >
            {product._id}
        </Stack>
    );
}

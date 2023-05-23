import IntroSection from "@/components/productsPage/introSection";
import ProjectsSection from "@/components/productsPage/projectsSection";
import { Product } from "@/types/product";
import { Project } from "@/types/project";
import { getAllProducts, getProductByTitle } from "@/utils/sanity/product";
import { getAllProjects } from "@/utils/sanity/project";
import { Stack, useTheme } from "@mui/material";
import { useEffect, useState } from "react";

interface ProductProps {
    product: Product;
    projects: Project[];
}

export const getStaticPaths = async () => {
    const products = await getAllProducts();

    const paths = products.map((product) => {
        return {
            params: { title: product.title.toString() },
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
    const title = context.params.title;
    const product = await getProductByTitle(title);
    const projects = await getAllProjects();

    return {
        props: { product, projects },
    };
};

export default function ProjectDetails({ product, projects }: ProductProps) {
    const theme = useTheme();
    const [currentProjects, setCurrentProjects] = useState<Project[]>([]);

    useEffect(() => {
        setCurrentProjects(
            projects.filter((project) => {
                if (project.productType.title === product.title) {
                    return project;
                }
            })
        );
    }, [product.title, projects]);

    return (
        <Stack
            sx={{
                bgcolor: theme.palette.secondary.main,
                px: { xs: 5, lg: 25 },
                py: "20vh",
            }}
        >
            <IntroSection product={product} />
            <ProjectsSection projects={currentProjects} />
        </Stack>
    );
}

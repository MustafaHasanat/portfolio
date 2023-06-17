import IntroSection from "@/components/productsPage/introSection";
import ProjectsSection from "@/components/productsPage/projectsSection";
import IconicButton from "@/components/shared/iconicButton";
import { Product } from "@/types/product";
import { Project } from "@/types/project";
import { getAllProducts, getProductByTitle } from "@/utils/sanity/product";
import { getAllProjects } from "@/utils/sanity/project";
import { Divider, Stack, Typography, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import DomainVerificationIcon from "@mui/icons-material/DomainVerification";

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

    const goToFooter = () => {
        document.getElementById("footer-form-box")?.scrollIntoView({
            behavior: "smooth",
        });
    };

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
                px: { xs: 3, lg: 25 },
                py: { xs: "12vh", lg: "20vh" },
            }}
        >
            <IntroSection product={product} />

            <IconicButton
                icon={
                    <DomainVerificationIcon
                        sx={{
                            color: theme.palette.primary.main,
                            height: "rem",
                        }}
                    />
                }
                buttonHeight="4rem"
                color={theme.palette.primary.main}
                hoverColor={theme.palette.primary.main}
                onClick={goToFooter}
                extraSX={{
                    width: "15rem",
                    alignSelf: "center",
                    my: 5
                }}
            >
                <Typography
                    fontSize="1rem"
                    textTransform="uppercase"
                    letterSpacing={2}
                >
                    get yours now!
                </Typography>
            </IconicButton>

            <Divider
                    sx={{
                        bgcolor: theme.palette.primary.main,
                        width: "100%",
                        height: "1px",
                        opacity: 0.4,
                        mt: 1,
                        mb: 5,
                    }}
                />

            <ProjectsSection projects={currentProjects} />
        </Stack>
    );
}

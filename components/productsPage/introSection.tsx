import { Product } from "@/types/product";
import { Avatar, Box, Stack, Typography, useTheme } from "@mui/material";
import AnimatedTitle from "../shared/animatedTitle";
import { Fragment } from "react";
import ProductBullet from "./productBullet";

interface IntroSectionProps {
    product: Product;
}

const IntroSection = ({ product }: IntroSectionProps) => {
    const theme = useTheme();

    return (
        <Stack
            color={theme.palette.text.primary}
            alignItems="center"
            justifyContent="center"
            width="100%"
        >
            <Box
                sx={{
                    width: { xs: "100%", md: "80%", lg: "40%", xl: "30%" },
                    height: { xs: "11rem", lg: "13rem" },
                }}
            >
                <AnimatedTitle
                    text={product?.title}
                    shadowColor={theme.palette.primary.main}
                    fontSize={{
                        xs: "0.8rem",
                        sm: "1rem",
                        md: "1.2rem",
                        lg: "1.7rem",
                    }}
                />
            </Box>

            <Stack
                direction={{ xs: "column-reverse", lg: "row" }}
                justifyContent={{ xs: "center", lg: "space-between" }}
                alignItems={"center"}
                my={3}
                px={{ xs: 3, md: 10, lg: 0 }}
            >
                <Stack width={{ xs: "100%", lg: "60%" }} spacing={4}>
                    <Typography variant="h5">{product.description}</Typography>

                    {product?.bullets.map((bullet, index) => {
                        return (
                            <Fragment
                                key={`product ${product?.title} bullet number${index}`}
                            >
                                <ProductBullet bullet={bullet} />
                            </Fragment>
                        );
                    })}
                </Stack>

                <Avatar
                    variant="rounded"
                    src={product?.landingPage?.asset?.url}
                    alt={product?.title}
                    sx={{
                        width: { xs: "100%", md: "80%", lg: "30%" },
                        height: "auto",
                        mb: { xs: 5, lg: 0 },
                    }}
                />
            </Stack>
        </Stack>
    );
};

export default IntroSection;

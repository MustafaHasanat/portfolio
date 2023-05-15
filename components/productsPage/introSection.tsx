import { Product } from "@/types/product";
import { Avatar, Stack, Typography, useTheme } from "@mui/material";
import AnimatedTitle from "../shared/animatedTitle";
import { Fragment } from "react";
import ProductBullet from "./productBullet";

interface IntroSectionProps {
    product: Product;
}

const IntroSection = ({ product }: IntroSectionProps) => {
    const theme = useTheme();

    return (
        <Stack color={theme.palette.text.primary}>
            <AnimatedTitle
                buttonWidth="30%"
                buttonCuttingRatio={0.25}
                text={product?.title}
                tertiary={theme.palette.primary.main}
                shadowColor={theme.palette.primary.main}
            />

            <Stack direction="row" justifyContent="space-between" my={3}>
                <Stack width="60%" spacing={4}>
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
                        width: "30%",
                        height: "auto",
                    }}
                />
            </Stack>
        </Stack>
    );
};

export default IntroSection;

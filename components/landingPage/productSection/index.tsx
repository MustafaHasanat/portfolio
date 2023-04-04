import ProductSectionConstants from "@/utils/constants/landingPage/productSection";
import { Avatar, Stack } from "@mui/material";
import { useTheme } from "@mui/material";
import { Fragment } from "react";
import FrontFace from "./frontFace";
import BackFace from "./backFace";
import { motion } from "framer-motion";

const ProductSection = () => {
    const theme = useTheme();

    return (
        <Stack
            sx={{
                position: "relative",
                alignItems: "center",
                paddingY: 15,
                bgcolor: theme.palette.base.light,
            }}
        >
            {ProductSectionConstants.blobs.map((blob, index) => {
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
            })}

            <Stack spacing={5} width="80%">
                {ProductSectionConstants.products.map((card, index) => {
                    return (
                        <Fragment key={`product card number: ${index}`}>
                            <Stack
                                id={`card-${index}`}
                                sx={{
                                    bgcolor: "transparent",
                                    zIndex: 2,
                                    width: "100%",
                                }}
                            >
                                <FrontFace
                                    contents={card.front}
                                    index={index}
                                />
                                <BackFace contents={card.back} index={index} />
                            </Stack>
                        </Fragment>
                    );
                })}
            </Stack>
        </Stack>
    );
};

export default ProductSection;

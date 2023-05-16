/* eslint-disable react/jsx-no-comment-textnodes */
import {
    Stack,
    Typography,
    Button,
    Divider,
    Chip,
    Link,
    useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material";
import { Fragment } from "react";
import FlipButton from "./flipButton";
import IconicButton from "@/components/shared/iconicButton";
import { Product } from "@/types/product";
import DvrRoundedIcon from "@mui/icons-material/DvrRounded";
import PhoneIphoneRoundedIcon from "@mui/icons-material/PhoneIphoneRounded";
import KeyboardRoundedIcon from "@mui/icons-material/KeyboardRounded";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import { useRouter } from "next/router";
import TextsmsIcon from "@mui/icons-material/Textsms";

interface FrontFaceProps {
    index: number;
    product: Product;
    flipCard: (card: number, face: string) => void;
}

const FrontFace = ({ index, product, flipCard }: FrontFaceProps) => {
    const { title, description, tags } = product;
    const lgScreen = useMediaQuery("(min-width:1200px)");
    const theme = useTheme();
    const router = useRouter();

    const getIcon = (iconTitle: string) => {
        const sx = {
            color: theme.palette.primary.main,
            width: { xs: "70%", lg: "auto" },
            height: { xs: "auto", sm: "30%", lg: "20%" },
        };

        switch (iconTitle) {
            case "web":
                return <DvrRoundedIcon sx={sx} />;
            case "mobile":
                return <PhoneIphoneRoundedIcon sx={sx} />;
            case "desktop":
                return <KeyboardRoundedIcon sx={sx} />;
            case "robots":
                return <PrecisionManufacturingIcon sx={sx} />;
        }
    };

    return (
        <Fragment>
            {getIcon(title)}

            <Typography
                p={1}
                variant={lgScreen ? "h4" : "h3"}
                textTransform="uppercase"
                color={theme.palette.text.primary}
            >
                {title}
            </Typography>

            <Typography
                textAlign="center"
                color={theme.palette.text.primary}
                fontSize={{
                    xs: "1.4rem",
                    sm: "1.8rem",
                    lg: "1rem",
                }}
            >
                {description}
            </Typography>

            <Stack
                justifyContent="center"
                direction="row"
                gap={1}
                mt={4}
                flexWrap="wrap"
            >
                {tags.map((tag, tagIndex) => {
                    return (
                        <Fragment key={`front card tag number: ${tagIndex}`}>
                            <Chip
                                label={tag}
                                sx={{
                                    fontSize: { xs: "1.5rem", lg: "1rem" },
                                    mb: 1,
                                    color: theme.palette.secondary.main,
                                    bgcolor: theme.palette.primary.main,
                                }}
                            />
                        </Fragment>
                    );
                })}
            </Stack>

            <Divider
                sx={{
                    width: "100%",
                    marginTop: 3,
                    marginBottom: 2,
                    bgcolor: theme.palette.text.primary,
                }}
            />

            <Stack
                direction={{ xs: "column", sm: "row" }}
                justifyContent="space-between"
                alignItems="center"
                width="100%"
            >
                <IconicButton
                    icon={
                        <TextsmsIcon
                            sx={{
                                color: theme.palette.primary.main,
                                height: "100%",
                            }}
                        />
                    }
                    color={theme.palette.text.primary}
                    hoverColor={theme.palette.primary.main}
                    onClick={() => {
                        router.push("/products/" + product.title);
                    }}
                    extraSX={{
                        width: { xs: "80%", sm: "60%", lg: "55%" },
                        height: {xs: "3.5rem", sm: "80%"},
                    }}
                >
                    <Typography
                        fontSize={{ xs: "1.3rem", lg: "1rem" }}
                        textTransform="uppercase"
                    >
                        learn more
                    </Typography>
                </IconicButton>

                <FlipButton index={index} face="front" flipCard={flipCard} />
            </Stack>
        </Fragment>
    );
};

export default FrontFace;

/* eslint-disable react/jsx-no-comment-textnodes */
import { Stack, Typography, Button, Divider, Chip } from "@mui/material";
import { useTheme } from "@mui/material";
import { Fragment } from "react";
import FlipButton from "./flipButton";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import IconicButton from "@/components/shared/iconicButton";
import { Product } from "@/types/product";
import DvrRoundedIcon from "@mui/icons-material/DvrRounded";
import PhoneIphoneRoundedIcon from "@mui/icons-material/PhoneIphoneRounded";
import KeyboardRoundedIcon from "@mui/icons-material/KeyboardRounded";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";

interface FrontFaceProps {
    index: number;
    product: Product;
    flipCard: (card: number, face: string) => void;
}

const FrontFace = ({ index, product, flipCard }: FrontFaceProps) => {
    const { title, description, tags } = product;
    const theme = useTheme();

    const getIcon = (iconTitle: string) => {
        const sx = {
            color: theme.palette.primary.main,
            width: "auto",
            height: "20%",
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
                variant="h4"
                textTransform="uppercase"
                color={theme.palette.text.primary}
            >
                {title}
            </Typography>

            <Typography textAlign="center" color={theme.palette.text.primary}>
                {description}
            </Typography>

            <Stack
                justifyContent="center"
                direction="row"
                spacing={3}
                mt={4}
                flexWrap="wrap"
            >
                {tags.map((tag, tagIndex) => {
                    return (
                        <Fragment key={`front card tag number: ${tagIndex}`}>
                            <Chip
                                label={tag}
                                sx={{
                                    fontSize: "1.1vw",
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

            <Stack direction="row" justifyContent="space-between" width="100%">
                <IconicButton
                    icon={
                        <LocalShippingIcon
                            sx={{
                                color: theme.palette.primary.main,
                                height: "100%",
                            }}
                        />
                    }
                    color={theme.palette.text.primary}
                    hoverColor={theme.palette.primary.main}
                    onClick={() => {}}
                    extraSX={{
                        width: "40%",
                        height: "80%",
                    }}
                >
                    <Typography fontSize="1.3vw" textTransform="uppercase">
                        order
                    </Typography>
                </IconicButton>

                <FlipButton index={index} face="front" flipCard={flipCard} />
            </Stack>
        </Fragment>
    );
};

export default FrontFace;

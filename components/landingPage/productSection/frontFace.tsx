/* eslint-disable react/jsx-no-comment-textnodes */
import { Stack, Typography, Button, Divider, Chip } from "@mui/material";
import { useTheme } from "@mui/material";
import { Fragment } from "react";
import FlipButton from "./flipButton";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import IconicButton from "@/components/shared/iconicButton";

interface FrontFaceProps {
    index: number;
    contents: {
        icon: (color: string, size: string) => JSX.Element;
        title: string;
        description: string;
        tags: string[];
    };
    flipCard: (card: number, face: string) => void;
}

const FrontFace = ({ index, contents, flipCard }: FrontFaceProps) => {
    const { icon, title, description, tags } = contents;
    const theme = useTheme();

    return (
        <Fragment>
            {icon(theme.palette.primary.main, "30%")}

            <Typography
                p={1}
                variant="h4"
                textTransform="uppercase"
                color={theme.palette.text.primary}
            >
                {title}
            </Typography>

            <Typography
                textAlign="center"
                color={theme.palette.text.primary}
            >
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

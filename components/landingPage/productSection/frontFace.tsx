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
            {icon(theme.palette.blue.main, "30%")}

            <Typography
                fontSize="3vw"
                textTransform="uppercase"
                color={theme.palette.base.light}
            >
                {title}
            </Typography>

            <Typography
                fontSize="1.5vw"
                textAlign="center"
                color={theme.palette.base.light}
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
                                    color: theme.palette.base.light,
                                    bgcolor: theme.palette.blue.main,
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
                    bgcolor: theme.palette.base.light,
                }}
            />

            <Stack direction="row" justifyContent="space-between" width="100%">
                <IconicButton
                    icon={
                        <LocalShippingIcon
                            sx={{
                                color: theme.palette.gold.main,
                                height: "100%",
                            }}
                        />
                    }
                    color={theme.palette.base.light}
                    hoverColor={theme.palette.gold.main}
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

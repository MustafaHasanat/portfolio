/* eslint-disable react/jsx-no-comment-textnodes */
import {
    Stack,
    Typography,
    Button,
    Divider,
    Chip,
} from "@mui/material";
import { useTheme } from "@mui/material";
import { Fragment } from "react";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import FlipButton from "./flipButton";

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
        <Stack
            id={`card-front-face-${index}`}
            sx={{
                width: "100%",
                height: "100%",
                paddingX: 4,
                borderRadius: "30px",
                position: "absolute",
                backfaceVisibility: "hidden",
                background: "rgba(255,255,255,.05)",
                boxShadow: "0 0 10px rgba(0,0,0,0.25)",
                backdropFilter: "blur(10px)",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            {icon(theme.palette.blue.dark, "30%")}

            <Typography fontSize="3vw" textTransform="uppercase">
                {title}
            </Typography>

            <Typography fontSize="1.5vw" textAlign="center">
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
                                sx={{ fontSize: "1.1vw", mb: 1 }}
                            />
                        </Fragment>
                    );
                })}
            </Stack>

            <Divider sx={{ width: "100%", marginTop: 3, marginBottom: 2 }} />

            <Stack direction="row" justifyContent="space-between" width="100%">
                <Button
                    sx={{
                        height: "fit-content",
                        borderRadius: 2,
                        background: theme.palette.blue.dark,
                    }}
                >
                    <Typography p={0.5} color={theme.palette.base.light}>
                        check projects
                    </Typography>
                </Button>

                <FlipButton index={index} face="front" flipCard={flipCard} />
            </Stack>
        </Stack>
    );
};

export default FrontFace;

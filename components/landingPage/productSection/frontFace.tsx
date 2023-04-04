/* eslint-disable react/jsx-no-comment-textnodes */
import { Stack, Typography, Button, Box, Avatar } from "@mui/material";
import { useTheme } from "@mui/material";
import { useAnimation, motion } from "framer-motion";
import { Fragment, useState } from "react";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";

interface FrontFaceProps {
    index: number;
    contents: {
        src: string;
        title: string;
        description: string;
        tags: string[];
    };
}

const FrontFace = ({ index, contents }: FrontFaceProps) => {
    const { src, title, description, tags } = contents;

    return (
        <Stack
            id={`card-front-face-${index}`}
            sx={{
                bgcolor: "transparent",
                transition: 0.7,
                position: "relative",
                cursor: "pointer",
                background: "rgba(255,255,255,.05)",
                boxShadow: "0 0 10px rgba(0,0,0,0.25)",
                backdropFilter: "blur(10px)",
                borderRadius: "8px",

                "&:hover": {
                    transform: "scale(1.04) rotate(1deg)",
                },
            }}
        >
            <Avatar src={src} />
            <Typography>{title}</Typography>
            <Typography>{description}</Typography>
            <Stack direction="row">
                {tags.map((tag, tagIndex) => {
                    return (
                        <Fragment key={`front card tag number: ${tagIndex}`}>
                            <Typography>{tag}</Typography>
                        </Fragment>
                    );
                })}
            </Stack>

            <Box>
                <SwapHorizIcon />
            </Box>
        </Stack>
    );
};

export default FrontFace;

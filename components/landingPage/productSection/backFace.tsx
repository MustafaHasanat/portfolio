import {
    Stack,
    Typography,
    Button,
    Box,
    Avatar,
    Tooltip,
    Fade,
} from "@mui/material";
import { useTheme } from "@mui/material";
import { useAnimation, motion } from "framer-motion";
import { Fragment, useState } from "react";
import FlipButton from "./flipButton";

interface BackFaceProps {
    index: number;
    contents: {
        cards: {
            src: string;
            title: string;
            projects: number;
        }[];
    };
    flipCard: (card: number, face: string) => void;
}

const BackFace = ({ index, contents, flipCard }: BackFaceProps) => {
    const { cards } = contents;
    const theme = useTheme();

    return (
        <Stack
            id={`card-back-face-${index}`}
            sx={{
                bgcolor: "green",
                width: "100%",
                height: "100%",
                position: "absolute",
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
                paddingX: 4,
                borderRadius: "30px",
                background: "rgba(255,255,255,.05)",
                boxShadow: "0 0 10px rgba(0,0,0,0.25)",
                backdropFilter: "blur(10px)",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <FlipButton index={index} face="back" flipCard={flipCard} />
        </Stack>
    );
};

export default BackFace;

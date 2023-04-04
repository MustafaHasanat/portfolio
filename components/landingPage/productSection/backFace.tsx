import { Stack, Typography, Button, Box, Avatar } from "@mui/material";
import { useTheme } from "@mui/material";
import { useAnimation, motion } from "framer-motion";
import { Fragment, useState } from "react";

interface BackFaceProps {
    index: number;
    contents: {
        cards: {
            src: string;
            title: string;
            projects: number;
        }[];
    };
}

const BackFace = ({ index, contents }: BackFaceProps) => {
    const { cards } = contents;

    return <Stack id={`card-back-face-${index}`} sx={{}}></Stack>;
};

export default BackFace;

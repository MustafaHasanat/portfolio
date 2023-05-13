import { Doc } from "@/types/doc";
import { Avatar, Box, Stack, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";

interface DocCardProps {
    doc: Doc;
}

const DocCard = ({ doc }: DocCardProps) => {
    const theme = useTheme();

    return (
        <Link href={doc.link} target="_blank">
            <Stack
                direction="row"
                component={motion.div}
                initial={{
                    width: "10vw",
                    height: "10vw",
                    background: theme.palette.secondary.main,
                    boxShadow: "none",
                    scale: 1,
                }}
                whileHover={{
                    width: "30vw",
                    height: "10vw",
                    boxShadow: `0 0 5px ${theme.palette.primary.main}`,
                    scale: 1.1,
                }}
                justifyContent="space-between"
                alignItems="center"
                p="1vw"
                sx={{
                    overflow: "hidden",
                }}
            >
                <Avatar
                    variant="rounded"
                    alt={doc.title}
                    src={doc.icon.asset.url}
                    sx={{
                        width: "8vw",
                        height: "auto",
                    }}
                />

                <Box
                    sx={{
                        width: "18vw",
                        ml: "1.1vw",
                    }}
                >
                    <Typography
                        color={theme.palette.text.primary}
                        textAlign="center"
                        variant="h4"
                    >
                        {doc.title}
                    </Typography>
                </Box>
            </Stack>
        </Link>
    );
};

export default DocCard;

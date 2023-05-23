import { Doc } from "@/types/doc";
import { Avatar, Box, Stack, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";

interface DocCardProps {
    doc: Doc;
}

const DocCard = ({ doc }: DocCardProps) => {
    const theme = useTheme();

    return (
        <Stack
            direction="row"
            component={motion.div}
            initial={{
                backgroundColor: theme.palette.text.primary,
            }}
            transition={{
                type: "spring",
                duration: 0.7,
            }}
            whileHover={{
                scale: 1.1,
                backgroundColor: theme.palette.primary.main,
            }}
            onClick={() => {
                window.open(doc.link, "_blank");
            }}
            sx={{
                justifyContent: "space-between",
                alignItems: "center",
                width: { xs: "100%", md: "15rem" },
                height: "5rem",
                overflow: "hidden",
                borderRadius: 2,
                cursor: "pointer",
                px: 3,
            }}
        >
            <Avatar
                alt={doc.title}
                src={doc.icon.asset.url}
                variant="rounded"
                sx={{
                    width: "auto",
                    height: "4rem",
                }}
            />
            <Typography>{doc.title}</Typography>
        </Stack>
    );
};

export default DocCard;

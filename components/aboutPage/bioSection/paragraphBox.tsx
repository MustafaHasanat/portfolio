import { Typography } from "@mui/material";

const ParagraphBox = ({ text, color }: { text: string; color: string }) => {
    return (
        <Typography
            color={color}
            fontSize={{ xs: "1.1rem", md: "1.5rem", lg: "1.7rem" }}
            textAlign="justify"
            my={1.5}
        >
            {text}
        </Typography>
    );
};

export default ParagraphBox;

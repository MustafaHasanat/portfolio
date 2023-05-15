import { Typography } from "@mui/material";

const ParagraphBox = ({ text, color }: { text: string; color: string }) => {
    return (
        <Typography color={color} fontSize="1.5vw" textAlign="justify" my={1.5}>
            {text}
        </Typography>
    );
};


export default ParagraphBox;
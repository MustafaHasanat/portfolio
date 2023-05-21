import { Typography } from "@mui/material";
import { TitleProps } from "./styles";

const Title = ({ text, color, extraSX }: TitleProps) => {
    return (
        <Typography
            color={color}
            textTransform="capitalize"
            my={3}
            fontWeight="bold"
            fontSize={{ xs: "1.7rem", md: "3rem" }}
            sx={extraSX}
        >
            {text}
        </Typography>
    );
};

export default Title;

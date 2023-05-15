import { Typography } from "@mui/material";
import { TitleProps } from "./styles";

const Title = ({ text, color, variant, extraSX }: TitleProps) => {
    return (
        <Typography
            color={color}
            variant={variant}
            textTransform="capitalize"
            my={3}
            fontWeight="bold"
            sx={extraSX}
        >
            {text}
        </Typography>
    );
};

export default Title;

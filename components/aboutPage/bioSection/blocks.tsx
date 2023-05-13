import { Typography } from "@mui/material";

export const title = ({
    text,
    color,
    variant,
    extraSX,
}: {
    text: string;
    color: string;
    variant: any;
    extraSX?: any;
}) => {
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

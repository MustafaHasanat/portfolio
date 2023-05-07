import { Box, Typography } from "@mui/material";
import { Fragment } from "react";

interface SlidingTitleProps {
    text: string;
    primary: string;
    secondary: string;
    extraSX?: any;
}

const titleCloneStyles = (color: string) => {
    return {
        position: "absolute",
        color: color,
        width: "0%",
        inset: 0,
        borderRight: `4px solid ${color}`,
        overflow: "hidden",
        transition: "0.5s",
        "*::WebkitTextStroke": `1px ${color}`,
    };
};

const titleStyles = (color: string, shadowColor: string) => {
    return {
        color: color,
        fontWeight: "bold",
        letterSpacing: "1px",
        zIndex: 10,
        position: "relative",
        fontSize: {
            xs: "1.3vw",
        },

        "&:hover #shadow-title": {
            width: "100%",
            filter: `drop-shadow(0 0 15px ${shadowColor})`,
        },
    };
};

const SlidingTitle = ({
    text,
    primary,
    secondary,
    extraSX,
}: SlidingTitleProps) => {
    const modifiedText = text.split(" ").map((text) => {
        return <Fragment key={text}>{text}&nbsp;</Fragment>;
    });

    const content = (clone: boolean) => {
        return clone ? (
            <Box
                id="shadow-title"
                component="span"
                sx={titleCloneStyles(primary)}
                aria-hidden="true"
            >
                &nbsp;&nbsp;
                {modifiedText}
                &nbsp;&nbsp;
            </Box>
        ) : (
            <Box component="span">&nbsp;&nbsp;{modifiedText}&nbsp;&nbsp;</Box>
        );
    };

    return (
        <Typography
            sx={{
                ...titleStyles(secondary, primary),
                ...extraSX,
            }}
        >
            {content(false)}
            {content(true)}
        </Typography>
    );
};

export default SlidingTitle;

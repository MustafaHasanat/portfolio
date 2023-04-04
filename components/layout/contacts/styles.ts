export const buttonVariants = {
    visible: {
        scale: 0,
        rotate: 270,
        transition: {
            type: "tween",
            duration: 0.3,
        },
    },
    hidden: {
        scale: 1,
        rotate: 0,
        transition: {
            type: "tween",
            duration: 0.3,
        },
    },
};

export const mainButtonStyles = (
    bgcolor: string,
    bgcolorHover: string,
    color: string,
    shadowColor: string
) => {
    return {
        background: bgcolor,
        color: color,
        position: "absolute",
        bottom: 0,
        right: 0,
        width: "4rem",
        height: "4rem",
        borderRadius: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 200,

        "&:hover": {
            background: bgcolorHover,
            color: shadowColor,
            boxShadow: `0 0 20px ${shadowColor}`,
        },
    };
};

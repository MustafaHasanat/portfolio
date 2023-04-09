export const buttonVariants = (visibleColor: string, hiddenColor: string) => {
    return {
        visible: {
            backgroundColor: "transparent",
            color: visibleColor,
            transition: {
                type: "Spring",
                duration: 0.1,
            },
        },
        hidden: {
            backgroundColor: "transparent",
            color: hiddenColor,
            transition: {
                type: "Spring",
                duration: 0.1,
            },
        },
    };
};

export const navButtonStyles = (color: string) => {
    return {
        padding: 0,
        marginRight: 2,
        borderRadius: 0,
        position: "relative",
        overflow: "hidden",

        "::before": {
            content: `""`,
            width: 0,
            height: "400%",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%) rotate(45deg)",
            background: color,
            transition: ".5s ease",
            display: "block",
            zIndex: -1,
        },

        ":hover::before": {
            width: "105%",
        },
    };
};

export const navTextStyles = (color: string) => {
    return {
        color: color,
        opacity: 0.8,
        paddingX: 1.5,
        paddingY: 0.8,
        fontWeight: "bold",
        fontSize: "1.1vw",
    };
};

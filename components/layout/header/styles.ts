// export const headerVariants = {
//     visible: {
//         opacity: 0,
//         transition: {
//             type: "tween",
//             duration: 0.3,
//         },
//     },
//     hidden: {
//         opacity: 1,
//         transition: {
//             type: "tween",
//             duration: 0.7,
//         },
//     },
// };

export const headerBoxStyles = (
    switchPointInView: boolean,
    headerPosition: string,
    borderColor: string,
    bgColor: string
) => {
    return {
        background: switchPointInView ? "transparent" : bgColor,
        justifyContent: "space-between",
        alignItems: "center",
        height: switchPointInView ? "16vh" : "10vh",
        paddingX: 12,
        width: "100%",
        position: "fixed",
        top: headerPosition,
        transition: "0.7s ease",
        borderBottom: `2px solid ${borderColor}`,
        boxShadow: switchPointInView ? "none" : `0 2px 10px ${borderColor}`,
        backdropFilter: switchPointInView ? "blur(0px)" : "blur(10px)",
    };
};

// export const headerColoredBoxStyles = (color: string) => {
//     return {
//         width: "100%",
//         height: "100%",
//         position: "absolute",
//         top: "0px",
//         left: "0px",
//         background: color,
//     };
// };

export const titleStyles = (color: string, shadowColor: string) => {
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

export const titleCloneStyles = (color: string) => {
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

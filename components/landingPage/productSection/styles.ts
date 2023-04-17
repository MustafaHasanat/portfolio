export const ProductBox = (color: string) => {
    return {
        position: "relative",
        alignItems: "center",
        paddingY: 10,
        bgcolor: color,
    };
};

export const CardsBox = (transform: string) => {
    return {
        gap: 15,
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 2,
        position: "relative",
        transform: transform,
        transition: "1s ease",
    };
};

export const BackBox = {
    width: "100%",
    height: "90%",
    position: "relative",
    justifyContent: "center",
    flexWrap: "wrap",
    paddingY: 2,
    overflowY: "scroll",
};

export const MiniCardBox = (
    height: number,
    bgcolor: string,
    transform: string
) => {
    return {
        display: "flex",
        position: "relative",
        width: "25%",
        height: height * 1.5,
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0,0,0,0.25)",
        background: `${bgcolor}11`,
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        zIndex: 1,
        transition: "0.4s ease",
        transform: transform,
    };
};

export const MiniCardStandard = (filter: string) => {
    return {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        transition: "0.4s ease",
        filter: filter,
    };
};

export const MiniCardHidden = {
    opacity: 0,
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 2,
    transition: "0.4s ease",
    background: "rgba(0, 0, 0, 0.07)",

    "&:hover": {
        opacity: 1,
    },
};

export const MiniCardText = (color: string, shadowColor: string) => {
    return {
        fontSize: "100%",
        color: color,
        textAlign: "center",
        textShadow: `0 0 10px ${shadowColor}`,
    };
};

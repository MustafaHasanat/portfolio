export const ProductBox = (bgcolor: string) => {
    return {
        position: "relative",
        alignItems: "center",
        py: 10,

        "&::before": {
            content: `""`,
            display: "block",
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
        },
    };
};

export const CardsBox = {
    gap: { xs: 5, md: 15 },
    my: 5,
    px: { xs: 2, md: 15 },
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 5,
    position: "relative",
};

export const BackBox = {
    width: "100%",
    height: "90%",
    position: "relative",
    justifyContent: "center",
    alignItems: "start",
    flexWrap: "wrap",
    paddingY: 2,
    overflowY: "scroll",
};

export const MiniCardBox = (
    height: number,
    bgcolor: string,
    shadowColor: string,
    transform: string
) => {
    return {
        display: "flex",
        position: "relative",
        width: { xs: "8rem", sm: "10rem", md: "5rem" },
        height: { xs: "12rem", sm: "15rem", md: "8rem" },
        borderRadius: 3,
        boxShadow: `0 0 5px ${shadowColor}`,
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

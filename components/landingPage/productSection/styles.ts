export const ProductBox = (bgcolor: string) => {
    return {
        position: "relative",
        alignItems: "center",
        paddingY: 10,
        width: "100%",

        "&::before": {
            content: `""`,
            display: "block",
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url("bg2.jpg")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
        },
    };
};

export const CardsBox = {
    gap: 20,
    my: 5,
    px: 15,
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
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
    transform: string
) => {
    return {
        display: "flex",
        position: "relative",
        width: { xs: "40%", sm: "25%" },
        height: height * 1.5,
        borderRadius: 3,
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

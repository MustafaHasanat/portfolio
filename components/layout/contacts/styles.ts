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
    colorHover: string,
    shadowColor: string,
    shadowColorHover: string
) => {
    return {
        background: `${bgcolor}CC`,
        color: color,
        boxShadow: `0 0 20px ${shadowColor}`,
        position: "absolute",
        bottom: 0,
        right: 0,
        width: "100%",
        height: "100%",
        borderRadius: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 200,
        transition:
            "background 0.7s ease, color 0.7s ease, box-shadow 0.4s ease",

        "&:hover": {
            background: bgcolorHover,
            color: colorHover,
            boxShadow: `0 0 20px ${shadowColorHover}`,
        },
    };
};

export const contactsContainerStyles = (isModalActive: boolean) => {
    return {
        position: "fixed",
        width: "4rem",
        height: "4rem",
        bottom: { xs: 30, md: "10%" },
        right: { xs: 30, md: 100 },
        zIndex: isModalActive ? 200 : 10,
    };
};

export const itemsVariants = (
    distance: number,
    delayVisible: number,
    delayHidden: number,
    isModalActive: boolean
) => {
    return {
        visible: {
            right: 0,
            bottom: distance,
            opacity: 0.7,
            scale: 1,
            transition: {
                delay: delayVisible,
            },
        },
        hidden: {
            right: 0,
            bottom: 0,
            opacity: isModalActive ? 0.7 : 0,
            scale: isModalActive ? 1 : 0,
            transition: {
                delay: delayHidden,
            },
        },
    };
};

export const itemTextVariants = (shadow: string) => {
    return {
        visible: {
            textShadow: `0 0 18px ${shadow}`,
            opacity: 1,
            y: 0,
            x: "-70%",
            transition: {
                duration: 0.2,
            },
        },
        hidden: {
            textShadow: `0 0 0px ${shadow}`,
            opacity: 0,
            y: 20,
            x: "-70%",
            transition: {
                duration: 0.2,
            },
        },
    };
};

export const contactItemStyles = {
    position: "absolute",
    bgcolor: "transparent",
    border: "none",
    width: "4rem",
    height: "4rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
};

export const floatingListStyles = (color: string) => {
    return {
        pointerEvents: "none",
        textAlign: "end",
        width: "500%",
        position: "absolute",
        color: color,
    };
};

export const skillRollerStyles = (boxHeight: number) => {
    return {
        height: `${boxHeight}vh`,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
    };
};

export const skillBoxStyles = (boxWidth: number, boxHeight: number) => {
    return {
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: `${boxHeight}vh`,
        width: `${boxWidth}vw`,
    };
};

export const skillBoxTransition = {
    type: "tween",
    ease: "easeInOut",
};

export const skillMainBoxVariants = (boxWidth: number) => {
    return {
        hidden: {
            x: 0,
        },
        visible: {
            x: `${-1.5 * boxWidth}vw`,
        },
    };
};

export const skillTempBoxVariants = (boxWidth: number) => {
    return {
        hidden: {
            x: `${0.5 * boxWidth}vw`,
        },
        visible: {
            x: `${-boxWidth}vw`,
        },
    };
};

import styled from "@emotion/styled";

export const headerVariants = {
    visible: {
        opacity: 0,
        transition: {
            type: "tween",
            duration: 0.3,
        },
    },
    hidden: {
        opacity: 1,
        transition: {
            type: "tween",
            duration: 0.7,
        },
    },
};

export const headerBoxStyles = {
    justifyContent: "space-between",
    alignItems: "center",
    height: "12vh",
    paddingX: 12,
    width: "100%",
    position: "fixed",
    top: "0px",
};

export const headerColoredBoxStyles = (color: string) => {
    return {
        width: "100%",
        height: "100%",
        position: "absolute",
        top: "0px",
        left: "0px",
        background: color,
    };
};

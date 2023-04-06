import { keyframes } from "@mui/material";

export const mainSectionStyles = {
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    width: "100%",
    height: "100vh",
    background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${"images/desktopWP.jpg"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
};

const orbital = (scale: number) => keyframes`
  0% {
    opacity: 0;
    transform: rotateZ(0) translateX(${
        12 * scale
    }rem) rotateZ(0) rotateY(-70deg) rotateZ(0deg);
  }
  20% {
    opacity: 1;
  }
  100% {
    transform: rotateZ(360deg) translateX(${
        12 * scale
    }rem) rotateZ(-360deg) rotateY(-70deg) rotateZ(180deg);
  }
`;

const hidden = keyframes`
  0% { z-index: 5; }
  50% { z-index: 15; }
  100% { z-index: 5; }
`;

export const ionicContainerStyles = (scale: number) => {
    return {
        width: "50%",
        height: "100%",
        position: "relative",
        zIndex: 30,
        bgcolor: "transparent",
    };
};

export const avatarStyles = (scale: number) => {
    return {
        zIndex: 10,
        width: `${12 * scale}rem`,
        height: `${12 * scale}rem`,
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translateX(-50%) translateY(-50%)",
        boxShadow: `0px 0px ${35}px white}`,
    };
};

export const orbitalPathStyles = (
    rotateZ: number,
    rotateY: number,
    delay: number,
    scale: number
) => {
    return {
        width: `${24 * scale}rem`,
        height: `${24 * scale}rem`,
        borderRadius: "50%",
        position: "absolute",
        top: "50%",
        left: "50%",
        transformStyle: "preserve-3d",
        transform: `translateX(-50%) translateY(-50%) rotateZ(${rotateZ}deg) rotateY(${rotateY}deg)`,
        animation: `${hidden} 4s ease-in ${delay}s infinite`,
    };
};

export const orbitalObjectStyles = (
    delay: number,
    shadow: string,
    scale: number
) => {
    return {
        margin: "auto",
        animation: `${orbital(scale)} 4s linear ${delay}s infinite`,
        position: "absolute",
        borderRadius: "50%",
        width: `${3 * scale}rem`,
        height: `${3 * scale}rem`,
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        boxShadow: `0px 0px ${25}px ${shadow}`,
    };
};

export const downloadButtonStyles = (width: string, height: string) => {
    return {
        position: "absolute",
        overflow: "hidden",
        borderRadius: 0,
        justifyContent: "center",
        alignItems: "center",
        left: 100,
        bottom: "10%",
        width: width,
        height: height,

        "&:hover": {
            borderRadius: 1,
        },
    };
};

export const buttonVariants = (
    bgColorVisible: string,
    bgColorHidden: string,
    buttonHeight: string
) => {
    return {
        visible: {
            top: `-${buttonHeight}`,
            background: bgColorVisible,
            transition: {
                type: "tween",
                duration: 0.3,
            },
        },
        hidden: {
            top: "0",
            background: bgColorHidden,
            transition: {
                type: "tween",
                duration: 0.3,
            },
        },
    };
};

export const downloadButtonWraperStyles = (width: string, height: string) => {
    return {
        width: width,
        height: height,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };
};

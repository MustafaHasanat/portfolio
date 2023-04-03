import { Avatar, Box, keyframes } from "@mui/material";

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
    transform: rotateZ(0) translateX(${
        12 * scale
    }rem) rotateZ(0) rotateY(-70deg) rotateZ(0deg);
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

export const writerStyles = (color: string) => {
    return {
        position: "absolute",
        left: 100,
        top: "30%",
        width: "23%",
        fontWeight: "bold",
        fontSize: "2rem",
        transition: "0.3s ease-in",
        color: color,
        textShadow: `0rem 0rem 15px ${color}`,
    };
};
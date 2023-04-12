import { keyframes } from "@mui/material";

const span1 = (start: string, end: string) => keyframes`
  0% {
    ${start};
    }
  50%,100% {
    ${end};
    }
`;

const WelcomeSectionConstants = {
    avatarIons: [
        {
            id: "react-orbital-icon",
            src: String.raw`\icons\frameworks\frontend\reactIcon.png`,
            rotateZ: 60,
            rotateY: 80,
            delay: 0,
            shadow: "cyan",
        },
        {
            id: "angular-orbital-icon",
            src: String.raw`icons\frameworks\frontend\angularIcon.png`,
            rotateZ: 60,
            rotateY: 80,
            delay: 1,
            shadow: "red",
        },
        {
            id: "flutter-orbital-icon",
            src: String.raw`icons\frameworks\frontend\flutterIcon.png`,
            rotateZ: 60,
            rotateY: 80,
            delay: 2,
            shadow: "cyan",
        },
        {
            id: "next-orbital-icon",
            src: String.raw`icons\frameworks\frontend\nextIcon.png`,
            rotateZ: 60,
            rotateY: 80,
            delay: 3,
            shadow: "black",
        },
        {
            id: "node-orbital-icon",
            src: String.raw`icons\frameworks\backend\nodeIcon.png`,
            rotateZ: -60,
            rotateY: 80,
            delay: 0.3,
            shadow: "green",
        },
        {
            id: "fastAPI-orbital-icon",
            src: String.raw`icons\frameworks\backend\fastAPIIcon.png`,
            rotateZ: -60,
            rotateY: 80,
            delay: 1.3,
            shadow: "cyan",
        },
        {
            id: "electron-orbital-icon",
            src: String.raw`icons\frameworks\frontend\electronIcon.png`,
            rotateZ: -60,
            rotateY: 80,
            delay: 2.3,
            shadow: "white",
        },
        {
            id: "django-orbital-icon",
            src: String.raw`icons\frameworks\backend\djangoIcon.png`,
            rotateZ: -60,
            rotateY: 80,
            delay: 3.3,
            shadow: "white",
        },
        {
            id: "html-orbital-icon",
            src: String.raw`icons\languages\htmlIcon.png`,
            rotateZ: 0,
            rotateY: 80,
            delay: 0.6,
            shadow: "orange",
        },
        {
            id: "css-orbital-icon",
            src: String.raw`icons\languages\cssIcon.png`,
            rotateZ: 0,
            rotateY: 80,
            delay: 1.6,
            shadow: "lightblue",
        },
        {
            id: "js-orbital-icon",
            src: String.raw`icons\languages\jsIcon.png`,
            rotateZ: 0,
            rotateY: 80,
            delay: 2.6,
            shadow: "yellow",
        },
        {
            id: "python-orbital-icon",
            src: String.raw`icons\languages\pythonIcon.png`,
            rotateZ: 0,
            rotateY: 80,
            delay: 3.6,
            shadow: "blue",
        },
    ],

    downloadButtonAnimations: (size: string, color: string) => [
        // pos: top, bottom, left, right
        {
            pos: ["0", "unset", "100%", "unset"],
            width: "100%",
            height: size,
            background: `linear-gradient(90deg, transparent, ${color})`,
            animation: `${span1(
                "left: -100%;",
                "left: 100%;"
            )} 1.5s linear infinite`,
            animationDelay: "0s",
        },
        {
            pos: ["-100%", "unset", "unset", "0"],
            width: size,
            height: "100%",
            background: `linear-gradient(180deg, transparent, ${color})`,
            animation: `${span1(
                "top: -100%;",
                "top: 100%;"
            )} 1.5s linear infinite`,
            animationDelay: ".375s",
        },
        {
            pos: ["unset", "0", "unset", "-100%"],
            width: "100%",
            height: size,
            background: `linear-gradient(270deg, transparent, ${color})`,
            animation: `${span1(
                "right: -100%;",
                "right: 100%;"
            )} 1.5s linear infinite`,
            animationDelay: ".75s",
        },
        {
            pos: ["unset", "-100%", "0", "unset"],
            width: size,
            height: "100%",
            background: `linear-gradient(360deg, transparent, ${color})`,
            animation: `${span1(
                "bottom: -100%;",
                "bottom: 100%;"
            )} 1.5s linear infinite`,
            animationDelay: "1.125s",
        },
    ],
};

export default WelcomeSectionConstants;

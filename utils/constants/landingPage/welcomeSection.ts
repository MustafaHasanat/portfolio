import { keyframes } from "@mui/material";
import globalConstants from "@/utils/constants/global";

const span1 = (start: string, end: string) => keyframes`
  0% {${start}}
  50%,100% {${end}}
`;

const WelcomeSectionConstants = {
    avatarIons: [
        {
            id: "react-orbital-icon",
            src: String.raw`\icons\frameworks\reactIcon.png`,
            rotateZ: 60,
            rotateY: 80,
            delay: 0,
            shadow: "cyan",
        },
        {
            id: "angular-orbital-icon",
            src: String.raw`icons\frameworks\angularIcon.png`,
            rotateZ: 60,
            rotateY: 80,
            delay: 0.8,
            shadow: "red",
        },
        {
            id: "flutter-orbital-icon",
            src: String.raw`icons\frameworks\flutterIcon.png`,
            rotateZ: 60,
            rotateY: 80,
            delay: 1.6,
            shadow: "cyan",
        },
        {
            id: "github-orbital-icon",
            src: String.raw`icons\frameworks\nextIcon.png`,
            rotateZ: 60,
            rotateY: 80,
            delay: 2.4,
            shadow: "black",
        },
        {
            id: "node-orbital-icon",
            src: String.raw`icons\frameworks\nodeIcon.png`,
            rotateZ: -60,
            rotateY: 80,
            delay: 0.3,
            shadow: "green",
        },
        {
            id: "fastAPI-orbital-icon",
            src: String.raw`icons\frameworks\fastAPIIcon.png`,
            rotateZ: -60,
            rotateY: 80,
            delay: 1.1,
            shadow: "cyan",
        },
        {
            id: "docker-orbital-icon",
            src: String.raw`icons\tools\dockerIcon.png`,
            rotateZ: -60,
            rotateY: 80,
            delay: 1.9,
            shadow: "white",
        },
        {
            id: "django-orbital-icon",
            src: String.raw`icons\frameworks\djangoIcon.png`,
            rotateZ: -60,
            rotateY: 80,
            delay: 2.7,
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
            delay: 1.4,
            shadow: "lightblue",
        },
        {
            id: "js-orbital-icon",
            src: String.raw`icons\languages\jsIcon.png`,
            rotateZ: 0,
            rotateY: 80,
            delay: 2.2,
            shadow: "yellow",
        },
        {
            id: "python-orbital-icon",
            src: String.raw`icons\languages\pythonIcon.png`,
            rotateZ: 0,
            rotateY: 80,
            delay: 3,
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

    contacts: [
        {
            text: "send me an email",
            distance: 400,
            delayVisible: 0,
            delayHidden: 0.3,
            src: String.raw`\icons\contacts\gmailIcon.png`,
            link: `mailto:${globalConstants.myEmail}?Subject=Setting a meeting&body=Hello Mustafa, I would like to set a meeting with you.`,
        },
        {
            text: "contact me via LinkedIn",
            distance: 300,
            delayVisible: 0.1,
            delayHidden: 0.2,
            src: String.raw`\icons\contacts\linkedInIcon.png`,
            link: globalConstants.myLinkedInURL,
        },
        {
            text: "call me",
            distance: 200,
            delayVisible: 0.2,
            delayHidden: 0.1,
            src: String.raw`\icons\contacts\phoneIcon.png`,
            link: `tel:${globalConstants.myPhoneNumber}`,
        },
        {
            text: "chat with me via Whatsapp",
            distance: 100,
            delayVisible: 0.3,
            delayHidden: 0,
            src: String.raw`\icons\contacts\whatsappIcon.png`,
            link: `http://wa.me/${globalConstants.myPhoneNumber}`,
        },
    ],
};

export default WelcomeSectionConstants;

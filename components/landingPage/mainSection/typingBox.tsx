import { Stack } from "@mui/material";
import Typewriter from "typewriter-effect";
import { useTheme } from "@mui/material";
import { writerStyles } from "./styles";

const TypingBox = () => {
    const theme = useTheme();

    const changeTitleColor = (newColor: string) => {
        const element = document.getElementById("animated-title");
        if (element) element.style.textShadow = `0rem 0rem 15px ${newColor}`;
    };

    return (
        <Stack id="animated-title" sx={writerStyles(theme.palette.base.light)}>
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString("Welcome to my portfolio!")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Ask me about ")

                        .callFunction(() => changeTitleColor("cyan"))
                        .typeString("React")
                        .pauseFor(1000)
                        .deleteChars(5)

                        .callFunction(() => changeTitleColor("green"))
                        .typeString("Node JS")
                        .pauseFor(1000)
                        .deleteChars(7)

                        .callFunction(() => changeTitleColor("yellow"))
                        .typeString("Fast API")
                        .pauseFor(1000)
                        .deleteChars(8)

                        .callFunction(() => changeTitleColor("red"))
                        .typeString("Angular")
                        .pauseFor(1000)

                        .deleteAll()
                        .callFunction(() => changeTitleColor("white"))
                        .typeString("Mustafa Alhasanat's Portfolio")
                        .start();
                }}
            />
        </Stack>
    );
};

export default TypingBox;

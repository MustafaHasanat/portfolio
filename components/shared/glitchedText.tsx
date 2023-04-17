import { Box, keyframes } from "@mui/material";

interface GlitchedTextProps {
    color: string;
    text: string;
    fontSize: string;
    shadowColor1: string;
    shadowColor2: string;
    shiftScal: number;
}

const GlitchedText = ({
    color,
    text,
    fontSize,
    shadowColor1,
    shadowColor2,
    shiftScal
}: GlitchedTextProps) => {
    const slices = {
        slice_0: "inset(50% 50% 50% 50%)",
        slice_1: "inset(80% -6px 0 0)",
        slice_2: "inset(50% -6px 30% 0)",
        slice_3: "inset(10% -6px 85% 0)",
        slice_4: "inset(40% -6px 43% 0)",
        slice_5: "inset(80% -6px 5% 0)",
    };

    const glitch = keyframes`
        0% {
        clip-path: ${slices.slice_1};
        transform: translate(${-20 * shiftScal}px, ${-10 * shiftScal}px);
        }
    
        5% {
        clip-path: ${slices.slice_0};
        transform: translate(${10 * shiftScal}px, ${10 * shiftScal}px);
        }
    
        10% {
        clip-path: ${slices.slice_1};
        transform: translate(${-10 * shiftScal}px, ${10 * shiftScal}px);
        }
    
        15% {
        clip-path: ${slices.slice_3};
        transform: translate(0px, ${5 * shiftScal}px);
        }
    
        20% {
        clip-path: ${slices.slice_2};
        transform: translate(${-5 * shiftScal}px, 0px);
        }
    
        25% {
        clip-path: ${slices.slice_3};
        transform: translate(${5 * shiftScal}px, 0px);
        }
    
        30% {
        clip-path: ${slices.slice_4};
        transform: translate(${5 * shiftScal}px, ${10 * shiftScal}px);
        }
    
        35% {
        clip-path: ${slices.slice_2};
        transform: translate(${-10 * shiftScal}px, ${10 * shiftScal}px);
        }
    
        40% {
        clip-path: ${slices.slice_5};
        transform: translate(${20 * shiftScal}px, ${-10 * shiftScal}px);
        }
    
        45% {
        clip-path: ${slices.slice_0};
        transform: translate(${-10 * shiftScal}px, 0px);
        }
    
        50%, 100% {
        clip-path: ${slices.slice_0};
        transform: translate(0);
        }
    `;

    return (
        <Box
            sx={{
                fontSize: fontSize,
                color: color,
                position: "relative",

                "&::after": {
                    fontSize: fontSize,
                    color: color,
                    content: `"${text}"`,
                    display: "block",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    textShadow: `-4px -4px 0px ${shadowColor1}, 4px 4px 0px ${shadowColor2}`,
                    clipPath: slices.slice_0,
                    animation: `2s ${glitch}`,
                    animationTimingFunction: "steps(2, end)",
                    animationIterationCount: "infinite",
                },
            }}
        >
            {text}
        </Box>
    );
};

export default GlitchedText;

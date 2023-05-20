import { Box, Stack, useTheme } from "@mui/material";
import GlassBox from "./glassBox";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import useBoxSize from "@/hooks/useBoxSize";

interface FlipBoxProps {
    frontChildren: JSX.Element;
    backChildren: JSX.Element;
    id: string;
    transform: string;
    width: any;
    isActive: boolean;
    frontSX: any;
    backSX: any;
    extraSX?: any;
}

/**
 * It is a flip card controlled by its transform value
 *
 * @param {JSX.Element} frontChildren children of the front face
 * @param {JSX.Element} backChildren children of the back face
 * @param {string} id unique id for the card
 * @param {string} transform transform value to control flipping the card ==> either "rotateY(180deg)" or "none"
 * @param {any} width width of the card
 * @param {boolean} isActive does the current product available?
 * @param {any} frontSX extra styles for the front face
 * @param {any} backSX extra styles for the back face
 * @param {any} extraSX extra styles
 *
 * @returns {JSX.Element}
 */
const FlipBox = ({
    frontChildren,
    frontSX,
    backChildren,
    backSX,
    id,
    transform,
    width,
    isActive,
    extraSX,
}: FlipBoxProps): JSX.Element => {
    const theme = useTheme();
    const cardRef = useRef(null);
    const cardInView = useInView(cardRef);
    const { ref: boxRef, height: boxHeight } = useBoxSize();

    return (
        <Stack
            id={id}
            ref={cardRef}
            component={motion.div}
            initial={{ transform: `${transform} scale(0.9)` }}
            animate={{
                transform: `${transform} scale(${cardInView ? 1 : 0.9})`,
                transition: {
                    duration: 0.5,
                },
            }}
            sx={{
                position: "relative",
                width: width,
                transformStyle: "preserve-3d",
                ...extraSX,
            }}
        >
            {/* {!isActive && (
                <Box
                    sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        bgcolor: theme.palette.text.primary,
                        opacity: 0.7,
                        zIndex: 50,
                        borderRadius: 3,
                    }}
                />
            )} */}

            <Stack sx={frontSX} ref={boxRef}>
                {frontChildren}
            </Stack>

            <Stack
                sx={{
                    ...backSX,
                    transform: "rotateY(180deg)",
                    height: boxHeight,
                }}
            >
                {backChildren}
            </Stack>
        </Stack>
    );
};

export default FlipBox;

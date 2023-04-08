import { Stack } from "@mui/material";
import GlassBox from "./glassBox";

interface FlipBoxProps {
    frontChildren: JSX.Element;
    backChildren: JSX.Element;
    id: string;
    transform: string;
    width: string;
    height: string;
    frontSX: any;
    backSX: any;
}

/**
 * It is a flip card controlled by its transform value
 *
 * @param {JSX.Element} frontChildren children of the front face
 * @param {JSX.Element} backChildren children of the back face
 * @param {string} id nuique id for the card
 * @param {string} transform transform value to control flipping the card ==> either "rotateY(180deg)" or "none"
 * @param {string} width width of the card
 * @param {string} height height of the card
 * @param {any} frontSX extra syles for the front face
 * @param {any} backSX extra syles for the back face
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
    height,
}: FlipBoxProps): JSX.Element => {
    return (
        <Stack
            id={id}
            sx={{
                position: "relative",
                width: width,
                height: height,
                transformStyle: "preserve-3d",
                transition: "1s ease",
                transform: transform,
            }}
        >
            <GlassBox id={`card-front-face-${id}`} extraSX={frontSX}>
                {frontChildren}
            </GlassBox>

            <GlassBox
                id={`card-back-face-${id}`}
                extraSX={{ ...backSX, transform: "rotateY(180deg)" }}
            >
                {backChildren}
            </GlassBox>
        </Stack>
    );
};

export default FlipBox;

import useBoxSize from "@/hooks/useBoxSize";
import { Avatar, Box } from "@mui/material";

const ImageBox = ({
    src,
    alt,
    width,
    height,
    shadowColor,
    extraSX,
}: {
    src: string;
    alt: string;
    width: string;
    height: string;
    shadowColor: string;
    extraSX?: any;
}) => {
    const { ref: boxRef, width: boxWidth, height: boxHeight } = useBoxSize();

    return (
        <Box position="relative" my={2} sx={extraSX}>
            <Box
                sx={{
                    width: boxWidth,
                    height: boxHeight,
                    zIndex: 3,
                    boxShadow: `0 0 20px 10px ${shadowColor} inset`,
                    position: "absolute",
                }}
            />

            <Avatar
                ref={boxRef}
                variant="square"
                src={src}
                alt={alt}
                sx={{
                    zIndex: 2,
                    width: width,
                    height: height,
                }}
            />
        </Box>
    );
};

export default ImageBox;

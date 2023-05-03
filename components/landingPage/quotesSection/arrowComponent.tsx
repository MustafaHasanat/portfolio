import { Box, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";

interface ArrowComponentProps {
    transform: string;
    positionPair: { left: string } | { right: string };
    direction: string;
    handleArrowClick: (arrow: string) => void;
}

const ArrowComponent = ({
    transform,
    positionPair,
    direction,
    handleArrowClick,
}: ArrowComponentProps) => {
    const newTransform = "translateY(-50%) " + transform;
    const theme = useTheme();

    return (
        <Box
            component={motion.div}
            initial={{
                transform: newTransform,
            }}
            whileHover={{
                transform: newTransform + " scale(1.3)",
            }}
            whileTap={{
                transform: newTransform + " scale(0.7)",
            }}
            onClick={() => {
                handleArrowClick(direction);
            }}
            sx={{
                position: "absolute",
                top: "50%",
                width: "7vw",
                height: "7vw",
                cursor: "pointer",
                opacity: 0.5,
                zIndex: 5,
                ...positionPair,
            }}
        >
            <KeyboardDoubleArrowLeftIcon
                sx={{
                    height: "100%",
                    width: "100%",
                    color: theme.palette.primary.main,
                }}
            />
        </Box>
    );
};

export default ArrowComponent;

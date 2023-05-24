import { Box, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";

interface ArrowComponentProps {
    transform: string;
    positionPair: { left: string } | { right: string };
    direction: string;
    handleArrowClick: (arrow: string) => void;
    size: string;
}

const ArrowComponent = ({
    transform,
    positionPair,
    direction,
    handleArrowClick,
    size,
}: ArrowComponentProps) => {
    const theme = useTheme();
    const mdScreen = useMediaQuery("(min-width:768px)");
    const newTransform = "translateY(-50%) " + transform;

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
                width: size,
                height: size,
                cursor: "pointer",
                opacity: mdScreen ? 0.8 : 0.5,
                zIndex: 5,
                bgcolor: mdScreen
                    ? "transparent"
                    : theme.palette.secondary.main,
                borderRadius: mdScreen ? 0 : "100%",
                p: mdScreen ? 0 : 1,
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

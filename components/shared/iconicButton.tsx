import { Box, Stack, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import { ReactNode, useState } from "react";

interface IconicButtonProps {
    children: JSX.Element;
    icon: ReactNode;
    color: string;
    hoverColor: string;
    onClick: () => any;
    buttonHeight: string;
    extraSX?: any;
}

const IconicButton = ({
    children,
    icon,
    color,
    hoverColor,
    onClick,
    buttonHeight,
    extraSX,
}: IconicButtonProps) => {
    const [buttonHovered, setButtonHovered] = useState(false);
    const lgScreen = useMediaQuery("(min-width:1440px)");

    return (
        <Box
            component="div"
            onClick={onClick}
            onMouseEnter={() => {
                setButtonHovered(true);
            }}
            onMouseLeave={() => {
                setButtonHovered(false);
            }}
            sx={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "10%",
                color: buttonHovered ? hoverColor : color,
                border: `1px solid`,
                borderRadius: 1,
                transition: "0.2s ease",
                borderColor: buttonHovered ? hoverColor : color,
                overflow: "hidden",
                cursor: "pointer",
                height: buttonHeight,
                ...extraSX,
            }}
        >
            <Stack
                component={motion.div}
                initial={{ y: 0 }}
                whileHover={{
                    y: lgScreen ? `-${buttonHeight}` : 0,
                }}
                sx={{
                    width: "100%",
                    position: "absolute",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: buttonHeight,
                    }}
                >
                    {children}
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: buttonHeight,
                    }}
                >
                    {icon}
                </Box>
            </Stack>
        </Box>
    );
};

export default IconicButton;

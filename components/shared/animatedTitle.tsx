import { Box, Typography } from "@mui/material";
import { useRef } from "react";
import { useTheme } from "@mui/material";
import useBoxSize from "@/hooks/useBoxSize";
import { useInView } from "framer-motion";

interface AnimatedTitleProps {
    text: string;

    fontSize?: any;
    containerWidth?: string;
    containerHeight?: string;
    buttonWidth?: string;
    buttonHeight?: string;
    cuttingRatio?: number;
    buttonGap?: number;
    buttonLimit?: number;
    primary?: string;
    secondary?: string;
    primaryBorder?: string;
    secondaryBorder?: string;
    tertiary?: string;
    thickness?: number;
    shadowColor?: string;

    extraSX?: any;
}
const AnimatedTitle = (props: AnimatedTitleProps) => {
    const theme = useTheme();
    const titleRef = useRef(null);
    const titleInView = useInView(titleRef);

    const {
        // colors
        primary = theme.palette.primary.main,
        primaryBorder = "transparent",
        secondary = theme.palette.secondary.main,
        secondaryBorder = "transparent",
        tertiary = theme.palette.primary.main,
        thickness = 3,
        shadowColor = theme.palette.primary.main,
        // sizes
        containerWidth = "100%",
        containerHeight = "100%",
        buttonWidth = "100%",
        buttonHeight = "60%",
        // button and lines values
        cuttingRatio = 0.65,
        buttonGap = 15,
        buttonLimit = 15,
        // text
        text = "title placeholder",
        fontSize = { xs: "1rem", sm: "1.2rem", md: "1.7rem" },

        extraSX,
    } = props;

    const {
        ref: buttonRef,
        width: buttonRefWidth,
        height: buttonRefHeight,
    } = useBoxSize();

    return (
        <Box
            ref={titleRef}
            sx={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: containerWidth,
                height: containerHeight,
                ...extraSX,
            }}
        >
            <Box
                id="svg-button-container"
                ref={buttonRef}
                sx={{
                    position: "absolute",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: buttonWidth,
                    height: buttonHeight,
                    zIndex: 5,
                }}
            >
                <svg
                    width="100%"
                    height="100%"
                    style={{
                        position: "absolute",
                        filter: `drop-shadow(0px 0px 3px ${shadowColor})`,
                    }}
                >
                    <path
                        d={`
                            M ${buttonRefWidth - buttonLimit} ${buttonLimit} 
                            L ${buttonRefHeight * cuttingRatio} ${buttonLimit}
                            L ${buttonLimit} ${buttonRefHeight * cuttingRatio}
                            L ${buttonLimit} ${buttonRefHeight - buttonLimit}
                            L ${
                                buttonRefWidth - buttonRefHeight * cuttingRatio
                            } ${buttonRefHeight - buttonLimit}
                            L ${buttonRefWidth - buttonLimit} ${
                            buttonRefHeight * (1 - cuttingRatio)
                        }
                            Z
                        `}
                        stroke={primaryBorder}
                        strokeWidth={2}
                        fill={primary}
                    />
                </svg>

                <svg
                    width="100%"
                    height="100%"
                    style={{
                        position: "absolute",
                        transform: titleInView
                            ? "translateX(0px)"
                            : "translateX(-100px)",
                        transition: "1.3s ease",
                        filter: `drop-shadow(0px 0px 3px ${tertiary})`,
                    }}
                >
                    <path
                        d={`
                            M ${buttonLimit} ${buttonLimit}
                            L ${
                                buttonRefHeight * cuttingRatio - buttonGap
                            } ${buttonLimit}
                            L ${buttonLimit} ${
                            buttonRefHeight * cuttingRatio - buttonGap
                        }
                            Z
                        `}
                        stroke={secondaryBorder}
                        strokeWidth={thickness}
                        fill={secondary}
                    />
                </svg>

                <svg
                    width="100%"
                    height="100%"
                    style={{
                        position: "absolute",
                        transform: titleInView
                            ? "translateX(0px)"
                            : "translateX(100px)",
                        transition: "1.3s ease",
                        filter: `drop-shadow(0px 0px 3px ${tertiary})`,
                    }}
                >
                    <path
                        d={`
                            M ${buttonRefWidth - buttonLimit} ${
                            buttonRefHeight - buttonLimit
                        }
                            L ${buttonRefWidth - buttonLimit} ${
                            buttonRefHeight * (1 - cuttingRatio) + buttonGap
                        }
                            L ${
                                buttonRefWidth +
                                buttonGap -
                                buttonRefHeight * cuttingRatio
                            } ${buttonRefHeight - buttonLimit}
                            Z
                        `}
                        stroke={secondaryBorder}
                        strokeWidth={thickness}
                        fill={secondary}
                    />
                </svg>
            </Box>

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: {
                        xs: `calc(${buttonWidth} * 0.4)`,
                        sm: `calc(${buttonWidth} * 0.45)`,
                        md: buttonWidth,
                    },
                    height: buttonHeight,
                    zIndex: 6,
                    fontWeight: "bold",
                    opacity: titleInView ? 1 : 0,
                    transform: titleInView
                        ? "translateY(0px)"
                        : "translateY(100px)",
                    transition: "1.3s ease",
                }}
            >
                <Typography
                    color={secondary}
                    textTransform="uppercase"
                    letterSpacing={3}
                    fontWeight="bold"
                    fontSize={fontSize}
                    textAlign="center"
                >
                    {text}
                </Typography>
            </Box>
        </Box>
    );
};

export default AnimatedTitle;

import { Box, Typography } from "@mui/material";
import { useRef } from "react";
import { useTheme } from "@mui/material";
import useBoxSize from "@/hooks/useBoxSize";
import { useInView } from "framer-motion";

interface AnimatedTitleProps {
    buttonWidth: string;
    text: string;

    containerWidth?: string;
    containerHeight?: string;
    buttonHeight?: string;
    buttonCuttingRatio?: number;
    buttonGap?: number;
    buttonLimit?: number;
    primary?: string;
    secondary?: string;
    primaryBorder?: string;
    secondaryBorder?: string;
    tertiary?: string;
    thickness?: number;
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
        // sizes
        containerWidth = "100%",
        containerHeight = "30vh",
        buttonWidth,
        buttonHeight = "60%",
        // button and lines values
        buttonCuttingRatio = 0.17,
        buttonGap = 18,
        buttonLimit = 15,
        // text
        text = "title placeholder"
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
                        // filter: `drop-shadow(0px 0px 1px ${shadowColor})`,
                    }}
                >
                    <path
                        d={`
                            M ${buttonRefWidth - buttonLimit} ${buttonLimit} 
                            L ${
                                buttonRefWidth * buttonCuttingRatio
                            } ${buttonLimit}
                            L ${buttonLimit} ${
                            buttonRefWidth * buttonCuttingRatio
                        }
                            L ${buttonLimit} ${buttonRefHeight - buttonLimit}


                            L ${buttonRefWidth * (1 - buttonCuttingRatio)} ${
                            buttonRefHeight - buttonLimit
                        }
                            L ${buttonRefWidth - buttonLimit} ${
                            buttonRefHeight -
                            buttonRefWidth * buttonCuttingRatio
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
                                buttonRefWidth * buttonCuttingRatio - buttonGap
                            } ${buttonLimit}
                            L ${buttonLimit} ${
                            buttonRefWidth * buttonCuttingRatio - buttonGap
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
                            buttonRefHeight -
                            buttonRefWidth * buttonCuttingRatio +
                            buttonGap
                        }
                            L ${buttonRefWidth - buttonLimit} ${
                            buttonRefHeight - buttonLimit
                        }
                            L ${
                                buttonRefWidth * (1 - buttonCuttingRatio) +
                                buttonGap
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
                    width: buttonWidth,
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
                    variant="h4"
                    color={secondary}
                    textTransform="uppercase"
                    letterSpacing={3}
                    fontWeight="bold"
                >
                    {text}
                </Typography>
            </Box>
        </Box>
    );
};

export default AnimatedTitle;

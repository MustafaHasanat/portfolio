import { Box, Typography } from "@mui/material";
import { Fragment, ReactNode, useEffect, useRef, useState } from "react";
import { useTheme } from "@mui/material";
import useBoxSize from "@/hooks/useBoxSize";
import { motion, useInView } from "framer-motion";

interface SharedTitleProps {
    children: ReactNode;
    containerWidth?: string;
    containerHeight: string;
    buttonWidth?: string;
    buttonHeight?: string;
    buttonCuttingRatio?: number;
    buttonGap?: number;
    buttonLimit?: number;
    linesSpace?: number;
    primary?: string;
    secondary?: string;
    primaryBorder?: string;
    secondaryBorder?: string;
    tertiary?: string;
    thickness?: number;
}
const InteractiveTitle = (props: SharedTitleProps) => {
    const theme = useTheme();
    const titleRef = useRef(null);
    const titleInView = useInView(titleRef);

    const {
        // colors
        primary = theme.palette.blue.main,
        primaryBorder = "transparent",
        secondary = theme.palette.blue.dark,
        secondaryBorder = "transparent",
        tertiary = theme.palette.blue.dark,
        thickness = 3,
        // sizes
        containerWidth = "100%",
        containerHeight,
        buttonWidth = "300px",
        buttonHeight = "100px",
        // button and lines values
        buttonCuttingRatio = 0.25,
        buttonGap = 10,
        buttonLimit = 0,
        linesSpace = 10,
    } = props;

    const {
        ref: buttonRef,
        width: buttonRefWidth,
        height: buttonRefHeight,
    } = useBoxSize();

    const {
        ref: linesRef,
        width: linesWidth,
        height: linesHeight,
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
                id="svg-lines-container"
                ref={linesRef}
                sx={{
                    position: "absolute",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: "100%",
                    zIndex: 5,
                }}
            >
                {["rotateX(0deg) rotateY(0deg)", "rotateX(180deg) rotateY(180deg)"].map(
                    (svgShape, index) => {
                        return (
                            <Fragment key={`lines shape number: ${index}`}>
                                <svg
                                    width="100%"
                                    height="100%"
                                    style={{ transform: svgShape }}
                                >
                                    <path
                                        d={`
                            M 0 ${linesHeight / 2}
                            L ${
                                linesWidth / 2 -
                                buttonRefWidth / 2 +
                                buttonLimit -
                                linesSpace
                            } ${linesHeight / 2}
                            L ${
                                linesWidth / 2 -
                                buttonRefWidth / 2 +
                                buttonLimit -
                                linesSpace
                            } ${
                                            linesHeight / 2 +
                                            buttonRefHeight / 2 -
                                            buttonLimit +
                                            linesSpace
                                        }
                            L ${linesWidth / 2 - buttonRefWidth / 4}
                            ${
                                linesHeight / 2 +
                                buttonRefHeight / 2 -
                                buttonLimit +
                                linesSpace
                            }
                            L ${linesWidth / 2 - buttonRefWidth / 4}
                            ${linesHeight / 2}
                        `}
                                        stroke={tertiary}
                                        strokeWidth={thickness}
                                        fill="none"
                                    />
                                </svg>
                            </Fragment>
                        );
                    }
                )}
            </Box>

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
                        transform: titleInView ? "translateX(0px)" : "translateX(-100px)",
                        transition: "1.3s ease",
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
                        transform: titleInView ? "translateX(0px)" : "translateX(100px)",
                        transition: "1.3s ease",
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
                    transform: titleInView ? "translateY(0px)" : "translateY(100px)",
                    transition: "1.3s ease",
                }}
            >
                {props.children}
            </Box>
        </Box>
    );
};

export default InteractiveTitle;

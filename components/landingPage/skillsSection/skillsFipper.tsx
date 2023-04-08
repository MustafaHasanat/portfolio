import GlassBox from "@/components/shared/glassBox";
import { Typography, useTheme, Box, Stack } from "@mui/material";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import SkillsRoller from "./skillsRoller";

interface SkillsFipperProps {
    index: number;
    category: {
        title: string;
        skills: {
            name: string;
            src: string;
        }[];
    };
}

const SkillsFipper = ({ index, category }: SkillsFipperProps) => {
    const { title, skills } = category;
    const theme = useTheme();
    const flippingAnimation = useAnimation();
    const [hovered, setHovered] = useState(false);

    const boxWidth = 25;
    const boxHeight = 15;

    const boxRef = useRef(null);
    const boxInView = useInView(boxRef);

    useEffect(() => {
        if (hovered) {
            flippingAnimation.start("visible");
        } else {
            flippingAnimation.start("hidden");
        }
    }, [flippingAnimation, hovered]);

    return (
        <Box
            ref={boxRef}
            sx={{
                width: `${boxWidth}vw`,
                height: `${boxHeight}vh`,
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                opacity: boxInView ? 1 : 0,
                transform: boxInView ? "unset" : "translateY(80px)",
                transition: "1s ease",
            }}
            onMouseEnter={() => {
                setHovered(true);
            }}
            onMouseLeave={() => {
                setHovered(false);
            }}
        >
            <GlassBox
                id={`skill-glass-box-${index}`}
                extraSX={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                }}
            >
                <Stack
                    component={motion.div}
                    animate={flippingAnimation}
                    initial="hidden"
                    variants={{
                        hidden: { y: 0 },
                        visible: { y: "-15vh" },
                    }}
                    transition={{
                        type: "tween",
                        ease: "easeInOut",
                    }}
                    sx={{
                        justifyContent: "center",
                        alignItems: "center",
                        position: "absoulte",
                        height: `${2 * boxHeight}vh`,
                    }}
                >
                    <Box
                        sx={{
                            height: `${boxHeight}vh`,
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Typography fontSize="2vw" textTransform="capitalize">
                            {title}
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            height: boxHeight,
                            width: "100%",
                            position: "relative",
                        }}
                    >
                        <SkillsRoller
                            skills={skills}
                            hoverIsActive={hovered}
                            boxWidth={boxWidth}
                            boxHeight={boxHeight}
                        />
                    </Box>
                </Stack>
            </GlassBox>
        </Box>
    );
};

export default SkillsFipper;

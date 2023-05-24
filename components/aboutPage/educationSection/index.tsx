import GlassBox from "@/components/shared/glassBox";
import AnimatedTitle from "@/components/shared/animatedTitle";
import { Box, Divider, Stack, useTheme } from "@mui/material";
import { MutableRefObject, useRef } from "react";
import UpperSection from "./upperSection";
import LowerSection from "./lowerSection";
import { motion, useInView } from "framer-motion";
import { Certificate } from "@/types/certificate";

interface EducationSectionProps {
    inViewRef: MutableRefObject<null>;
    certificates: Certificate[];
}

const EducationSection = ({
    inViewRef,
    certificates,
}: EducationSectionProps) => {
    const theme = useTheme();
    const cardRef = useRef(null);
    const cardInView = useInView(cardRef);

    return (
        <Stack
            id="about-education"
            px={{ xs: 5, md: 12 }}
            py={10}
            position="relative"
            alignItems="center"
            bgcolor={theme.palette.text.primary}
        >
            <Box
                ref={inViewRef}
                sx={{
                    position: "absolute",
                    top: "50%",
                    width: " 100%",
                }}
            />

            <Box
                sx={{
                    width: { xs: "100%", md: "80%", lg: "40%", xl: "30%" },
                    height: { xs: "11rem", lg: "13rem" },
                }}
            >
                <AnimatedTitle
                    text="education"
                    tertiary={theme.palette.secondary.main}
                    shadowColor={theme.palette.primary.main}
                    fontSize={{
                        xs: "0.8rem",
                        sm: "1rem",
                        md: "1.2rem",
                        lg: "1.7rem",
                    }}
                />
            </Box>

            <Stack
                width="100%"
                justifyContent="center"
                gap={{ xs: 5, md: 15 }}
                my={{ xs: 0, md: 5 }}
                flexWrap={{ xs: "nowrap", md: "wrap" }}
                direction={{ xs: "column", md: "row" }}
            >
                {certificates.map((cert, index) => {
                    return (
                        <Stack
                            key={`certificate number: ${index}`}
                            component={motion.div}
                            ref={cardRef}
                            initial={{ scale: 0.9 }}
                            animate={{
                                scale: cardInView ? 1 : 0.9,
                                transition: {
                                    type: "spring",
                                },
                            }}
                            sx={{
                                width: { xs: "100%", lg: "25vw" },
                                height: { xs: "auto", lg: "80vh" },
                                position: "relative",
                                padding: 3,
                                justifyContent: "space-evenly",
                                alignItems: "center",
                                borderRadius: 3,
                                bgcolor: theme.palette.secondary.main,
                            }}
                        >
                            <UpperSection cert={cert} />

                            <Divider
                                sx={{
                                    bgcolor: theme.palette.text.primary,
                                    width: "100%",
                                    marginY: 2,
                                }}
                            />

                            <LowerSection cert={cert} />
                        </Stack>
                    );
                })}
            </Stack>
        </Stack>
    );
};

export default EducationSection;

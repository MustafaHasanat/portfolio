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
        <Stack id="about-education" px={12} pt={5} position="relative">
            <Box
                ref={inViewRef}
                sx={{
                    position: "absolute",
                    top: "50%",
                    width: " 100%",
                }}
            />

            <AnimatedTitle buttonWidth="40%" text="education" />

            <Stack
                spacing={10}
                justifyContent="center"
                gap={15}
                my={10}
                flexWrap="wrap"
                direction="row"
            >
                {certificates.map((cert, index) => {
                    return (
                        <Box
                            key={`certificate number: ${index}`}
                            component={motion.div}
                            ref={cardRef}
                            initial={{ scale: 0.7 }}
                            animate={{
                                scale: cardInView ? 1 : 0.7,
                                transition: {
                                    type: "spring",
                                },
                            }}
                        >
                            <GlassBox
                                id={`certificate box number: ${index}`}
                                extraSX={{
                                    width: "25vw",
                                    height: "80vh",
                                    position: "relative",
                                    padding: 3,
                                    justifyContent: "space-evenly",
                                    alignItems: "center",
                                    borderRadius: 3,
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
                            </GlassBox>
                        </Box>
                    );
                })}
            </Stack>
        </Stack>
    );
};

export default EducationSection;

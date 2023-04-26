import GlassBox from "@/components/shared/glassBox";
import AnimatedTitle from "@/components/shared/animatedTitle";
import EducationSectionConstants from "@/utils/constants/aboutPage/educationSection";
import { Box, Divider, Stack, Typography, useTheme } from "@mui/material";
import { Fragment, MutableRefObject } from "react";
import UpperSection from "./upperSection";
import LowerSection from "./lowerSection";

interface EducationSectionProps {
    inViewRef: MutableRefObject<null>;
}

const EducationSection = ({ inViewRef }: EducationSectionProps) => {
    const theme = useTheme();

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
                {EducationSectionConstants.certificates.map((cert, index) => {
                    return (
                        <Fragment key={`certificate number: ${index}`}>
                            <GlassBox
                                id={`certificate box number: ${index}`}
                                extraSX={{
                                    width: "25vw",
                                    height: "80vh",
                                    position: "relative",
                                    padding: 3,
                                    justifyContent: "space-evenly",
                                    alignItems: "center",
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
                        </Fragment>
                    );
                })}
            </Stack>
        </Stack>
    );
};

export default EducationSection;

import InteractiveTitle from "@/components/shared/title";
import EducationSectionConstants from "@/utils/constants/aboutPage/educationSection";
import { Avatar, Box, Stack, Typography, useTheme } from "@mui/material";
import { Fragment, MutableRefObject } from "react";

interface EducationSectionProps {
    inViewRef: MutableRefObject<null>;
}

const EducationSection = ({ inViewRef }: EducationSectionProps) => {
    const theme = useTheme();
    
    return (
        <Stack id="about-education" height="105vh" px={12} position="relative">
            <Box
                ref={inViewRef}
                sx={{
                    position: "absolute",
                    top: "50%",
                    width: " 100%",
                }}
            />

            <InteractiveTitle
                primary={theme.palette.blue.main}
                secondary={theme.palette.base.dark}
                tertiary={theme.palette.gold.main}
                containerHeight="30vh"
                buttonWidth="40%"
                buttonHeight="60%"
                linesSpace={15}
                buttonCuttingRatio={0.17}
                buttonGap={18}
            >
                <Typography
                    fontSize="2.7vw"
                    color={theme.palette.base.dark}
                    textTransform="uppercase"
                    letterSpacing={3}
                    fontWeight="bold"
                >
                    Education
                </Typography>
            </InteractiveTitle>

            <Stack direction="row" justifyContent="space-evenly">
                {EducationSectionConstants.certificates.map((cert, index) => {
                    return (
                        <Fragment key={`certificate number: ${index}`}>
                            <Box
                                sx={{
                                    width: "35vw",
                                    height: "35vh",
                                    position: "relative",
                                }}
                            >
                                <Avatar
                                    variant="square"
                                    src={cert.logoSrc}
                                    sx={{
                                        padding: 10,
                                        position: "absolute",
                                        top: "50%",
                                        left: "50%",
                                        zIndex: 2,
                                        ...cert.extraSX,
                                    }}
                                />
                            </Box>
                        </Fragment>
                    );
                })}
            </Stack>
        </Stack>
    );
};

export default EducationSection;

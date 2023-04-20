import GlassBox from "@/components/shared/glassBox";
import InteractiveTitle from "@/components/shared/title";
import EducationSectionConstants from "@/utils/constants/aboutPage/educationSection";
import {
    Box,
    Divider,
    Stack,
    Typography,
    useTheme,
} from "@mui/material";
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

            <Stack
                spacing={10}
                justifyContent="center"
                my={5}
                flexWrap="wrap"
                direction="row"
            >
                {EducationSectionConstants.certificates.map((cert, index) => {
                    return (
                        <Fragment key={`certificate number: ${index}`}>
                            <GlassBox
                                id={`certificate box number: ${index}`}
                                extraSX={{
                                    width: "35vw",
                                    position: "relative",
                                    padding: 3,
                                    alignItems: "center",
                                }}
                            >
                                <UpperSection cert={cert} />

                                <Divider
                                    sx={{
                                        bgcolor: theme.palette.base.light,
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

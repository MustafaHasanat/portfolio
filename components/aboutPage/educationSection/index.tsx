import GlassBox from "@/components/shared/glassBox";
import InteractiveTitle from "@/components/shared/title";
import EducationSectionConstants from "@/utils/constants/aboutPage/educationSection";
import {
    Avatar,
    Box,
    Chip,
    Divider,
    Stack,
    Typography,
    useTheme,
} from "@mui/material";
import { Fragment, MutableRefObject } from "react";

interface EducationSectionProps {
    inViewRef: MutableRefObject<null>;
}

const EducationSection = ({ inViewRef }: EducationSectionProps) => {
    const theme = useTheme();

    const textItem = (key: string, value: string) => {
        return (
            <Stack direction="row" spacing={1}>
                <Typography color={theme.palette.base.light} fontWeight="bold">
                    {key}
                </Typography>
                <Typography
                    color={theme.palette.base.light}
                    sx={{ opacity: 0.8 }}
                >
                    {value}
                </Typography>
            </Stack>
        );
    };

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
                                <Stack
                                    direction="row"
                                    height="25vh"
                                    justifyContent="start"
                                    alignItems="center"
                                >
                                    <Avatar
                                        variant="square"
                                        src={cert.logoSrc}
                                        sx={{
                                            width: "25%",
                                            height: "fit-content",
                                        }}
                                    />

                                    <Stack
                                        ml={3}
                                        justifyContent="space-between"
                                        sx={{
                                            width: "fit-content",
                                            height: "70%",
                                        }}
                                    >
                                        {textItem("Facility:", cert.facility)}
                                        {textItem("Degree:", cert.degree)}
                                        {textItem("Duration:", cert.date)}
                                    </Stack>
                                </Stack>

                                <Divider
                                    sx={{
                                        bgcolor: theme.palette.base.light,
                                        width: "100%",
                                        marginY: 2,
                                    }}
                                />

                                <Stack mt={3} width="100%" alignItems="center">
                                    <Typography
                                        fontWeight="bold"
                                        color={theme.palette.base.light}
                                        textTransform="uppercase"
                                        fontSize="1.5vw"
                                    >
                                        skills
                                    </Typography>

                                    <Stack
                                        direction="row"
                                        flexWrap="wrap"
                                        justifyContent="center"
                                        gap={2}
                                        width="100%"
                                        py={5}
                                    >
                                        {cert.skills.map((skill, index) => {
                                            return (
                                                <Fragment
                                                    key={`certificate number: ${index}`}
                                                >
                                                    <Chip
                                                        label={skill}
                                                        sx={{
                                                            fontSize: "1.2vw",
                                                            color: theme.palette
                                                                .base.light,
                                                            bgcolor:
                                                                theme.palette
                                                                    .blue.main,
                                                        }}
                                                    />
                                                </Fragment>
                                            );
                                        })}
                                    </Stack>
                                </Stack>
                            </GlassBox>
                        </Fragment>
                    );
                })}
            </Stack>
        </Stack>
    );
};

export default EducationSection;

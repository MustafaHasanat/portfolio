import InteractiveTitle from "@/components/shared/title";
import SkillsSectionConstants from "@/utils/constants/landingPage/skillsSection";
import { Box, useTheme } from "@mui/material";
import { Stack, Typography } from "@mui/material";
import { Fragment, MutableRefObject } from "react";
import SkillsFipper from "./skillsFipper";

interface SkillsSectionProps {
    inViewRef: MutableRefObject<null>;
}

const SkillsSection = ({ inViewRef }: SkillsSectionProps) => {
    const theme = useTheme();

    return (
        <Stack id="home-skills" position="relative">
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
                    My Skills
                </Typography>
            </InteractiveTitle>

            <Stack
                direction="row"
                justifyContent="center"
                flexWrap="wrap"
                px={10}
                py={5}
                gap={5}
            >
                {SkillsSectionConstants.categories.map((category, index) => {
                    return (
                        <Fragment key={`skill category number: ${index}`}>
                            <SkillsFipper index={index} category={category} />
                        </Fragment>
                    );
                })}
            </Stack>
        </Stack>
    );
};

export default SkillsSection;

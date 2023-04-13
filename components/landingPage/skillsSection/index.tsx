import InteractiveTitle from "@/components/shared/title";
import SkillsSectionConstants from "@/utils/constants/landingPage/skillsSection";
import { useTheme } from "@mui/material";
import { Stack, Typography } from "@mui/material";
import { Fragment } from "react";
import SkillsFipper from "./skillsFipper";

const SkillsSection = () => {
    const theme = useTheme();

    return (
        <Stack>
            <InteractiveTitle
                primary={theme.palette.blue.dark}
                secondary={theme.palette.base.dark}
                tertiary={theme.palette.base.dark}
                containerHeight="30vh"
                buttonWidth="40%"
                buttonHeight="50%"
                linesSpace={15}
                buttonCuttingRatio={0.13}
            >
                <Typography
                    fontSize="2.7vw"
                    color={theme.palette.base.light}
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

import InteractiveTitle from "@/components/shared/title";
import SkillsSectionConstants from "@/utils/constants/landingPage/skillsSection";
import { Box, useTheme } from "@mui/material";
import { Stack, Typography } from "@mui/material";
import { Fragment, MutableRefObject, useState } from "react";
import SkillSet from "./skillSet";

interface SkillsSectionProps {
    inViewRef: MutableRefObject<null>;
}

const SkillsSection = ({ inViewRef }: SkillsSectionProps) => {
    const theme = useTheme();
    const [drawerOpened, setDrawerOpened] = useState(0);

    const toggleDrawer = (drawer: number, state: string) => {
        if (drawer !== drawerOpened) {
            if (state === "closed") {
                setDrawerOpened(drawer);
            } else {
                setDrawerOpened(0);
            }
        } else if (state === "closed") {
            setDrawerOpened(drawer);
        } else if (state === "opened") {
            setDrawerOpened(0);
        }
    };

    return (
        <Stack id="home-skills" height="130vh">
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
                            <SkillSet
                                index={index}
                                category={category}
                                toggleDrawer={toggleDrawer}
                                drawerOpened={drawerOpened}
                            />
                        </Fragment>
                    );
                })}
            </Stack>
        </Stack>
    );
};

export default SkillsSection;

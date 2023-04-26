import AnimatedTitle from "@/components/shared/animatedTitle";
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
        <Stack id="home-skills" position="relative">
            <Box
                ref={inViewRef}
                sx={{
                    position: "absolute",
                    top: "50%",
                    width: " 100%",
                }}
            />

            <AnimatedTitle buttonWidth="40%" text="My Skills" />

            <Stack
                direction="row"
                justifyContent="center"
                flexWrap="wrap"
                px={10}
                my={10}
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

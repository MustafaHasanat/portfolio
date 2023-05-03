import AnimatedTitle from "@/components/shared/animatedTitle";
import SkillsSectionConstants from "@/utils/constants/landingPage/skillsSection";
import { Box, useTheme } from "@mui/material";
import { Stack, Typography } from "@mui/material";
import { Fragment, MutableRefObject, useState } from "react";
import SkillSet from "./skillSet";
import useMultiControl from "@/hooks/useMultiControl";

interface SkillsSectionProps {
    inViewRef: MutableRefObject<null>;
}

const SkillsSection = ({ inViewRef }: SkillsSectionProps) => {
    const theme = useTheme();

    const { updateState: toggleDrawer, isActive: isDrawerActive } =
        useMultiControl();

    return (
        <Stack
            id="home-skills"
            position="relative"
            bgcolor={theme.palette.secondary.main}
            py={10}
        >
            <Box
                ref={inViewRef}
                sx={{
                    position: "absolute",
                    top: "50%",
                    width: " 100%",
                }}
            />

            <AnimatedTitle
                buttonWidth="40%"
                text="My Skills"
                shadowColor={theme.palette.primary.main}
            />

            <Stack
                direction="row"
                justifyContent="center"
                flexWrap="wrap"
                px={15}
                my={10}
                gap={10}
            >
                {SkillsSectionConstants.categories.map((category, index) => {
                    return (
                        <Fragment key={`skill category number: ${index}`}>
                            <SkillSet
                                index={index}
                                category={category}
                                toggleDrawer={toggleDrawer}
                                isDrawerActive={isDrawerActive}
                            />
                        </Fragment>
                    );
                })}
            </Stack>
        </Stack>
    );
};

export default SkillsSection;

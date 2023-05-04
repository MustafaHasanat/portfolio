/* eslint-disable react-hooks/exhaustive-deps */
import AnimatedTitle from "@/components/shared/animatedTitle";
import { Box, useTheme } from "@mui/material";
import { Stack } from "@mui/material";
import { Fragment, MutableRefObject, useEffect } from "react";
import SkillSetBox from "./skillSetBox";
import useMultiControl from "@/hooks/useMultiControl";
import { SkillSet } from "@/types/skillSet";
import sortByOrder from "@/utils/helpers/sortByOrder";

interface SkillsSectionProps {
    inViewRef: MutableRefObject<null>;
    skillSets: SkillSet[];
}

const SkillsSection = ({ inViewRef, skillSets }: SkillsSectionProps) => {
    const theme = useTheme();

    const { updateState: toggleDrawer, isActive: isDrawerActive } =
        useMultiControl();

    useEffect(() => {
        sortByOrder(skillSets);
    }, []);

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
                {skillSets.map((skillSet, index) => {
                    return (
                        <Fragment key={`skill category number: ${index}`}>
                            <SkillSetBox
                                index={index}
                                skillSet={skillSet}
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

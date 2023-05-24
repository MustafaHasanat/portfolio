import AnimatedTitle from "@/components/shared/animatedTitle";
import { Box, useTheme } from "@mui/material";
import { Stack } from "@mui/material";
import { MutableRefObject, useEffect, useState } from "react";
import { SkillSet } from "@/types/skillSet";
import sortByOrder from "@/utils/helpers/sortByOrder";
import SkillsBox from "./skillsBox";
import ControlBox from "./controlBox";

interface SkillsSectionProps {
    inViewRef: MutableRefObject<null>;
    skillSets: SkillSet[];
}

const SkillsSection = ({ inViewRef, skillSets }: SkillsSectionProps) => {
    const theme = useTheme();
    const [currentSkillSet, setCurrentSkillSet] = useState(skillSets[0]);
    const [hoveredSkillSet, setHoveredSkillSet] = useState<SkillSet | null>(
        null
    );

    useEffect(() => {
        sortByOrder(skillSets);
    }, [skillSets]);

    return (
        <Stack
            id="home-skills"
            position="relative"
            bgcolor={theme.palette.secondary.main}
            alignItems="center"
            py={{ xs: 15, md: 10 }}
        >
            <Box
                ref={inViewRef}
                sx={{
                    position: "absolute",
                    top: "20%",
                    width: " 100%",
                }}
            />

            <Box
                sx={{
                    width: { xs: "70%", lg: "40%" },
                    height: { xs: "11rem", lg: "13rem" },
                }}
            >
                <AnimatedTitle
                    text="My Skills"
                    shadowColor={theme.palette.primary.main}
                />
            </Box>

            <Stack
                direction={{ xs: "column-reverse", md: "row" }}
                alignItems="start"
                justifyContent={{ xs: "start", md: "center" }}
                px={{ xs: 10, md: 15 }}
                my={3}
                spacing={5}
                height="auto"
                width="100%"
            >
                <SkillsBox
                    hoveredSkillSet={hoveredSkillSet}
                    currentSkillSet={currentSkillSet}
                />
                <ControlBox
                    skillSets={skillSets}
                    setHoveredSkillSet={setHoveredSkillSet}
                    currentSkillSet={currentSkillSet}
                    setCurrentSkillSet={setCurrentSkillSet}
                />
            </Stack>
        </Stack>
    );
};

export default SkillsSection;

import { Stack } from "@mui/material";
import SkillsDrawer from "./skillsDrawer";
import SkillsList from "./skillsList";
import { SkillSet } from "@/types/skillSet";

interface SkillsDrawerBoxProps {
    index: number;
    skillSet: SkillSet;
    toggleDrawer: (currentIndex: number) => void;
    isDrawerActive: (index: number) => boolean;
}

const SkillSetBox = ({
    index,
    skillSet,
    toggleDrawer,
    isDrawerActive,
}: SkillsDrawerBoxProps) => {
    return (
        <Stack spacing={2} position="relative">
            <SkillsDrawer
                index={index}
                skillSet={skillSet}
                isDrawerActive={isDrawerActive(index)}
                toggleDrawer={toggleDrawer}
            />
            <SkillsList
                index={index}
                skillSet={skillSet}
                isDrawerActive={isDrawerActive(index)}
            />
        </Stack>
    );
};

export default SkillSetBox;

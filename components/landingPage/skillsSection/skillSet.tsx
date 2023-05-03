import { Stack } from "@mui/material";
import SkillsDrawer from "./skillsDrawer";
import SkillsList from "./skillsList";

interface SkillsDrawerProps {
    index: number;
    category: {
        title: string;
        skills: {
            name: string;
            src: string;
        }[];
    };
    toggleDrawer: (currentIndex: number) => void;
    isDrawerActive: (index: number) => boolean;
}

const SkillSet = ({
    index,
    category,
    toggleDrawer,
    isDrawerActive,
}: SkillsDrawerProps) => {
    return (
        <Stack spacing={2} position="relative">
            <SkillsDrawer
                index={index}
                category={category}
                isDrawerActive={isDrawerActive(index)}
                toggleDrawer={toggleDrawer}
            />
            <SkillsList
                index={index}
                category={category}
                isDrawerActive={isDrawerActive(index)}
            />
        </Stack>
    );
};

export default SkillSet;

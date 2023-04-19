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
    toggleDrawer: (drawer: number, state: string) => void;
    drawerOpened: number;
}

const SkillSet = ({
    index,
    category,
    toggleDrawer,
    drawerOpened,
}: SkillsDrawerProps) => {
    return (
        <Stack spacing={2} position="relative">
            <SkillsDrawer
                index={index}
                category={category}
                isOpened={drawerOpened === index + 1}
                toggleDrawer={toggleDrawer}
            />
            <SkillsList
                index={index}
                category={category}
                isOpened={drawerOpened === index + 1}
            />
        </Stack>
    );
};

export default SkillSet;

import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { Dispatch, Fragment, SetStateAction, useState } from "react";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import { SkillSet } from "@/types/skillSet";
import DesktopControlBox from "./desktopControlBox";
import MobileControlBox from "./mobileControlBox";
import SkillSetDialog from "./skillsetDialog";

interface ControlBoxProps {
    setHoveredSkillSet: Dispatch<SetStateAction<SkillSet | null>>;
    skillSets: SkillSet[];
    currentSkillSet: SkillSet;
    setCurrentSkillSet: Dispatch<SetStateAction<SkillSet>>;
}

const ControlBox = ({
    setHoveredSkillSet,
    skillSets,
    currentSkillSet,
    setCurrentSkillSet,
}: ControlBoxProps) => {
    const theme = useTheme();
    const mdScreen = useMediaQuery("(min-width:768px)");
    const [dialogIsOpen, setDialogIsOpen] = useState(false);

    return (
        <Stack
            sx={{
                height: { xs: "auto", md: "100%" },
                width: { xs: "100%", md: "15vw" },
            }}
        >
            {mdScreen ? (
                <DesktopControlBox
                    setHoveredSkillSet={setHoveredSkillSet}
                    skillSets={skillSets}
                    currentSkillSet={currentSkillSet}
                    setCurrentSkillSet={setCurrentSkillSet}
                />
            ) : (
                <Stack>
                    <MobileControlBox
                        currentSkillSet={currentSkillSet}
                        dialogIsOpen={dialogIsOpen}
                        setDialogIsOpen={setDialogIsOpen}
                    />

                    <SkillSetDialog
                        setDialogIsOpen={setDialogIsOpen}
                        dialogIsOpen={dialogIsOpen}
                        setCurrentSkillSet={setCurrentSkillSet}
                        currentSkillSet={currentSkillSet}
                        skillSets={skillSets}
                    />
                </Stack>
            )}
        </Stack>
    );
};

export default ControlBox;

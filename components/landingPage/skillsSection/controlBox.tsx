import { Stack, useMediaQuery } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import { SkillSet } from "@/types/skillSet";
import DesktopControlBox from "./desktopControlBox";
import MobileControlBox from "./mobileControlBox";
import SkillSetDialog from "./skillsetDialog";
import { mqHook } from "@/styles/mq";

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
    const mdScreen = useMediaQuery(mqHook.MD);
    const [dialogIsOpen, setDialogIsOpen] = useState(false);

    return (
        <Stack
            sx={{
                height: "auto",
                width: { xs: "100%", md: "100%", lg: "80%" },
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

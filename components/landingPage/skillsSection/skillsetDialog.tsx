import theme from "@/styles/theme";
import { SkillSet } from "@/types/skillSet";
import {
    Stack,
    Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";

interface SkillSetDialogProps {
    skillSets: SkillSet[];
    dialogIsOpen: boolean;
    currentSkillSet: SkillSet;
    setDialogIsOpen: Dispatch<SetStateAction<boolean>>;
    setCurrentSkillSet: Dispatch<SetStateAction<SkillSet>>;
}

const SkillSetDialog = ({
    skillSets,
    dialogIsOpen,
    setDialogIsOpen,
    setCurrentSkillSet,
    currentSkillSet,
}: SkillSetDialogProps) => {
    return (
        <Stack
            component={motion.div}
            initial={{ height: "70vh" }}
            animate={{ height: dialogIsOpen ? "50vh" : 0 }}
            sx={{
                overflow: "hidden",
                justifyContent: "space-evenly",
                alignItems: "center",
                mt: 2,
            }}
        >
            {skillSets.map((skillSet, index) => (
                <Stack
                    key={`skill set controlling item number${index}`}
                    onClick={() => {
                        setDialogIsOpen(false);
                        setCurrentSkillSet(skillSet);
                    }}
                    sx={{
                        width: "100%",
                        height: "2.5rem",
                        borderRadius: 2,
                        bgcolor:
                            currentSkillSet.title === skillSet.title
                                ? theme.palette.primary.main
                                : theme.palette.text.primary,
                        justifyContent: "center",
                        alignItems: "center",
                        mx: 2,
                    }}
                >
                    <Typography textAlign="center" fontSize="1.2rem">
                        {skillSet.title}
                    </Typography>
                </Stack>
            ))}
        </Stack>
    );
};

export default SkillSetDialog;

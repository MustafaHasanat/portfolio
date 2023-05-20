import { Box, Stack, Typography, useTheme } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { SkillSet } from "@/types/skillSet";
import { motion } from "framer-motion";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

interface MobileControlBoxProps {
    currentSkillSet: SkillSet;
    dialogIsOpen: boolean;
    setDialogIsOpen: Dispatch<SetStateAction<boolean>>;
}

const MobileControlBox = ({
    currentSkillSet,
    setDialogIsOpen,
    dialogIsOpen,
}: MobileControlBoxProps) => {
    const theme = useTheme();

    return (
        <Stack
            component={motion.div}
            direction="row"
            onClick={() => {
                setDialogIsOpen((prev) => !prev);
            }}
            sx={{
                width: "100%",
                height: "4rem",
                justifyContent: "space-between",
                alignItems: "center",
                bgcolor: theme.palette.text.primary,
                borderRadius: 2,
                px: 4,
            }}
        >
            <Typography textTransform="capitalize" fontSize={{ xs: "1.3rem" }}>
                {currentSkillSet.title}
            </Typography>

            <Box
                component={motion.div}
                initial={{ rotate: 0 }}
                animate={{ rotate: dialogIsOpen ? 180 : 0 }}
                sx={{
                    width: "3rem",
                    height: "3rem",
                }}
            >
                <ArrowDropDownIcon
                    sx={{
                        width: "100%",
                        height: "100%",
                    }}
                />
            </Box>
        </Stack>
    );
};

export default MobileControlBox;

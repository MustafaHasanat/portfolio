import { Typography, useTheme, Box, Stack } from "@mui/material";
import { motion } from "framer-motion";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { SkillSet } from "@/types/skillSet";

interface SkillsDrawerProps {
    index: number;
    skillSet: SkillSet;
    isDrawerActive: boolean;
    toggleDrawer: (drawer: number) => void;
}

const SkillsDrawer = ({
    index,
    skillSet,
    isDrawerActive,
    toggleDrawer,
}: SkillsDrawerProps) => {
    const { title } = skillSet;
    const theme = useTheme();

    return (
        <Stack
            sx={{
                background: theme.palette.text.primary,
                position: "relative",
                width: "18vw",
                height: "10vh",
                overflow: "hidden",
                borderRadius: 3,
                marginBottom: 10,
                paddingLeft: 3,
            }}
        >
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{
                    width: "100%",
                    height: "100%",
                }}
            >
                <Typography
                    textTransform="capitalize"
                    fontSize="1.5vw"
                    fontWeight="bold"
                    color={theme.palette.secondary.main}
                >
                    {title}
                </Typography>

                <Box
                    sx={{
                        bgcolor: theme.palette.primary.main,
                        height: "100%",
                        width: "auto",
                    }}
                >
                    <Box
                        component={motion.div}
                        animate={{
                            transform: isDrawerActive
                                ? "rotate(-180deg)"
                                : "rotate(0deg)",
                        }}
                        sx={{
                            height: "100%",
                            width: "100%",
                            cursor: "pointer",
                        }}
                        onClick={() => {
                            toggleDrawer(index);
                        }}
                    >
                        <ArrowDropDownIcon
                            sx={{
                                color: theme.palette.secondary.main,
                                height: "100%",
                                width: "100%",
                            }}
                        />
                    </Box>
                </Box>
            </Stack>
        </Stack>
    );
};

export default SkillsDrawer;

import GlassBox from "@/components/shared/glassBox";
import { Typography, useTheme, Box, Stack } from "@mui/material";
import { motion } from "framer-motion";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

interface SkillsDrawerProps {
    index: number;
    category: {
        title: string;
    };
    isOpened: boolean;
    toggleDrawer: (drawer: number, state: string) => void;
}

const SkillsDrawer = ({
    index,
    category,
    isOpened,
    toggleDrawer,
}: SkillsDrawerProps) => {
    const { title } = category;
    const theme = useTheme();

    return (
        <GlassBox
            id={`skill-cat-glass-box-${index}`}
            extraSX={{
                position: "relative",
                width: "25vw",
                height: "10vh",
                overflow: "hidden",
                borderRadius: 3,
                marginBottom: 10,
            }}
        >
            <Stack
                direction="row"
                justifyContent="space-around"
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
                    color={theme.palette.text.primary}
                >
                    {title}
                </Typography>

                <Box
                    component={motion.div}
                    animate={{
                        transform: isOpened
                            ? "rotate(-180deg)"
                            : "rotate(0deg)",
                    }}
                    sx={{
                        height: "80%",
                        width: "auto",
                        cursor: "pointer",
                    }}
                    onClick={() => {
                        toggleDrawer(index + 1, isOpened ? "opened" : "closed");
                        console.log(isOpened);
                    }}
                >
                    <ArrowDropDownIcon
                        sx={{
                            color: theme.palette.primary.main,
                            height: "100%",
                            width: "100%",
                        }}
                    />
                </Box>
            </Stack>
        </GlassBox>
    );
};

export default SkillsDrawer;

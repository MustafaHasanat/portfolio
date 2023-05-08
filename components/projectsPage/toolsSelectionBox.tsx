import { Box, Stack, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { motion } from "framer-motion";
import { AttributeListsProps } from "./cardsContainer";

interface ToolsSelectionBoxProps {
    attributeLists: AttributeListsProps;
}

const ToolsSelectionBox = ({ attributeLists }: ToolsSelectionBoxProps) => {
    const theme = useTheme();
    const [selectListIsOpened, setSelectListIsOpened] = useState(false);

    const {
        tools: { toolsList, toolsSelect, setToolsSelect },
    } = attributeLists;

    const customMenuItem = ({ value, key }: { key: string; value: string }) => {
        return (
            <Box
                component={motion.div}
                initial={{ height: "0vh" }}
                animate={{ height: selectListIsOpened ? "6vh" : "0vh" }}
                whileHover={{
                    color: theme.palette.primary.main,
                    opacity: 0.8,
                }}
                key={key}
                sx={{
                    color: theme.palette.secondary.main,
                    bgcolor: theme.palette.text.primary,
                    width: "100%",
                    cursor: "pointer",
                    borderRadius: 1,
                    display: "flex",
                    alignItems: "center",
                    overflow: "hidden",
                }}
                onClick={() => {
                    // setToolsSelect(value);
                    setSelectListIsOpened(false);
                }}
            >
                <Typography p={1} width="100%" textAlign="center">
                    {value}
                </Typography>
            </Box>
        );
    };

    return (
        <Stack
            direction="row"
            spacing={1}
            px={2}
            width="100%"
            justifyContent="flex-"
            alignItems="center"
        >
            <Typography width="40%">Tools</Typography>

            <Stack
                sx={{
                    position: "relative",
                    width: "50%",
                    height: "100%",
                    bgcolor: theme.palette.text.primary,
                    borderRadius: 1,
                }}
            >
                <Stack direction="row" px={1} alignItems="center">
                    <Typography
                        p={1}
                        color={theme.palette.secondary.main}
                        width="70%"
                        textAlign="center"
                    >
                        toolsSelect
                    </Typography>

                    <Box
                        component="div"
                        sx={{
                            width: "30%",
                            height: "auto",
                            cursor: "pointer",
                            transform: selectListIsOpened
                                ? "rotate(180deg)"
                                : "rotate(0deg)",
                            transition: "0.3s ease",
                        }}
                        onClick={() => {
                            setSelectListIsOpened((prev) => !prev);
                        }}
                    >
                        <ArrowDropDownIcon
                            sx={{
                                width: "100%",
                                height: "100%",
                                color: theme.palette.secondary.main,
                            }}
                        />
                    </Box>
                </Stack>

                <Stack
                    spacing={1}
                    sx={{
                        position: "absolute",
                        top: "calc(100% + 10px)",
                        width: "100%",
                        zIndex: 10,
                    }}
                >
                    {/* {toolsList.map((tool, index) => {
                        return customMenuItem({
                            key: `year ${tool} number ${index}`,
                            value: tool,
                        });
                    })} */}
                </Stack>
            </Stack>
        </Stack>
    );
};

export default ToolsSelectionBox;

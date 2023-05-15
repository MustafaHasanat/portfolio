import {
    Checkbox,
    Chip,
    FormControlLabel,
    Stack,
    Typography,
    useTheme,
} from "@mui/material";
import { Fragment } from "react";
import { AttributeListsProps } from "./cardsContainer";

interface ToolsSelectionBoxProps {
    attributeLists: AttributeListsProps;
}

const ToolsSelectionBox = ({ attributeLists }: ToolsSelectionBoxProps) => {
    const theme = useTheme();

    const {
        tools: { toolsList, toolsSelect, setToolsSelect },
    } = attributeLists;

    return (
        <Stack spacing={1} px={2} alignItems="start">
            <Stack
                mb={2}
                direction="row"
                width="100%"
                justifyContent="space-between"
                alignItems="center"
            >
                <Typography>Tools</Typography>

                <FormControlLabel
                    label="select all"
                    control={
                        <Checkbox
                        defaultChecked
                            name="select all"
                            sx={{
                                color: theme.palette.text.primary,

                                "&.Mui-checked": {
                                    color: theme.palette.primary.main,
                                },
                            }}
                            onChange={(e) => {
                                if (e.target.checked) {
                                    setToolsSelect((prev) =>
                                        prev.map((toolObj) => {
                                            return { ...toolObj, state: true };
                                        })
                                    );
                                } else {
                                    setToolsSelect((prev) =>
                                        prev.map((toolObj) => {
                                            return { ...toolObj, state: false };
                                        })
                                    );
                                }
                            }}
                        />
                    }
                />
            </Stack>

            <Stack
                direction="row"
                justifyContent="center"
                flexWrap="wrap"
                gap={1.5}
            >
                {toolsList.map((tool, index) => {
                    return (
                        <Fragment key={`projects filter tool number: ${index}`}>
                            <Chip
                                label={tool}
                                onClick={() => {
                                    setToolsSelect((prev) => {
                                        const newToolsList = [...prev];
                                        newToolsList[index] = {
                                            ...newToolsList[index],
                                            state: !newToolsList[index].state,
                                        };

                                        return newToolsList;
                                    });
                                }}
                                sx={{
                                    color: toolsSelect[index].state
                                        ? theme.palette.secondary.main
                                        : theme.palette.text.primary,
                                    bgcolor: toolsSelect[index].state
                                        ? theme.palette.primary.main
                                        : theme.palette.secondary.main,
                                    boxShadow: toolsSelect[index].state
                                        ? `0 0 6px 1px ${theme.palette.primary.main}`
                                        : `0 0 2px ${theme.palette.text.primary}`,

                                    "&:hover": {
                                        bgcolor: toolsSelect[index].state
                                            ? theme.palette.primary.main
                                            : theme.palette.secondary.main,
                                    },
                                }}
                            />
                        </Fragment>
                    );
                })}
            </Stack>
        </Stack>
    );
};

export default ToolsSelectionBox;

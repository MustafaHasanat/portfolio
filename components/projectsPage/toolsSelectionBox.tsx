import {
    Checkbox,
    Chip,
    FormControlLabel,
    Stack,
    Typography,
    useTheme,
} from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { ToolsSelectionBoxProps } from "./styles";

const ToolsSelectionBox = ({
    projectsState,
    dispatchProject,
}: ToolsSelectionBoxProps) => {
    const theme = useTheme();
    const [isAllSelected, setIsAllSelected] = useState(false);

    const { toolsList, toolsSelect } = projectsState;

    useEffect(() => {
        setIsAllSelected(
            toolsSelect.map((obj) => obj.state).every((cur) => cur)
        );
    }, [toolsSelect]);

    return (
        <Stack spacing={1} px={2} alignItems="start">
            <Stack
                mb={2}
                direction="row"
                width="100%"
                justifyContent="space-between"
                alignItems="center"
            >
                <Typography>Tools {isAllSelected ? "(all)" : ""}</Typography>

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
                                    dispatchProject({
                                        type: "toolsSelect",
                                        payload: projectsState.toolsSelect.map(
                                            (toolObj) => {
                                                return {
                                                    ...toolObj,
                                                    state: true,
                                                };
                                            }
                                        ),
                                    });
                                    setIsAllSelected(true);
                                } else {
                                    dispatchProject({
                                        type: "toolsSelect",
                                        payload: projectsState.toolsSelect.map(
                                            (toolObj) => {
                                                return {
                                                    ...toolObj,
                                                    state: false,
                                                };
                                            }
                                        ),
                                    });

                                    setIsAllSelected(false);
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
                                    const newToolsList = [
                                        ...projectsState.toolsSelect,
                                    ];
                                    newToolsList[index] = {
                                        ...newToolsList[index],
                                        state: !newToolsList[index].state,
                                    };

                                    dispatchProject({
                                        type: "toolsSelect",
                                        payload: newToolsList,
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

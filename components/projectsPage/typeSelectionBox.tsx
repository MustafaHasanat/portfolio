import {
    Checkbox,
    FormControlLabel,
    FormGroup,
    Stack,
    Typography,
    useTheme,
} from "@mui/material";
import { TypeSelectionBoxProps } from "./styles";

const TypeSelectionBox = ({
    projectsState,
    dispatchProject,
}: TypeSelectionBoxProps) => {
    const theme = useTheme();

    const { typesList, checkboxesStates } = projectsState;

    const getCheckedStatus = (
        value: string
    ): { name: string; value: boolean } => {
        switch (value) {
            case "web":
                return {
                    name: "web",
                    value: checkboxesStates.web,
                };
            case "desktop":
                return {
                    name: "desktop",
                    value: checkboxesStates.desktop,
                };
            default:
                return {
                    name: "",
                    value: false,
                };
        }
    };

    const customMenuItem = ({ value, key }: { key: string; value: string }) => {
        return (
            <FormControlLabel
                key={key}
                label={value}
                control={
                    <Checkbox
                        name={value}
                        checked={getCheckedStatus(value).value}
                        onChange={(e) => {
                            const set = new Set(projectsState.typeSelected);

                            if (e.target.checked) {
                                set.add(e.target.name);

                                dispatchProject({
                                    type: "checkboxesStates",
                                    payload: {
                                        ...checkboxesStates,
                                        [getCheckedStatus(value).name]: true,
                                    },
                                });
                            } else {
                                set.delete(e.target.name);

                                dispatchProject({
                                    type: "checkboxesStates",
                                    payload: {
                                        ...checkboxesStates,
                                        [getCheckedStatus(value).name]: false,
                                    },
                                });
                            }

                            dispatchProject({
                                type: "typeSelected",
                                payload: Array.from(set),
                            });
                        }}
                        sx={{
                            color: theme.palette.text.primary,

                            "&.Mui-checked": {
                                color: theme.palette.primary.main,
                            },
                        }}
                    />
                }
            />
        );
    };

    return (
        <Stack
            direction="row"
            spacing={2}
            px={2}
            width="100%"
            alignItems="flex-start"
        >
            <Typography width="40%">Project type</Typography>

            <FormGroup
                sx={{
                    width: "60%",
                }}
            >
                {typesList.map((type, index) => {
                    return customMenuItem({
                        key: `type ${type} number ${index}`,
                        value: type,
                    });
                })}
            </FormGroup>
        </Stack>
    );
};

export default TypeSelectionBox;

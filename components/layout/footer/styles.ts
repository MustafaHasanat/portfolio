import { TextField, styled } from "@mui/material";


export const ColoredTextField = styled(TextField)({
    "& textarea + fieldset, div::before": {
        borderColor: "white",
    },
    "& div::before:focus": {
        borderColor: "red",
    },
});
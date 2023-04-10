import { Stack, useTheme } from "@mui/material";
import { ReactNode } from "react";
import { ColoredTextField } from "./styles";

const InputField = (
    type: string,
    label: string,
    icon: ReactNode,
    defaultValue?: string
) => {
    const theme = useTheme();

    return (
        <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{
                display: "flex",
                width: "100%",
                gridRow: "span 1",
                gridColumn: "1 / 2",
            }}
        >
            {icon}

            <ColoredTextField
                label={label}
                variant="standard"
                type={type}
                name={label}
                defaultValue={defaultValue}
                color="secondary"
                sx={{
                    width: "85%",
                    input: { color: theme.palette.base.light },
                    label: { color: theme.palette.base.light },
                }}
            />
        </Stack>
    );
};

export default InputField;

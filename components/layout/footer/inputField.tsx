import { Box, Stack, useTheme } from "@mui/material";
import {
    Dispatch,
    ReactNode,
    SetStateAction,
    useEffect,
    useRef,
    useState,
} from "react";
import { ColoredTextField } from "./styles";

interface InputFieldProps {
    handleChange: (
        length: number,
        isRequired: boolean,
        setError: Dispatch<SetStateAction<boolean>>
    ) => void;
    type: string;
    label: string;
    icon: (error: boolean, color: string) => JSX.Element;
    isRequired: boolean;
    helperText: string;
    isReset: boolean;
}

const InputField = ({
    handleChange,
    type,
    label,
    icon,
    isRequired,
    helperText,
    isReset,
}: InputFieldProps) => {
    const theme = useTheme();
    const [hovered, setHovered] = useState(false);
    const [error, setError] = useState(false);
    const fieldRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (isReset) {
            if (fieldRef.current) {
                handleChange(0, isRequired, setError);
                fieldRef.current.value = "";
            }
        }
    }, [handleChange, isRequired, isReset]);

    return (
        <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            onMouseEnter={() => {
                setHovered(true);
            }}
            onMouseLeave={() => {
                setHovered(false);
            }}
            sx={{
                display: "flex",
                width: "100%",
                gridRow: "span 1",
                gridColumn: "1 / 2",
            }}
        >
            <Box
                sx={{
                    width: "10%",
                    height: "auto",
                    transition: "0.3s ease",
                    opacity: hovered ? 0.6 : 1,
                }}
            >
                {icon(error, theme.palette.text.primary)}
            </Box>

            <ColoredTextField
                inputRef={fieldRef}
                label={label}
                variant="standard"
                type={type}
                name={label}
                color="primary"
                required={isRequired}
                error={error}
                helperText={error ? "This field is required!" : helperText}
                onChange={(e) => {
                    handleChange(e.target.value.length, isRequired, setError);
                }}
                FormHelperTextProps={{
                    sx: {
                        color: theme.palette.text.primary,
                    },
                }}
                sx={{
                    width: "85%",
                    input: { color: theme.palette.text.primary, opacity: 0.7 },
                    label: {
                        color: theme.palette.text.primary,
                        fontWeight: "bold",
                        textTransform: "capitalize",
                    },
                }}
            />
        </Stack>
    );
};

export default InputField;

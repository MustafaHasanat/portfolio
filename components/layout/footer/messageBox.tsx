import { Box, Stack, useTheme } from "@mui/material";
import MessageIcon from "@mui/icons-material/Message";
import { ColoredTextField } from "./styles";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

interface MessageBoxProps {
    handleChange: (
        length: number,
        isRequired: boolean,
        setError: Dispatch<SetStateAction<boolean>>
    ) => void;
    isReset: boolean;
}

const MessageBox = ({ handleChange, isReset }: MessageBoxProps) => {
    const theme = useTheme();
    const [hovered, setHovered] = useState(false);
    const [error, setError] = useState(false);
    const fieldRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (isReset) {
            if (fieldRef.current) {
                handleChange(0, true, setError);
                fieldRef.current.value = "";
            }
        }
    }, [handleChange, isReset]);

    return (
        <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
            sx={{
                gridRow: { xs: "2 / 5", lg: "3 / 5" },
                gridColumn: { xs: "1 / 2", lg: "2 / 3" },
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
                <MessageIcon
                    color={error ? "error" : undefined}
                    sx={{
                        color: error ? undefined : theme.palette.text.primary,
                        width: "100%",
                        height: "100%",
                    }}
                />
            </Box>

            <ColoredTextField
                inputRef={fieldRef}
                label="message"
                variant="outlined"
                type="text"
                name="message"
                defaultValue="Hi Mustafa, I would like to set a meeting with you."
                color="primary"
                multiline
                maxRows={4}
                required
                error={error}
                helperText={
                    error ? "This field is required!" : "Type your message here"
                }
                onMouseEnter={() => {
                    setHovered(true);
                }}
                onMouseLeave={() => {
                    setHovered(false);
                }}
                onChange={(e) => {
                    if (e.target.value.length === 0) {
                        setError(true);
                    } else {
                        setError(false);
                    }
                }}
                FormHelperTextProps={{
                    sx: {
                        color: theme.palette.text.primary,
                    },
                }}
                InputProps={{
                    sx: {
                        color: theme.palette.text.primary,
                        opacity: 0.7,
                    },
                }}
                sx={{
                    width: "85%",
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

export default MessageBox;

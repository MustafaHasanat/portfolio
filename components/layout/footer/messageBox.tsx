import { Stack, useTheme } from "@mui/material";
import MessageIcon from "@mui/icons-material/Message";
import { ColoredTextField } from "./styles";

const MessageBox = () => {
    const theme = useTheme();
    
    return (
        <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
            sx={{
                gridRow: "1 / 5",
                gridColumn: "2 / 3",
            }}
        >
            <MessageIcon
                sx={{
                    color: theme.palette.base.light,
                    width: "10%",
                    height: "auto",
                }}
            />

            <ColoredTextField
                label="message"
                variant="outlined"
                type="text"
                name="message"
                defaultValue="Hi Mustafa, I would like to set a meeting with you."
                color="secondary"
                multiline
                maxRows={10}
                InputProps={{
                    sx: {
                        color: theme.palette.base.light,
                    },
                }}
                sx={{
                    width: "85%",
                    label: { color: theme.palette.base.light },
                }}
            />
        </Stack>
    );
};

export default MessageBox;

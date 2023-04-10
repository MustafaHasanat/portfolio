import { Button, Typography, useTheme } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const SendButton = () => {
    const theme = useTheme();

    return (
        <Button
            type="submit"
            variant="outlined"
            color="secondary"
            sx={{
                gridRow: "5 / 6",
                gridColumn: "1 / 3",
                color: theme.palette.base.light,
                border: `1px solid ${theme.palette.base.light}`,
            }}
        >
            <Typography fontSize="1.5vw" mr={3}>
                send
            </Typography>

            <SendIcon
                sx={{
                    color: theme.palette.base.light,
                    width: "4%",
                    height: "auto",
                }}
            />
        </Button>
    );
};

export default SendButton;

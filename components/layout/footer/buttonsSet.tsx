import { Button, Stack, Typography, useTheme } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { motion } from "framer-motion";
import IconicButton from "@/components/shared/iconicButton";

interface ButtonsSetProps {
    clearForm: () => void;
}

const ButtonsSet = ({ clearForm }: ButtonsSetProps) => {
    const theme = useTheme();
    const [sendHovered, setSendHovered] = useState(false);

    return (
        <Stack
            direction="row"
            justifyContent="space-between"
            sx={{
                height: { xs: "3rem", lg: "auto" },
                gridRow: { xs: "span 1", lg: "5 / 6" },
                gridColumn: { xs: "1 / 2", lg: "1 / 3" },
            }}
        >
            <Button
                type="submit"
                variant="outlined"
                color="success"
                onMouseEnter={() => {
                    setSendHovered(true);
                }}
                onMouseLeave={() => {
                    setSendHovered(false);
                }}
                sx={{
                    width: { xs: "75%", lg: "87%" },
                    color: theme.palette.text.primary,
                    border: `1px solid ${theme.palette.text.primary}`,
                }}
            >
                <Typography
                    component={motion.p}
                    animate={{ x: sendHovered ? 0 : 30 }}
                    fontSize={{ xs: "1rem", lg: "1.5rem" }}
                    mr={3}
                    color={
                        sendHovered
                            ? theme.palette.success.main
                            : theme.palette.text.primary
                    }
                >
                    send
                </Typography>

                <Stack
                    component={motion.div}
                    animate={{
                        x: sendHovered ? 0 : -30,
                        opacity: sendHovered ? 1 : 0,
                    }}
                    sx={{
                        width: "4%",
                        height: "auto",
                    }}
                >
                    <SendIcon
                        sx={{
                            color: sendHovered
                                ? theme.palette.success.main
                                : theme.palette.text.primary,
                            width: "100%",
                            height: "100%",
                            transition: "0.3s ease",
                        }}
                    />
                </Stack>
            </Button>

            <IconicButton
                icon={
                    <DeleteForeverIcon
                        sx={{
                            color: theme.palette.error.main,
                            height: "100%",
                        }}
                    />
                }
                onClick={clearForm}
                color={theme.palette.text.primary}
                hoverColor={theme.palette.error.main}
                extraSX={{
                    width: { xs: "20%", lg: "10%" },
                }}
            >
                <Typography>clear</Typography>
            </IconicButton>
        </Stack>
    );
};

export default ButtonsSet;

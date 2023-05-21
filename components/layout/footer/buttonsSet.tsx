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
            direction={{ xs: "column", md: "row" }}
            justifyContent="space-between"
            sx={{
                height: { xs: "6rem", md: "3rem", lg: "auto" },
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
                    width: { xs: "100%", md: "75%", lg: "87%" },
                    height: { xs: "45%", md: "100%" },
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
                            width: "1rem",
                            height: "auto",
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
                    width: { xs: "100%", md: "20%", lg: "10%" },
                    height: { xs: "45%", md: "100%" },
                }}
            >
                <Typography>clear</Typography>
            </IconicButton>
        </Stack>
    );
};

export default ButtonsSet;

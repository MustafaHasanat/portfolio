import { Button, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
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
    const mdScreen = useMediaQuery("(min-width:425px)");
    const [sendHovered, setSendHovered] = useState(false);

    return (
        <Stack
            direction={{ xs: "column", md: "row" }}
            justifyContent="space-between"
            sx={{
                height: { xs: "7.5rem", md: "3.5rem" },
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
                    height: { xs: "3rem", md: "3.5rem" },
                    color: theme.palette.text.primary,
                    border: `1px solid ${theme.palette.text.primary}`,
                    position: "relative",
                }}
            >
                <Typography
                    component={motion.p}
                    animate={{ x: sendHovered ? "-100%" : "-50%" }}
                    fontSize={{ xs: "1rem", lg: "1.5rem" }}
                    sx={{
                        position: "absolute",
                        left: "50%",
                    }}
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
                    initial={{ opacity: 0 }}
                    animate={{
                        x: sendHovered ? 30 : -20,
                        opacity: sendHovered ? 1 : 0,
                    }}
                    sx={{
                        width: "auto",
                        height: "auto",
                    }}
                >
                    <SendIcon
                        sx={{
                            color: sendHovered
                                ? theme.palette.success.main
                                : theme.palette.text.primary,
                            width: { xs: "1rem", md: "1.5rem" },
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
                buttonHeight={mdScreen ? "3.5rem" : "3rem"}
                onClick={clearForm}
                color={theme.palette.text.primary}
                hoverColor={theme.palette.error.main}
                extraSX={{
                    width: { xs: "100%", md: "20%", lg: "10%" },
                }}
            >
                <Typography>clear</Typography>
            </IconicButton>
        </Stack>
    );
};

export default ButtonsSet;

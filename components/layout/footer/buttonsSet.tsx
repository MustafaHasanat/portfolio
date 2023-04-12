import { Box, Button, Stack, Typography, useTheme } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import useBoxSize from "@/hooks/useBoxSize";
import { motion } from "framer-motion";

interface ButtonsSetProps {
    clearForm: () => void;
}

const ButtonsSet = ({ clearForm }: ButtonsSetProps) => {
    const theme = useTheme();
    const [sendHovered, setSendHovered] = useState(false);
    const [clearHovered, setClearHovered] = useState(false);
    const { ref: buttonRef, height: buttonHeight } = useBoxSize();

    return (
        <Stack
            direction="row"
            justifyContent="space-between"
            sx={{
                gridRow: "5 / 6",
                gridColumn: "1 / 3",
            }}
        >
            <Button
                type="submit"
                variant="outlined"
                color="secondary"
                onMouseEnter={() => {
                    setSendHovered(true);
                }}
                onMouseLeave={() => {
                    setSendHovered(false);
                }}
                sx={{
                    width: "87%",
                    color: theme.palette.base.light,
                    border: `1px solid ${theme.palette.base.light}`,
                }}
            >
                <Typography
                    component={motion.p}
                    animate={{ x: sendHovered ? 0 : 30 }}
                    fontSize="1.5vw"
                    mr={3}
                    color={
                        sendHovered
                            ? theme.palette.blue.dark
                            : theme.palette.base.light
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
                                ? theme.palette.blue.dark
                                : theme.palette.base.light,
                            width: "100%",
                            height: "100%",
                            transition: "0.3s ease",
                        }}
                    />
                </Stack>
            </Button>

            <Box
                component="div"
                ref={buttonRef}
                onMouseEnter={() => {
                    setClearHovered(true);
                }}
                onMouseLeave={() => {
                    setClearHovered(false);
                }}
                sx={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "10%",
                    color: theme.palette.base.light,
                    border: `1px solid`,
                    borderRadius: 1,
                    transition: "0.2s ease",
                    borderColor: clearHovered
                        ? "red"
                        : theme.palette.base.light,
                    overflow: "hidden",
                    cursor: "pointer",
                }}
            >
                <Stack
                    component={motion.div}
                    initial={{ y: 0 }}
                    whileHover={{ y: -buttonHeight }}
                    sx={{
                        width: "100%",
                        position: "absolute",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: buttonHeight,
                        }}
                    >
                        <Typography>clear</Typography>
                    </Box>

                    <Box
                        onClick={clearForm}
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: buttonHeight,
                        }}
                    >
                        <DeleteForeverIcon
                            sx={{
                                color: "red",
                                height: buttonHeight,
                            }}
                        />
                    </Box>
                </Stack>
            </Box>
        </Stack>
    );
};

export default ButtonsSet;

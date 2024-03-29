import { Avatar, Box, useMediaQuery, useTheme } from "@mui/material";
import Link from "next/link";
import { urls } from "@/utils/constants/global";
import { motion, useAnimation } from "framer-motion";
import { mqHook } from "@/styles/mq";

const BMCBox = () => {
    const theme = useTheme();
    const bmcAnimations = useAnimation();
    const mdScreen = useMediaQuery(mqHook.MD);

    return (
        <Box
            sx={{
                position: "relative",
                bgcolor: theme.palette.secondary.light,
                width: "6vh",
                height: "6vh",
                borderRadius: 2,
                display: "flex",
                justifyContent: "center",
            }}
        >
            <Link href={urls.myBMCURL} title="bmc" target="_blank">
                <Avatar
                    src={"/icons/bmcLogo.jpg"}
                    component="div"
                    onMouseEnter={() => {
                        bmcAnimations.start("visible");
                    }}
                    onMouseLeave={() => {
                        bmcAnimations.start("hidden");
                    }}
                    sx={{
                        position: "relative",
                        width: "auto",
                        height: "80%",
                        top: "50%",
                        transform: "translateY(-50%)",
                    }}
                />
            </Link>

            {mdScreen && (
                <Avatar
                    component={motion.div}
                    animate={bmcAnimations}
                    initial="hidden"
                    variants={{
                        visible: {
                            scale: 1,
                            x: "-50%",
                            opacity: 1,
                            transition: { duration: 0.2 },
                        },
                        hidden: {
                            scale: 0,
                            x: "-50%",
                            opacity: 0,
                            transition: { duration: 0.3 },
                        },
                    }}
                    src={"/icons/bmcSlogan.png"}
                    sx={{
                        padding: 1,
                        bgcolor: theme.palette.secondary.light,
                        border: `2px solid ${theme.palette.secondary.dark}`,
                        width: "200px",
                        height: "auto",
                        top: 80,
                        position: "absolute",
                        borderRadius: 2,
                        left: "50%",
                    }}
                />
            )}
        </Box>
    );
};

export default BMCBox;

import { Avatar, Box, useMediaQuery, useTheme } from "@mui/material";
import Link from "next/link";
import { urls } from "@/utils/constants/global";
import { motion, useAnimation } from "framer-motion";
import { useSelector } from "react-redux";
import { GlobalAssetProps } from "@/utils/store/globalAssetsSlice";

const BMCBox = () => {
    const theme = useTheme();
    const bmcAnimations = useAnimation();
    const smScreen = useMediaQuery("(min-width:600px)");

    const globalAssets = useSelector(
        (state: { globalAssetsReducer: { globalAssets: GlobalAssetProps } }) =>
            state.globalAssetsReducer.globalAssets
    );

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
                    src={globalAssets?.bmcLogo?.src}
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

            {smScreen && (
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
                    src={globalAssets?.bmcSlogan?.src}
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

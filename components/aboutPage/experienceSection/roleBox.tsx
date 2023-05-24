/* eslint-disable react-hooks/exhaustive-deps */
import { Avatar, Box, Stack, useMediaQuery } from "@mui/material";
import { Experience } from "@/types/experience";
import theme from "@/styles/theme";
import SwitchBox from "./switchBox";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface RoleBoxProps {
    experience: Experience;
    index: number;
}

const RoleBox = ({ experience, index }: RoleBoxProps) => {
    const cardRef = useRef(null);
    const lgScreen = useMediaQuery("(min-width:1440px)");
    const cardInView = useInView(cardRef);

    return (
        <Stack position="relative" justifyContent="center" alignItems="center">
            <Stack
                ref={cardRef}
                component={motion.div}
                initial={{ x: 0 }}
                animate={{
                    x: !lgScreen
                        ? 0
                        : cardInView
                        ? index % 2 === 0
                            ? -70
                            : 70
                        : 0,
                }}
                direction={{ xs: "column", lg: "row" }}
                sx={{
                    width: { xs: "100%", md: "30rem", lg: "65%" },
                    height: { xs: "auto", lg: "15rem" },
                    bgcolor: theme.palette.text.primary,
                    overflow: "hidden",
                    borderRadius: 3,
                    alignItems: "start",
                }}
            >
                <Stack
                    sx={{
                        width: { xs: "100%", lg: "auto" },
                        height: { xs: "auto", lg: "100%" },
                        alignItems: { xs: "center", lg: "start" },
                    }}
                >
                    <Avatar
                        variant="square"
                        src={experience.logo.asset.url}
                        sx={{
                            width: { xs: "10rem", lg: "auto" },
                            height: { xs: "auto", lg: "100%" },
                            borderRadius: { xs: 3, lg: 0 },
                            my: { xs: 3, lg: 0 },
                        }}
                    />
                </Stack>

                <SwitchBox experience={experience} />
            </Stack>
        </Stack>
    );
};

export default RoleBox;

/* eslint-disable react-hooks/exhaustive-deps */
import { Avatar, Box, Stack } from "@mui/material";
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
    const cardInView = useInView(cardRef);

    return (
        <Stack position="relative" justifyContent="center" alignItems="center">
            <Stack
                ref={cardRef}
                component={motion.div}
                initial={{ x: 0 }}
                animate={{ x: cardInView ? (index % 2 === 0 ? -70 : 70) : 0 }}
                direction="row"
                sx={{
                    width: { xs: "65%" },
                    height: "15rem",
                    bgcolor: theme.palette.text.primary,
                    overflow: "hidden",
                    borderRadius: 3,
                }}
            >
                <Box
                    sx={{
                        width: "auto",
                        height: "100%",
                    }}
                >
                    <Avatar
                        variant="square"
                        src={experience.logo.asset.url}
                        sx={{
                            width: "100%",
                            height: "100%",
                        }}
                    />
                </Box>

                <SwitchBox experience={experience} />
            </Stack>
        </Stack>
    );
};

export default RoleBox;

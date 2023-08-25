import { Divider, Stack, useTheme } from "@mui/material";
import { useRef } from "react";
import UpperSection from "./upperSection";
import LowerSection from "./lowerSection";
import { motion, useInView } from "framer-motion";
import { Certificate } from "@/types/certificate";

interface EducationCardProps {
    cert: Certificate;
}

const EducationCard = ({ cert }: EducationCardProps) => {
    const theme = useTheme();
    const cardRef = useRef(null);
    const cardInView = useInView(cardRef);

    return (
        <Stack
            component={motion.div}
            ref={cardRef}
            initial={{ scale: 0.9 }}
            animate={{
                scale: cardInView ? 1 : 0.9,
                transition: {
                    type: "spring",
                },
            }}
            sx={{
                width: { xs: "100%", lg: "25vw" },
                height: { xs: "auto", lg: "80vh" },
                position: "relative",
                padding: 3,
                justifyContent: "space-evenly",
                alignItems: "center",
                borderRadius: 3,
                bgcolor: theme.palette.secondary.main,
                boxShadow: `0px 0px 25px ${theme.palette.text.primary}`,
                background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("wallpapers/landingPage.svg")`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}
        >
            <UpperSection cert={cert} />

            <Divider
                sx={{
                    bgcolor: theme.palette.text.primary,
                    width: "100%",
                    marginY: 2,
                }}
            />

            <LowerSection cert={cert} />
        </Stack>
    );
};

export default EducationCard;

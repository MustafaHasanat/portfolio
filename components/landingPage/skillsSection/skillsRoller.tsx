/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-comment-textnodes */
import { Avatar, Box, Stack, Typography } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import {
    skillBoxStyles,
    skillBoxTransition,
    skillMainBoxVariants,
    skillRollerStyles,
    skillTempBoxVariants,
} from "./styles";

interface SkillsRollerProps {
    hoverIsActive: boolean;
    boxWidth: number;
    boxHeight: number;
    skills: {
        name: string;
        src: string;
    }[];
}

const SkillsRoller = ({
    hoverIsActive,
    skills,
    boxWidth,
    boxHeight,
}: SkillsRollerProps) => {
    const [mainCard, setMainCard] = useState(0);
    const [tempCard, setTempCard] = useState(1);

    const [animation, setAnimation] = useState("visible");
    const boxAnimation = useAnimation();

    const handleMovingCard = () => {
        if (hoverIsActive) {
            const newVariant = animation === "visible" ? "hidden" : "visible";

            boxAnimation.start(newVariant);
            setAnimation(newVariant);

            setTimeout(() => {
                if (newVariant === "visible") {
                    setMainCard(
                        tempCard + 1 >= skills.length ? 0 : tempCard + 1
                    );
                }

                if (newVariant === "hidden") {
                    setTempCard(
                        mainCard + 1 >= skills.length ? 0 : mainCard + 1
                    );
                }
            }, 400);
        }
    };

    const textWrapper = (text: string) => {
        return <Typography fontSize="2vw">{text}</Typography>;
    };

    const avatarWrapper = (src: string) => {
        return (
            <Avatar
                variant="square"
                src={src}
                alt="skill"
                sx={{ width: "auto", height: "60%" }}
            />
        );
    };

    useEffect(() => {
        const interval = setInterval(() => handleMovingCard(), 700);

        return () => {
            clearInterval(interval);
        };
    }, [handleMovingCard]);

    return (
        <Stack direction="row" sx={skillRollerStyles(boxHeight)}>
            <Box
                component={motion.div}
                animate={boxAnimation}
                initial="hidden"
                variants={skillMainBoxVariants(boxWidth)}
                transition={skillBoxTransition}
                sx={skillBoxStyles(boxWidth, boxHeight)}
            >
                {textWrapper(skills[mainCard].name)}
                {avatarWrapper(skills[mainCard].src)}
            </Box>

            <Box
                component={motion.div}
                animate={boxAnimation}
                initial="hidden"
                variants={skillTempBoxVariants(boxWidth)}
                transition={skillBoxTransition}
                sx={skillBoxStyles(boxWidth, boxHeight)}
            >
                {textWrapper(skills[tempCard].name)}
                {avatarWrapper(skills[tempCard].src)}
            </Box>
        </Stack>
    );
};

export default SkillsRoller;

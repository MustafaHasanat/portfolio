/* eslint-disable react-hooks/exhaustive-deps */
import { Stack } from "@mui/material";
import { useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import DescriptionLogo from "./descriptionLogo";
import ExperienceInfo from "./experienceInfo";
import { Experience } from "@/types/experience";

interface RoleBoxProps {
    experience: Experience;
    index: number;
}

const RoleBox = ({ experience, index }: RoleBoxProps) => {
    const roleAnimation = useAnimation();
    const roleRef = useRef(null);
    const roleInView = useInView(roleRef);

    useEffect(() => {
        roleInView
            ? roleAnimation.start("visible")
            : roleAnimation.start("hidden");
    }, [roleInView]);

    return (
        <Stack
            position="relative"
            height="60vh"
            justifyContent="center"
            alignItems="center"
        >
            <DescriptionLogo
                roleRef={roleRef}
                experience={experience}
                roleAnimation={roleAnimation}
                index={index}
            />
            <ExperienceInfo
                index={index}
                experience={experience}
                roleAnimation={roleAnimation}
                roleInView={roleInView}
            />
        </Stack>
    );
};

export default RoleBox;

/* eslint-disable react-hooks/exhaustive-deps */
import { Stack } from "@mui/material";
import { useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import DescriptionLogo from "./descriptionLogo";
import ExperienceInfo from "./experienceInfo";

interface RoleBoxProps {
    experience: {
        src: string;
        role: string;
        employmentType: string;
        duration: string;
        company: string;
        location: string;
        locationType: string;
        description: string;
    };
}

const RoleBox = ({ experience }: RoleBoxProps) => {
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
                experiences={experience}
                roleAnimation={roleAnimation}
                roleInView={roleInView}
            />
            <ExperienceInfo
                experiences={experience}
                roleAnimation={roleAnimation}
                roleInView={roleInView}
            />
        </Stack>
    );
};

export default RoleBox;

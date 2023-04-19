import { Avatar, Stack, useTheme } from "@mui/material";
import { AnimationControls } from "framer-motion";
import { MutableRefObject } from "react";

interface DescriptionLogoProps {
    roleRef: MutableRefObject<null>;
    experiences: {
        src: string;
        description: string;
    };
    roleAnimation: AnimationControls;
    roleInView: boolean;
}

const DescriptionLogo = ({
    roleRef,
    experiences,
    roleAnimation,
    roleInView,
}: DescriptionLogoProps) => {
    const { src, description } = experiences;
    const theme = useTheme();

    return (
        <Stack
            justifyContent="center"
            alignItems="center"
            sx={{ width: "100%", height: "100%" }}
        >
            <Avatar
                component="div"
                ref={roleRef}
                src={src}
                sx={{
                    width: "auto",
                    height: "40%",
                }}
            />
        </Stack>
    );
};

export default DescriptionLogo;

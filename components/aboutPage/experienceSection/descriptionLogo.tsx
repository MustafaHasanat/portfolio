import GlassBox from "@/components/shared/glassBox";
import IconicButton from "@/components/shared/iconicButton";
import { Avatar, Box, Stack, Typography, useTheme } from "@mui/material";
import { AnimationControls, motion, useAnimation } from "framer-motion";
import { Fragment, MutableRefObject, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

interface DescriptionLogoProps {
    roleRef: MutableRefObject<null>;
    experiences: {
        src: string;
        bullets: string[];
    };
    roleAnimation: AnimationControls;
    index: number;
}

const DescriptionLogo = ({
    roleRef,
    experiences,
    roleAnimation,
    index,
}: DescriptionLogoProps) => {
    const { src, bullets } = experiences;
    const theme = useTheme();
    const bulletsAnimation = useAnimation();
    const [isBulletsOpen, setIsBulletsOpen] = useState(false);

    return (
        <Stack
            justifyContent="center"
            alignItems="center"
            position="relative"
            sx={{ width: "100%", height: "100%" }}
        >
            <Box
                ref={roleRef}
                component={motion.div}
                animate={roleAnimation}
                initial="hidden"
                variants={{
                    visible: {
                        height: "40%",
                        transition: {
                            type: "spring",
                        },
                    },
                    hidden: {
                        height: "10%",
                    },
                }}
                whileHover={{
                    scale: 1.2,
                }}
                whileTap={{
                    scale: 0.9,
                }}
                sx={{
                    width: "auto",
                    zIndex: 5,
                    cursor: "pointer",
                }}
                onClick={() => {
                    bulletsAnimation.start("visible");
                    setIsBulletsOpen(true);
                }}
            >
                <Avatar
                    src={src}
                    sx={{
                        width: "100%",
                        height: "100%",
                    }}
                />
            </Box>

            <Stack
                component={motion.div}
                animate={bulletsAnimation}
                initial="hidden"
                variants={{
                    visible: {
                        transform: "translateX(-50%) translateY(-50%) scale(1)",
                    },
                    hidden: {
                        transform: "translateX(-50%) translateY(-50%) scale(0)",
                    },
                }}
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    color: theme.palette.text.primary,
                    zIndex: 6,
                    width: "30%",
                    height: "90%",
                }}
            >
                <GlassBox
                    id={`experience box number: ${index}`}
                    extraSX={{
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: 5,
                        bgcolor: "#000000BB"
                    }}
                >
                    <Stack alignItems="start" width="100%">
                        {bullets.map((bullet, bulletIndex) => {
                            return (
                                <Fragment
                                    key={`experience bullet number: ${bulletIndex}`}
                                >
                                    <Typography fontSize="1.3vw">
                                        - {bullet}
                                    </Typography>
                                </Fragment>
                            );
                        })}
                    </Stack>

                    <IconicButton
                        icon={
                            <CloseIcon
                                sx={{
                                    color: "red",
                                    height: "100%",
                                }}
                            />
                        }
                        color={theme.palette.primary.main}
                        hoverColor="red"
                        onClick={() => {
                            bulletsAnimation.start("hidden");
                            setIsBulletsOpen(false);
                        }}
                        extraSX={{
                            width: "100%",
                            height: "8vh",
                        }}
                    >
                        <Typography
                            fontSize="1.5vw"
                            textTransform="uppercase"
                            letterSpacing={2}
                            fontWeight="bold"
                        >
                            close
                        </Typography>
                    </IconicButton>
                </GlassBox>
            </Stack>
        </Stack>
    );
};

export default DescriptionLogo;

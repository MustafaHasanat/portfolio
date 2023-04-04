import { Button, Box, Stack, Avatar, Typography } from "@mui/material";
import { useTheme } from "@mui/material";
import { useAnimation, motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { modalActions } from "@/utils/store/store";
import { Fragment, useEffect, useState } from "react";
import QuestionAnswerRoundedIcon from "@mui/icons-material/QuestionAnswerRounded";
import { buttonVariants, mainButtonStyles } from "./styles";
import LandingPageConstants from "@/utils/constants/landingPage";
import Link from "next/link";

export const itemsVariants = (
    distance: number,
    delayVisible: number,
    delayHidden: number,
    isModalActive: boolean
) => {
    return {
        visible: {
            right: 0,
            bottom: distance,
            opacity: 0.7,
            scale: 1,
            transition: {
                delay: delayVisible,
            },
        },
        hidden: {
            right: 0,
            bottom: 0,
            opacity: isModalActive ? 0.7 : 0,
            scale: isModalActive ? 1 : 0,
            transition: {
                delay: delayHidden,
            },
        },
    };
};

export const itemTextVariants = (shadow: string) => {
    return {
        visible: {
            textShadow: `0 0 18px ${shadow}`,
            opacity: 1,
            y: 0,
            x: "-70%",
            transition: {
                duration: 0.2,
            },
        },
        hidden: {
            textShadow: `0 0 0px ${shadow}`,
            opacity: 0,
            y: 20,
            x: "-70%",
            transition: {
                duration: 0.2,
            },
        },
    };
};

const Contacts = () => {
    const theme = useTheme();
    const buttonAnimations = useAnimation();
    const itemsAnimations = useAnimation();

    const [hoveredContact, setHoveredContact] = useState(0);

    const dispatch = useDispatch();
    const setActive = (state: boolean) =>
        dispatch(modalActions.setActive(state));

    const isModalActive = useSelector(
        (state: { modalReducer: { isActive: boolean } }) =>
            state.modalReducer.isActive
    );

    useEffect(() => {
        if (!isModalActive) buttonAnimations.start("hidden");
        if (!isModalActive) itemsAnimations.start("hidden");
    }, [isModalActive, buttonAnimations, itemsAnimations]);

    useEffect(() => {}, [hoveredContact]);

    return (
        <Stack
            sx={{
                position: "fixed",
                bottom: "15%",
                right: 100,
                zIndex: 200,
            }}
        >
            <Button
                component={motion.button}
                animate={buttonAnimations}
                initial="hidden"
                variants={buttonVariants}
                onClick={() => {
                    buttonAnimations.start("visible");
                    itemsAnimations.start("visible");
                    setActive(!isModalActive);
                }}
                sx={mainButtonStyles(
                    theme.palette.blue.light,
                    theme.palette.purple.dark,
                    theme.palette.base.dark,
                    theme.palette.base.light
                )}
            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <QuestionAnswerRoundedIcon
                        sx={{
                            width: "50%",
                            height: "auto",
                        }}
                    />
                </Box>
            </Button>

            {LandingPageConstants.contacts.map((item, index) => {
                return (
                    <Fragment key={`contact item number: ${index}`}>
                        <Box
                            component={motion.button}
                            animate={itemsAnimations}
                            initial="hidden"
                            onMouseEnter={() => {
                                setHoveredContact(index + 1);
                            }}
                            onMouseLeave={() => {
                                setHoveredContact(0);
                            }}
                            transition={{
                                ease: "easeIn",
                                duration: 0.3,
                                type: "spring",
                                stiffness: 400,
                                damping: 15,
                            }}
                            whileHover={{
                                scale: 1.3,
                                opacity: 1,
                            }}
                            whileTap={{
                                scale: 0.8,
                            }}
                            variants={itemsVariants(
                                item.distance,
                                item.delayVisible,
                                item.delayHidden,
                                isModalActive
                            )}
                            sx={{
                                position: "absolute",
                                bgcolor: "transparent",
                                border: "none",
                                width: "4rem",
                                height: "4rem",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Link href={item.link} title="" target="_blank">
                                <Avatar
                                    variant="square"
                                    src={item.src}
                                    sx={{
                                        width: "80%",
                                        height: "80%",
                                    }}
                                />
                            </Link>

                            <Typography
                                component={motion.p}
                                animate={
                                    hoveredContact === index + 1
                                        ? "visible"
                                        : "hidden"
                                }
                                initial={"hidden"}
                                variants={itemTextVariants(
                                    theme.palette.base.light
                                )}
                                sx={{
                                    textAlign: "end",
                                    width: "500%",
                                    position: "absolute",
                                    color: theme.palette.base.light,
                                }}
                            >
                                {item.text}
                            </Typography>
                        </Box>
                    </Fragment>
                );
            })}
        </Stack>
    );
};

export default Contacts;

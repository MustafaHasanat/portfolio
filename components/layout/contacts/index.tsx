import {
    Button,
    Box,
    Stack,
    Avatar,
    Typography,
    Tooltip,
    Zoom,
} from "@mui/material";
import { useTheme } from "@mui/material";
import { useAnimation, motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { modalActions } from "@/utils/store/store";
import { Fragment, useEffect, useState } from "react";
import QuestionAnswerRoundedIcon from "@mui/icons-material/QuestionAnswerRounded";
import {
    buttonVariants,
    contactItemStyles,
    contatcsContainerStyles,
    floatingListStyles,
    itemTextVariants,
    itemsVariants,
    mainButtonStyles,
} from "./styles";
import WelcomeSectionConstants from "@/utils/constants/landingPage/welcomeSection";
import Link from "next/link";

interface ContactsProps {
    switchPointInView: boolean;
}

const Contacts = ({ switchPointInView }: ContactsProps) => {
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
        <Stack sx={contatcsContainerStyles}>
            <Tooltip
                title="contact me"
                arrow 
                TransitionComponent={Zoom}
                placement="left"
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
                        switchPointInView
                            ? theme.palette.blue.light
                            : theme.palette.purple.dark,
                        switchPointInView
                            ? theme.palette.purple.dark
                            : theme.palette.blue.dark,
                        switchPointInView
                            ? theme.palette.base.dark
                            : theme.palette.base.light,
                        switchPointInView
                            ? theme.palette.base.light
                            : theme.palette.base.dark
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
            </Tooltip>

            {WelcomeSectionConstants.contacts.map((item, index) => {
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
                            sx={contactItemStyles}
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
                                sx={floatingListStyles(
                                    theme.palette.base.light
                                )}
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

import {
    Button,
    Box,
    Stack,
    Avatar,
    Typography,
    useMediaQuery,
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
    contactsContainerStyles,
    floatingListStyles,
    itemTextVariants,
    itemsVariants,
    mainButtonStyles,
} from "./styles";
import Link from "next/link";
import constants from "@/utils/constants";
import { GlobalAssetProps } from "@/utils/store/globalAssetsSlice";

interface ContactsProps {}

const Contacts = ({}: ContactsProps) => {
    const theme = useTheme();
    const animationController = useAnimation();
    const lgScreen = useMediaQuery("(min-width:1440px)");

    const [hoveredContact, setHoveredContact] = useState(0);
    const [isButtonActive, setIsButtonActive] = useState(false);
    const [contacts, setContacts] = useState<
        {
            name:
                | "gmailContact"
                | "linkedInContact"
                | "callContact"
                | "whatsappContact";
            asset: { src: string; alt: string };
        }[]
    >([]);

    const dispatch = useDispatch();
    const setActive = (state: boolean) =>
        dispatch(modalActions.setActive(state));

    const isModalActive = useSelector(
        (state: { modalReducer: { isActive: boolean } }) =>
            state.modalReducer.isActive
    );

    const globalAssets = useSelector(
        (state: { globalAssetsReducer: { globalAssets: GlobalAssetProps } }) =>
            state.globalAssetsReducer.globalAssets
    );

    useEffect(() => {
        if (!isModalActive) {
            animationController.start("hidden");
            setIsButtonActive(false);
        }
    }, [isModalActive, animationController]);

    useEffect(() => {
        setContacts([
            { name: "gmailContact", asset: globalAssets?.gmailContact },
            { name: "linkedInContact", asset: globalAssets?.linkedInContact },
            { name: "callContact", asset: globalAssets?.callContact },
            { name: "whatsappContact", asset: globalAssets?.whatsappContact },
        ]);
    }, [
        globalAssets?.callContact,
        globalAssets?.gmailContact,
        globalAssets?.linkedInContact,
        globalAssets?.whatsappContact,
    ]);

    return (
        <Stack sx={contactsContainerStyles(isModalActive && isButtonActive)}>
            <Button
                component={motion.button}
                animate={animationController}
                initial="hidden"
                variants={buttonVariants}
                title="contact-button"
                onClick={() => {
                    setIsButtonActive(true);
                    animationController.start("visible");
                    setActive(!isModalActive);
                }}
                sx={mainButtonStyles(
                    theme.palette.primary.main,
                    theme.palette.secondary.main,
                    theme.palette.secondary.main,
                    theme.palette.primary.main,
                    theme.palette.secondary.main,
                    theme.palette.primary.main
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

            {contacts.map((contact, index) => {
                const item: {
                    text: string;
                    distance: number;
                    delayVisible: number;
                    delayHidden: number;
                    link: string;
                } = constants.global.contacts[contact.name];

                return (
                    <Fragment key={`contact item number: ${index}`}>
                        <Box
                            component={motion.div}
                            animate={animationController}
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
                            <Link
                                href={item.link}
                                title={item.link}
                                target="_blank"
                            >
                                <Avatar
                                    variant="square"
                                    src={contact?.asset?.src}
                                    alt="contact"
                                    sx={{
                                        width: "80%",
                                        height: "80%",
                                    }}
                                />
                            </Link>

                            <Typography
                                component={motion.p}
                                animate={
                                    hoveredContact === index + 1 || !lgScreen
                                        ? "visible"
                                        : "hidden"
                                }
                                initial={"hidden"}
                                variants={itemTextVariants(
                                    theme.palette.text.primary
                                )}
                                sx={floatingListStyles(
                                    theme.palette.text.primary
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

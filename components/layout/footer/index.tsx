/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { Box, Stack } from "@mui/material";
import React, { useEffect, useRef } from "react";
import sendEmail from "@/utils/helpers/sendEmail";
import Form from "./form";
import { snackbarActions, navigationBarActions } from "@/utils/store/store";
import { useDispatch } from "react-redux";
import Hexagons from "./hexagons";
import theme from "@/styles/theme";
import { useInView } from "framer-motion";

const Footer = () => {
    const formRef = useRef();
    const dispatch = useDispatch();

    const footerRef = useRef(null);
    const footerInView = useInView(footerRef);

    useEffect(() => {
        if (footerInView)
            dispatch(navigationBarActions.setCurrentView("footer"));
    }, [footerInView]);

    const handleClick = (snackbarMessage: string, color: string) => {
        dispatch(snackbarActions.setColorScheme(color));
        dispatch(snackbarActions.setMessage(snackbarMessage));
        dispatch(snackbarActions.setActive(true));
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();

        const status = sendEmail(e.target);

        if (status === 200) {
            handleClick("Your message was sent successfully!", "success");
        } else {
            handleClick("Something went wrong on the server", "error");
        }
    };

    return (
        <Stack
            id="layout-footer"
            component="footer"
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            px={12}
            sx={{
                height: "100vh",
                background: `
                    linear-gradient(
                        rgba(0, 0, 0, 0.6), 
                        rgba(0, 0, 0, 1)), 
                    url("images/footerWP.jpg")`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "top",
                borderTop: `1px solid ${theme.palette.primary.main}`,
                position: "relative",
            }}
        >
            <Box
                ref={footerRef}
                sx={{
                    position: "absolute",
                    top: "20%",
                    width: " 100%",
                }}
            />

            <Form formRef={formRef} handleSubmit={handleSubmit} />
            <Hexagons />
        </Stack>
    );
};

export default Footer;

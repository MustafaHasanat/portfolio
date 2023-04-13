/* eslint-disable react-hooks/rules-of-hooks */
import { Stack } from "@mui/material";
import React, { useRef } from "react";
import sendEmail from "@/utils/emails/sendEmail";
import Form from "./form";
import { snackbarActions } from "@/utils/store/store";
import { useDispatch } from "react-redux";
import Hexagons from "./hexagons";
import theme from "@/styles/theme";

const Footer = () => {
    const formRef = useRef();
    const dispatch = useDispatch();

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
            component="footer"
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{
                height: "100vh",
                p: 5,
                background: `
                    linear-gradient(
                        rgba(0, 0, 0, 0.6), 
                        rgba(0, 0, 0, 1)), 
                    url("images/footerWP.jpg")`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "top",
                borderTop: `2px solid ${theme.palette.blue.dark}`,
            }}
        >
            <Form formRef={formRef} handleSubmit={handleSubmit} />
            <Hexagons />
        </Stack>
    );
};

export default Footer;

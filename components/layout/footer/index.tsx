/* eslint-disable react-hooks/rules-of-hooks */
import { Box, Button, Stack, useTheme } from "@mui/material";
import React, { useRef, useState } from "react";
import sendEmail from "@/utils/emails/sendEmail";
import Form from "./form";

const Footer = () => {
    const theme = useTheme();
    const formRef = useRef();

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const { text } = sendEmail(e.target);
    };

    return (
        <Stack
            component="footer"
            sx={{
                height: "90vh",
                p: 5,
                background: `
                    linear-gradient(
                        rgba(0, 0, 0, 0.6), 
                        rgba(0, 0, 0, 1)), 
                    url("images/footerWP.jpg")`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "top",
            }}
        >
            <Form formRef={formRef} handleSubmit={handleSubmit} />
        </Stack>
    );
};

export default Footer;

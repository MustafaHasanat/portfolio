import { Box, Stack } from "@mui/material";
import React, { MutableRefObject, useEffect, useRef } from "react";
import Form from "./form";
import { snackbarActions, navigationBarActions } from "@/utils/store/store";
import { useDispatch, useSelector } from "react-redux";
import Hexagons from "./hexagons";
import theme from "@/styles/theme";
import { useInView } from "framer-motion";
import { GlobalAssetProps } from "@/utils/store/globalAssetsSlice";

interface FooterProps {
    footerInView: boolean;
    footerRef: MutableRefObject<null>;
}

const Footer = ({ footerRef, footerInView }: FooterProps) => {
    const formRef = useRef();
    const dispatch = useDispatch();

    useEffect(() => {
        if (footerInView)
            dispatch(navigationBarActions.setCurrentView("footer"));
    }, [dispatch, footerInView]);

    const handleClick = (snackbarMessage: string, color: string) => {
        dispatch(snackbarActions.setColorScheme(color));
        dispatch(snackbarActions.setMessage(snackbarMessage));
        dispatch(snackbarActions.setActive(true));
    };

    const globalAssets = useSelector(
        (state: { globalAssetsReducer: { globalAssets: GlobalAssetProps } }) =>
            state.globalAssetsReducer.globalAssets
    );

    const handleSubmit = (e: any) => {
        e.preventDefault();

        const message = `
            A new message from your portfolio:<br/><br/>
            
            Name: ${e.target.name.value || "not specified"}<br/>
            Email: ${e.target.email.value || "not specified"}<br/>
            Phone: ${e.target.phone.value || "not specified"}<br/><br/>

            Message:<br/>
            ${e.target.message.value}
        `;

        const securedSmtpConfig = {
            SecureToken: process.env.NEXT_PUBLIC_SMTP_SECURED_TOKEN, // TODO: create another one from the website for production page
            To: "mustafa.hasanat99@gmail.com",
            From: "mustfaaayyed@gmail.com",
            Subject: e.target.subject.value,
            Body: message,
        };

        if (window.Email) {
            window.Email.send(securedSmtpConfig).then((message: any) => {
                if (message === "OK") {
                    handleClick(
                        "Your message was sent successfully!",
                        "success"
                    );
                } else {
                    handleClick("Something went wrong on the server", "error");
                }
            });
        }
    };

    return (
        <Stack
            id="layout-footer"
            component="footer"
            direction={{ xs: "column-reverse", lg: "row" }}
            justifyContent={{ xs: "space-evenly", lg: "space-between" }}
            alignItems="center"
            px={{ xs: 2, md: 12 }}
            pb={{ xs: 5, lg: 0 }}
            sx={{
                position: "relative",
                height: { xs: "auto", lg: "100vh" },
                background: `
                    linear-gradient(
                        rgba(0, 0, 0, 0.6), 
                        rgba(0, 0, 0, 1)), 
                        url("${globalAssets?.footerBG?.src}")`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "top",
                borderTop: `1px solid ${theme.palette.primary.main}`,
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

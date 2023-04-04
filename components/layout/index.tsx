import { useState } from "react";
import Footer from "./footer";
import Header from "./header";
import HeadTag from "./headTag";
import Main from "./main";
import { Stack, Box } from "@mui/material";
import { useInView } from "react-intersection-observer";
import Contacts from "./contacts";
import { useSelector, useDispatch } from "react-redux";
import { modalActions } from "@/utils/store/store";

const Layout = ({ children }: { children: React.ReactNode }) => {
    const [switchPointRef, switchPointInView] = useInView();

    const dispatch = useDispatch();
    const isModalActive = useSelector(
        (state: { modalReducer: { isActive: boolean } }) =>
            state.modalReducer.isActive
    );

    return (
        <Stack>
            <HeadTag />

            {isModalActive && (
                <Box
                    component="button"
                    onClick={() => {
                        dispatch(modalActions.setActive(false));
                    }}
                    sx={{
                        position: "fixed",
                        opacity: 0.7,
                        top: 0,
                        left: 0,
                        bgcolor: "black",
                        width: "100vw",
                        height: "100vh",
                        zIndex: 100,
                    }}
                />
            )}

            <Box id="back-filling-box" ref={switchPointRef} />

            <Header switchPointInView={switchPointInView} />
            <Main>{children}</Main>
            <Contacts />

            <Footer />
        </Stack>
    );
};

export default Layout;

import { useEffect, useRef, useState } from "react";
import Footer from "./footer";
import Header from "./header";
import HeadTag from "./headTag";
import Main from "./main";
import { Stack, Box } from "@mui/material";
import Contacts from "./contacts";
import { useSelector, useDispatch } from "react-redux";
import { modalActions } from "@/utils/store/store";
import { useInView } from "framer-motion";

const Layout = ({ children }: { children: React.ReactNode }) => {
    const landingSectionRef = useRef(null);
    const landingSectionInView = useInView(landingSectionRef);

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
                        opacity: 0.8,
                        top: "-50%",
                        left: "-50%",
                        bgcolor: "black",
                        width: "200vw",
                        height: "200vh",
                        zIndex: 100,
                    }}
                />
            )}

            <Box id="back-filling-box" ref={landingSectionRef} />

            <Header landingSectionInView={landingSectionInView} />
            <Main>{children}</Main>
            <Contacts landingSectionInView={landingSectionInView} />

            <Footer />
        </Stack>
    );
};

export default Layout;

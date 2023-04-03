import { useState } from "react";
import Footer from "./footer";
import Header from "./header";
import HeadTag from "./headTag";
import Main from "./main";
import { Stack, Box } from "@mui/material";
import { useInView } from "react-intersection-observer";

const Layout = ({ children }: { children: React.ReactNode }) => {
    const [switchPointRef, switchPointInView] = useInView();

    return (
        <Stack>
            <HeadTag />
            <Box
                id="back-filling-box"
                ref={switchPointRef}
            />

            <Header switchPointInView={switchPointInView} />
            <Main>{children}</Main>
            <Footer />
        </Stack>
    );
};

export default Layout;

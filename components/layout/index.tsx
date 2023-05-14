/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from "react";
import Footer from "./footer";
import Header from "./header";
import HeadTag from "./metadata/headTag";
import Main from "./main";
import { Stack, Box, useTheme } from "@mui/material";
import Contacts from "./contacts";
import { useSelector, useDispatch } from "react-redux";
import { modalActions, globalAssetsActions } from "@/utils/store/store";
import { useInView } from "framer-motion";
import ModalBackLight from "./contacts/modalBackLight";
import SnackBar from "../shared/snackbar";
import NavigationBar from "./navigationBar";
import { Background } from "@/types/background";
import { getAllBackgrounds } from "@/utils/sanity/background";
import { getAllFooterSocials } from "@/utils/sanity/footerSocial";
import { FooterSocial } from "@/types/footerSocial";
import { BackgroundsProps } from "@/utils/store/globalAssetsSlice";

interface LayoutProps {
    children: JSX.Element;
}

const Layout = ({ children }: LayoutProps) => {
    const theme = useTheme();
    const landingSectionRef = useRef(null);
    const landingSectionInView = useInView(landingSectionRef);

    const dispatch = useDispatch();
    const isModalActive = useSelector(
        (state: { modalReducer: { isActive: boolean } }) =>
            state.modalReducer.isActive
    );

    const toggleModalVisibility = (state: boolean) => {
        dispatch(modalActions.setActive(state));
    };

    useEffect(() => {
        const getGlobalAssets = async () => {
            const sanityBackgrounds: Background[] = await getAllBackgrounds();
            const footerSocials: FooterSocial[] = await getAllFooterSocials();

            let backgrounds: BackgroundsProps = {};

            sanityBackgrounds.map((bg) => {
                backgrounds[bg.alt] = {
                    alt: bg.alt,
                    src: bg.src.asset.url,
                };
            });

            dispatch(globalAssetsActions.setBackgrounds(backgrounds));
            dispatch(globalAssetsActions.setFooterSocials(footerSocials));
        };
        getGlobalAssets();
    }, []);

    return (
        <Stack>
            <HeadTag />

            <ModalBackLight
                isModalActive={isModalActive}
                toggleModalVisibility={toggleModalVisibility}
            />

            <Box id="back-box" ref={landingSectionRef} />

            <Header landingSectionInView={landingSectionInView} />
            <Main>{children}</Main>

            <Contacts />
            <SnackBar />
            <NavigationBar landingSectionInView={landingSectionInView} />

            <Footer />
        </Stack>
    );
};

export default Layout;

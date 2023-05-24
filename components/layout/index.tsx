import { useEffect, useRef, useState } from "react";
import Footer from "./footer";
import Header from "./header";
import HeadTag from "./metadata/headTag";
import Main from "./main";
import { Stack, Box, useMediaQuery } from "@mui/material";
import Contacts from "./contacts";
import { useSelector, useDispatch } from "react-redux";
import { modalActions, globalAssetsActions } from "@/utils/store/store";
import { useAnimation, useInView } from "framer-motion";
import ModalBackLight from "./contacts/modalBackLight";
import SnackBar from "../shared/snackbar";
import NavigationBar from "./navigationBar";
import { getAllFooterSocials } from "@/utils/sanity/footerSocial";
import { FooterSocial } from "@/types/footerSocial";
import { GlobalAssetProps } from "@/utils/store/globalAssetsSlice";
import { getAllGlobalAssets } from "@/utils/sanity/globalAsset";
import { GlobalAsset } from "@/types/globalAsset";
import LeftDrawer from "./header/leftDrawer";
import { useRouter } from "next/router";

interface LayoutProps {
    children: JSX.Element;
}

const Layout = ({ children }: LayoutProps) => {
    const router = useRouter();

    const landingSectionRef = useRef(null);
    const landingSectionInView = useInView(landingSectionRef);

    const footerRef = useRef(null);
    const footerInView = useInView(footerRef);

    const headerAnimations = useAnimation();
    const [drawerIsOpened, setDrawerIsOpened] = useState(false);
    const lgScreen = useMediaQuery("(min-width:1440px)");

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
            const sanityGlobalAssets: GlobalAsset[] =
                await getAllGlobalAssets();
            const footerSocials: FooterSocial[] = await getAllFooterSocials();

            let globalAssets: GlobalAssetProps = {};

            sanityGlobalAssets.map((bg) => {
                globalAssets[bg.alt] = {
                    alt: bg.alt,
                    src: bg.src.asset.url,
                };
            });

            dispatch(globalAssetsActions.setGlobalAssets(globalAssets));
            dispatch(globalAssetsActions.setFooterSocials(footerSocials));
        };
        getGlobalAssets();
    }, [dispatch]);

    useEffect(() => {
        setDrawerIsOpened(false);
        document.getElementById("layout-box")?.scrollIntoView({
            behavior: "smooth",
        });
    }, [router.asPath]);

    return (
        <Stack id="layout-box">
            <HeadTag />

            <ModalBackLight
                isModalActive={isModalActive}
                toggleModalVisibility={toggleModalVisibility}
            />

            <Box id="back-box" ref={landingSectionRef} />

            <Header
                landingSectionInView={landingSectionInView}
                headerAnimations={headerAnimations}
                setDrawerIsOpened={setDrawerIsOpened}
                drawerIsOpened={drawerIsOpened}
            />

            {!lgScreen && (
                <LeftDrawer
                    animation={headerAnimations}
                    drawerIsOpened={drawerIsOpened}
                />
            )}
            <Main>{children}</Main>

            <Contacts />
            <SnackBar />
            <NavigationBar landingSectionInView={landingSectionInView} />

            <Footer footerRef={footerRef} footerInView={footerInView} />
        </Stack>
    );
};

export default Layout;

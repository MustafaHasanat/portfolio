import { useRef } from "react";
import Footer from "./footer";
import Header from "./header";
import HeadTag from "./metadata/headTag";
import Main from "./main";
import { Stack, Box } from "@mui/material";
import Contacts from "./contacts";
import { useSelector, useDispatch } from "react-redux";
import { modalActions } from "@/utils/store/store";
import { useInView } from "framer-motion";
import ModalBackLight from "./contacts/modalBackLight";
import SnackBar from "../shared/snackbar";

const Layout = ({ children }: { children: JSX.Element }) => {
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
            <Contacts landingSectionInView={landingSectionInView} />
            <SnackBar />
            <Footer />
        </Stack>
    );
};

export default Layout;

import { Box, Stack } from "@mui/material";
import { ReactNode } from "react";
import { useSelector } from "react-redux";

interface ModalBackLightProps {
    isModalActive: boolean;
    toggleModalVisibility: (state: boolean) => void;
}
const ModalBackLight = ({
    isModalActive,
    toggleModalVisibility,
}: ModalBackLightProps) => {
    const modalContent = useSelector(
        (state: { modalReducer: { modalContent: ReactNode } }) =>
            state.modalReducer.modalContent
    );

    return isModalActive ? (
        <Stack
            justifyContent="center"
            alignItems="center"
            sx={{
                position: "fixed",
                top: "-50%",
                left: "-50%",
                width: "200vw",
                height: "200vh",
                zIndex: 100,
            }}
        >
            <Box
                component="div"
                onClick={() => {
                    toggleModalVisibility(false);
                }}
                sx={{
                    position: "fixed",
                    opacity: 0.8,
                    top: "-50%",
                    left: "-50%",
                    bgcolor: "black",
                    width: "200vw",
                    height: "200vh",
                    zIndex: 101,
                }}
            />

            {modalContent}
        </Stack>
    ) : null;
};

export default ModalBackLight;

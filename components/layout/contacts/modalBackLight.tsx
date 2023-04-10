import { Box } from "@mui/material";

interface ModalBackLightProps {
    isModalActive: boolean;
    toggleModalVisibility: (state: boolean) => void;
}
const ModalBackLight = ({
    isModalActive,
    toggleModalVisibility,
}: ModalBackLightProps) => {
    return isModalActive ? (
        <Box
            component="button"
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
                zIndex: 100,
            }}
        />
    ) : null;
};

export default ModalBackLight;

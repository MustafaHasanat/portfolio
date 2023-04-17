import IonicAvatar from "./ionicAvatar";
import { Box, Stack, useTheme } from "@mui/material";
import { mainSectionStyles } from "./styles";
import DownloadButton from "./downloadButton";
import { MutableRefObject } from "react";

interface MainSectionProps {
    inViewRef: MutableRefObject<null>;
}

const MainSection = ({ inViewRef }: MainSectionProps) => {
    const theme = useTheme();

    return (
        <Stack
            id="home-main"
            sx={mainSectionStyles(theme.palette.blue.main)}
            direction="row"
        >
            <Box
                ref={inViewRef}
                sx={{
                    position: "absolute",
                    top: "50%",
                    width: " 100%",
                }}
            />

            <DownloadButton />
            <IonicAvatar />
        </Stack>
    );
};

export default MainSection;

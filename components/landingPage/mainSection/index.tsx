import IonicAvatar from "./ionicAvatar";
import { Box, Stack, useTheme } from "@mui/material";
import { mainSectionStyles } from "./styles";
import DownloadButton from "./downloadButton";
import { MutableRefObject } from "react";
import { AvatarIcon } from "@/types/avatarIcon";

interface MainSectionProps {
    inViewRef: MutableRefObject<null>;
    avatarIcons: AvatarIcon[]
}

const MainSection = ({ inViewRef, avatarIcons }: MainSectionProps) => {
    const theme = useTheme();

    return (
        <Stack
            id="home-main"
            sx={mainSectionStyles(theme.palette.primary.main)}
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
            <IonicAvatar avatarIcons={avatarIcons} />
        </Stack>
    );
};

export default MainSection;

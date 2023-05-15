import IonicAvatar from "./ionicAvatar";
import { Box, Stack, useTheme } from "@mui/material";
import { mainSectionStyles } from "./styles";
import DownloadButton from "./downloadButton";
import { MutableRefObject } from "react";
import { AvatarIcon } from "@/types/avatarIcon";
import { useSelector } from "react-redux";
import { GlobalAssetProps } from "@/utils/store/globalAssetsSlice";

interface MainSectionProps {
    inViewRef: MutableRefObject<null>;
    avatarIcons: AvatarIcon[];
}

const MainSection = ({ inViewRef, avatarIcons }: MainSectionProps) => {
    const theme = useTheme();

    const globalAssets = useSelector(
        (state: { globalAssetsReducer: { globalAssets: GlobalAssetProps } }) =>
            state.globalAssetsReducer.globalAssets
    );

    return (
        <Stack
            id="home-main"
            sx={mainSectionStyles(
                theme.palette.primary.main,
                globalAssets?.landingPageWP?.src
            )}
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

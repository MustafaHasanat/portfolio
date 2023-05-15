import IonicAvatar from "./ionicAvatar";
import {  Stack, useTheme } from "@mui/material";
import { mainSectionStyles } from "./styles";
import DownloadButton from "./downloadButton";
import { AvatarIcon } from "@/types/avatarIcon";
import { useSelector } from "react-redux";
import { GlobalAssetProps } from "@/utils/store/globalAssetsSlice";

interface MainSectionProps {
    avatarIcons: AvatarIcon[];
}

const MainSection = ({ avatarIcons }: MainSectionProps) => {
    const theme = useTheme();

    const globalAssets = useSelector(
        (state: { globalAssetsReducer: { globalAssets: GlobalAssetProps } }) =>
            state.globalAssetsReducer.globalAssets
    );

    return (
        <Stack
            sx={mainSectionStyles(
                theme.palette.primary.main,
                globalAssets?.landingPageWP?.src
            )}
            direction="row"
        >
            <DownloadButton />
            <IonicAvatar avatarIcons={avatarIcons} />
        </Stack>
    );
};

export default MainSection;

import IonicAvatar from "./ionicAvatar";
import { Stack } from "@mui/material";
import { mainSectionStyles } from "./styles";
import DownloadButton from "./downloadButton";

const MainSection = () => {
    return (
        <Stack sx={mainSectionStyles} direction="row">
            <DownloadButton />
            <IonicAvatar />
        </Stack>
    );
};

export default MainSection;

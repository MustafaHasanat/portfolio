import IonicAvatar from "./ionicAvatar";
import { Typography, useTheme } from "@mui/material";
import { Stack } from "@mui/material";
import { mainSectionStyles, welcomeTextStyles } from "./styles";
import DownloadButton from "./downloadButton";

const MainSection = () => {
    const theme = useTheme();

    return (
        <Stack sx={mainSectionStyles} direction="row">
            <Typography sx={welcomeTextStyles(theme.palette.base.light)}>
                welcome to my portfolio!
            </Typography>

            <DownloadButton />
            <IonicAvatar />
        </Stack>
    );
};

export default MainSection;

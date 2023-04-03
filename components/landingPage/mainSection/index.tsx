import IonicAvatar from "./ionicAvatar";
import { Stack } from "@mui/material";
import TypingBox from "./typingBox";
import { mainSectionStyles } from "./styles";

const MainSection = () => {
    return (
        <Stack sx={mainSectionStyles} direction="row">
            <TypingBox />
            <IonicAvatar />
        </Stack>
    );
};

export default MainSection;

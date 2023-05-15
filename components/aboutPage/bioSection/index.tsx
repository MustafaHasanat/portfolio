import { Box, useTheme } from "@mui/material";
import { MutableRefObject } from "react";
import ButtonSet from "./buttonSet";
import { useSelector } from "react-redux";
import { GlobalAssetProps } from "@/utils/store/globalAssetsSlice";
import { title } from "./blocks";
import ImageBox from "./imageBox";
import ParagraphBox from "./paragraphBox";

interface BioSectionProps {
    inViewRef: MutableRefObject<null>;
}

const BioSection = ({ inViewRef }: BioSectionProps) => {
    const theme = useTheme();

    const globalAssets = useSelector(
        (state: { globalAssetsReducer: { globalAssets: GlobalAssetProps } }) =>
            state.globalAssetsReducer.globalAssets
    );

    return (
        <Box
            id="about-bio"
            pt="20vh"
            pb={10}
            px={18}
            position="relative"
            bgcolor={theme.palette.secondary.main}
            height="100vh"
        >
            <Box
                ref={inViewRef}
                sx={{
                    position: "absolute",
                    top: "50%",
                    width: " 100%",
                }}
            />

            {ImageBox({
                src: globalAssets?.mySecondAvatar?.src,
                alt: "avatar",
                width: "30vw",
                height: "30vw",
                shadowColor: theme.palette.secondary.main,
                extraSX: {
                    float: "right",
                    ml: 5,
                    mb: 2,
                },
            })}

            {title({
                text: "a little about me",
                color: theme.palette.text.primary,
                variant: "h3"
            })}

            {ParagraphBox({
                text: "My name is Mustafa Alhasanat, I'm a software engineer with a background in electronics engineering. I build web applications, mobile applications, and robotic prototypes.",
                color: theme.palette.text.primary,
            })}
            
            {ParagraphBox({
                text: "After spending two years of self-learning and taking various bootcamps in the technical field, I knows what is truly needed to keep improving my skills constantly. I had gained a set of skills during the process including problem-solving, efficient self-learning and time management.",
                color: theme.palette.text.primary,
            })}

            <ButtonSet />
        </Box>
    );
};

export default BioSection;

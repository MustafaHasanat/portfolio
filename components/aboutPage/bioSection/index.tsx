import { Box, useTheme } from "@mui/material";
import { MutableRefObject } from "react";
import ButtonSet from "./buttonSet";
import { useSelector } from "react-redux";
import { GlobalAssetProps } from "@/utils/store/globalAssetsSlice";
import Title from "./title";
import ImageBox from "./imageBox";
import ParagraphBox from "./paragraphBox";
import { BioSectionProps, MainBoxStyles } from "./styles";

const BioSection = ({}: BioSectionProps) => {
    const theme = useTheme();

    const globalAssets = useSelector(
        (state: { globalAssetsReducer: { globalAssets: GlobalAssetProps } }) =>
            state.globalAssetsReducer.globalAssets
    );

    return (
        <Box p={0} sx={MainBoxStyles(theme.palette.secondary.main)}>
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    width: " 100%",
                }}
            />

            {ImageBox({
                src: globalAssets?.mySecondAvatar?.src,
                alt: "avatar",
                width: { xs: "50vw", lg: "30vw" },
                height: { xs: "50vw", lg: "30vw" },
                shadowColor: theme.palette.secondary.main,
                extraSX: {
                    float: { xs: "unset", lg: "right" },
                    ml: { xs: 0, lg: 5 },
                    mb: 2,
                },
            })}

            {Title({
                text: "a little about me",
                color: theme.palette.text.primary,
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

import { Box, useTheme } from "@mui/material";
import ButtonSet from "./buttonSet";
import Title from "./title";
import ImageBox from "./imageBox";
import ParagraphBox from "./paragraphBox";
import { BioSectionProps, MainBoxStyles } from "./styles";

const BioSection = ({ inViewRef }: BioSectionProps) => {
    const theme = useTheme();

    return (
        <Box sx={MainBoxStyles(theme.palette.secondary.main)} id="about-bio">
            <Box
                ref={inViewRef}
                sx={{
                    position: "absolute",
                    top: "50%",
                    width: " 100%",
                }}
            />

            {ImageBox({
                src: "/images/avatar.jpg",
                alt: "avatar",
                width: { xs: "90vw", md: "50vw", lg: "30vw" },
                height: { xs: "90vw", md: "50vw", lg: "30vw" },
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

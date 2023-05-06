import { Avatar, Box, Typography, useTheme } from "@mui/material";
import { MutableRefObject } from "react";
import ButtonSet from "./buttonSet";
import { useSelector } from "react-redux";
import { BackgroundsProps } from "@/utils/store/globalAssetsSlice";

interface BioSectionProps {
    inViewRef: MutableRefObject<null>;
}

const BioSection = ({ inViewRef }: BioSectionProps) => {
    const theme = useTheme();

    const backgrounds = useSelector(
        (state: { globalAssetsReducer: { backgrounds: BackgroundsProps } }) =>
            state.globalAssetsReducer.backgrounds
    );

    const title = (text: string) => {
        return (
            <Typography
                color={theme.palette.text.primary}
                fontSize="3vw"
                textTransform="capitalize"
                mb={3}
                fontWeight="bold"
            >
                {text}
            </Typography>
        );
    };

    const paragraph = (text: string) => {
        return (
            <Typography
                color={theme.palette.text.primary}
                fontSize="1.5vw"
                textAlign="justify"
                mb={3}
            >
                {text}
            </Typography>
        );
    };

    const imgBox = (src: string, alt: string) => {
        return (
            <Box
                position="relative"
                ml={5}
                mb={2}
                sx={{
                    float: "right",
                }}
            >
                <Box
                    sx={{
                        width: "25vw",
                        height: "25vw",
                        zIndex: 3,
                        boxShadow: `0 0 20px 10px ${theme.palette.secondary.main} inset`,
                        position: "absolute",
                    }}
                />
                <Avatar
                    variant="square"
                    src={src}
                    alt={alt}
                    sx={{
                        zIndex: 2,
                        width: "25vw",
                        height: "auto",
                    }}
                />
            </Box>
        );
    };

    return (
        <Box
            id="about-bio"
            pt="20vh"
            pb={10}
            px={18}
            position="relative"
            bgcolor={theme.palette.secondary.main}
        >
            <Box
                ref={inViewRef}
                sx={{
                    position: "absolute",
                    top: "50%",
                    width: " 100%",
                }}
            />

            {imgBox(backgrounds?.mySecondAvatar?.src, "avatar")}
            {title("a little about me")}
            {paragraph(
                "My name is Mustafa Alhasanat, I'm a software engineer with a background in electronics engineering. I build web applications, mobile applications, and robotic prototypes."
            )}
            {paragraph(
                "After spending two years of self-learning and taking various bootcamps in the technical field, I knows what is truly needed to keep improving my skills constantly. I had gained a set of skills during the process including problem-solving, efficient self-learning and time management."
            )}
            {paragraph(
                "I always ensure to enjoy my work to follow my huge ambition to work on an international software company that builds products which will have a worldwide impact on people's lives. I really believe that it will guarantee for me the constant self-growth I truly desire for both technical and soft skills, beside providing me the opportunity to work with world's top experts."
            )}

            <ButtonSet />

            {paragraph(
                "In addition, I love teaching what I learn to others. Either by my shared online documents, courses, or workshops. I have +3000 students around the world enrolled in my Udemy programming courses, and I have trained several groups of children on building small robots."
            )}
            {paragraph(
                "I value affiliation, and loves being in a group of colleagues whom I can exchange knowledge and experiences with them. I also prioritizes precision, discipline, and the value of time. At my free time, I enjoy drawing and learning new languages."
            )}
        </Box>
    );
};

export default BioSection;

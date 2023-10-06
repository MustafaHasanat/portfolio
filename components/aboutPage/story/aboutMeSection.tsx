import { useTheme } from "@mui/material";
import Title from "@/components/aboutPage/bioSection/title";
import ImageBox from "@/components/aboutPage/bioSection/imageBox";
import ParagraphBox from "@/components/aboutPage/bioSection/paragraphBox";

const AboutMeSection = () => {
    const theme = useTheme();

    return (
        <section>
            {Title({
                text: "about me",
                color: theme.palette.text.primary,
            })}
            {ImageBox({
                src: "/images/avatar.jpg",
                alt: "avatar",
                width: { xs: "90vw", md: "40vw", lg: "25vw" },
                height: { xs: "90vw", md: "40vw", lg: "25vw" },
                shadowColor: theme.palette.secondary.main,
                extraSX: {
                    float: { xs: "unset", lg: "right" },
                    ml: { xs: 0, lg: 5 },
                },
            })}
            {ParagraphBox({
                text: "My name is Mustafa Alhasanat, I'm a software engineer with a background in electronics engineering. I build web applications, mobile applications, and robotic prototypes.",
                color: theme.palette.text.primary,
            })}
            {ParagraphBox({
                text: "After spending two years of self-learning and taking various bootcamps in the technical field, I knows what is truly needed to keep improving my skills constantly. I had gained a set of skills during the process including problem-solving, efficient self-learning and time management.",
                color: theme.palette.text.primary,
            })}
            {ParagraphBox({
                text: "I always ensure to enjoy my work to follow my huge ambition to work on an international software company that builds products which will have a worldwide impact on people's lives. I really believe that it will guarantee for me the constant self-growth I truly desire for both technical and soft skills, beside providing me the opportunity to work with world's top experts.",
                color: theme.palette.text.primary,
            })}
            {ParagraphBox({
                text: "In addition, I love teaching what I learn to others. Either by my shared online documents, courses, or workshops. I have +3000 students around the world enrolled in my Udemy programming courses, and I have trained several groups of children on building small robots.",
                color: theme.palette.text.primary,
            })}
            {ParagraphBox({
                text: "I value affiliation, and loves being in a group of colleagues whom I can exchange knowledge and experiences with them. I also prioritizes precision, discipline, and the value of time. At my free time, I enjoy drawing and learning new languages.",
                color: theme.palette.text.primary,
            })}
        </section>
    );
};

export default AboutMeSection;

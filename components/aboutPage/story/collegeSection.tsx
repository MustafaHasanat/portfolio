import { useTheme } from "@mui/material";
import Title from "@/components/aboutPage/bioSection/title";
import ImageBox from "@/components/aboutPage/bioSection/imageBox";
import ParagraphBox from "@/components/aboutPage/bioSection/paragraphBox";

const CollegeSection = () => {
    const theme = useTheme();

    return (
        <section>
            {Title({
                text: "college",
                color: theme.palette.text.primary,
                extraSX: {
                    mt: 5,
                },
            })}

            {ImageBox({
                src: "/images/graduationPhoto.jpg",
                alt: "avatar",
                width: { xs: "90vw", md: "21vw", lg: "17vw" },
                height: { xs: "126vw", md: "30vw", lg: "21vw" },
                shadowColor: theme.palette.secondary.main,
                extraSX: {
                    float: { xs: "none", md: "left" },
                    mr: { xs: 0, md: 5 },
                    mt: { xs: 0, lg: 5 },
                },
            })}

            {ParagraphBox({
                text: "In September 2021, I have graduated with a Bachelor's degree in Telecommunications and Electronics Engineering from Tafila Technical University located in Jordan with an excellent grade. During those four years, I got the opportunity to learn the various types of telecommunication systems and how they work together. I also learned the basics of the electronics and their relations to the communication systems.",
                color: theme.palette.text.primary,
            })}
            {ParagraphBox({
                text: "Since I was in college, I was eager to learn new things and develop my knowledge. So, I learned how to design and program robots using Arduino and Raspberry Pi, build IoT systems using ESP, create small websites, and learned Python because was fun to learn and apply.",
                color: theme.palette.text.primary,
            })}
            {ParagraphBox({
                text: "Using this set of skills I have developed, I was able to be a valuable member of many small clubs in college like IEEE. I had the chance to present workshops, make courses, and share my knowledge with others. In addition, I was able to work as a freelancer wth a small local company to build robotic projects, design wooden objects using teh CNC laser machine, and create small parts for projects using a 3D printer",
                color: theme.palette.text.primary,
            })}
        </section>
    );
};

export default CollegeSection;

import { Box, useTheme } from "@mui/material";
import { useSelector } from "react-redux";
import { GlobalAssetProps } from "@/utils/store/globalAssetsSlice";
import { title } from "@/components/aboutPage/bioSection/blocks";
import ImageBox from "@/components/aboutPage/bioSection/imageBox";
import ParagraphBox from "@/components/aboutPage/bioSection/paragraphBox";

export default function Story() {
    const theme = useTheme();

    const globalAssets = useSelector(
        (state: { globalAssetsReducer: { globalAssets: GlobalAssetProps } }) =>
            state.globalAssetsReducer.globalAssets
    );

    return (
        <Box
            pt="20vh"
            pb={10}
            px={18}
            position="relative"
            bgcolor={theme.palette.secondary.main}
        >
            {ImageBox({
                src: globalAssets?.mySecondAvatar?.src,
                alt: "avatar",
                width: "25vw",
                height: "25vw",
                shadowColor: theme.palette.secondary.main,
                extraSX: {
                    float: "right",
                    ml: 5,
                },
            })}
            {title({
                text: "about me",
                color: theme.palette.text.primary,
                variant: "h3",
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
            {ImageBox({
                src: globalAssets?.graduationPhoto?.src,
                alt: "avatar",
                width: "25vw",
                height: "70vh",
                shadowColor: theme.palette.secondary.main,
                extraSX: {
                    float: "left",
                    mr: 5,
                    mt: 5,
                },
            })}
            {title({
                text: "college",
                color: theme.palette.text.primary,
                variant: "h4",
                extraSX: {
                    mt: 5,
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
            {ImageBox({
                src: globalAssets?.ltucPhoto?.src,
                alt: "avatar",
                width: "35vw",
                height: "45vh",
                shadowColor: theme.palette.secondary.main,
                extraSX: {
                    float: "right",
                    ml: 5,
                    mt: 5,
                },
            })}
            {title({
                text: "career shift",
                color: theme.palette.text.primary,
                variant: "h4",
                extraSX: {
                    mt: 5,
                },
            })}
            {ParagraphBox({
                text: "After one year of graduation from college with an Excellent grade, I found my true passion in programming. I was already familiar with this field, so I only needed a boost to my programming skills -which I was considering it as a hobby back then- to become my life career.",
                color: theme.palette.text.primary,
            })}
            {ParagraphBox({
                text: "For six months, I had attended a bootcamp in web development at LTUC (Luminous Technical University College) in Jordan. The curriculum was build by a international company called Code Fellows. It covers the process of building a whole website including building the frontend using React, the backend with Django, unit tests with Jest, and finally, deploying on Vercel or Heroku servers.",
                color: theme.palette.text.primary,
            })}
            {ImageBox({
                src: globalAssets?.workPhoto?.src,
                alt: "avatar",
                width: "30vw",
                height: "50vh",
                shadowColor: theme.palette.secondary.main,
                extraSX: {
                    float: "left",
                    mr: 5,
                    mt: 5,
                },
            })}
            {title({
                text: "first job in the field",
                color: theme.palette.text.primary,
                variant: "h4",
                extraSX: {
                    mt: 5,
                },
            })}
            {ParagraphBox({
                text: "Just after finishing the bootcamp, I had got hired as a Software and Quality Engineer in SociumTech, an international mid-sized company with US clients located in Jordan.",
                color: theme.palette.text.primary,
            })}
            {ParagraphBox({
                text: "During my training time in the company, I had sharpen my technical skills and expanded the web and mobile frameworks I had to include Next, React Native, Flutter, Angular, Node, and Flask.",
                color: theme.palette.text.primary,
            })}
            {ParagraphBox({
                text: "I had got the opportunity to be a part of a big team who is working for a huge US client in a project with +150 million users/month across all their brands.",
                color: theme.palette.text.primary,
            })}
        </Box>
    );
}

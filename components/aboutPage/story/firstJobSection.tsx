import { useMediaQuery, useTheme } from "@mui/material";
import Title from "@/components/aboutPage/bioSection/title";
import ImageBox from "@/components/aboutPage/bioSection/imageBox";
import ParagraphBox from "@/components/aboutPage/bioSection/paragraphBox";
import { mqHook } from "@/styles/mq";

const FirstJobSection = () => {
    const theme = useTheme();
    const lgScreen = useMediaQuery(mqHook.LG);

    return (
        <section>
            {Title({
                text: "first job in the field",
                color: theme.palette.text.primary,
                extraSX: {
                    mt: 5,
                },
            })}
            {ImageBox({
                src: "/images/workPhoto.jpg",
                alt: "avatar",
                width: { xs: "90vw", md: "50vw", lg: "35vw" },
                height: { xs: "68vw", md: "38vw", lg: "26vw" },
                shadowColor: theme.palette.secondary.main,
                extraSX: {
                    float: { xs: "none", md: "left" },
                    mr: { xs: 0, md: 5 },
                    mt: { xs: 0, md: 5 },
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
        </section>
    );
};

export default FirstJobSection;

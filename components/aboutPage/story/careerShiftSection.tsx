import { useMediaQuery, useTheme } from "@mui/material";
import Title from "@/components/aboutPage/bioSection/title";
import ImageBox from "@/components/aboutPage/bioSection/imageBox";
import ParagraphBox from "@/components/aboutPage/bioSection/paragraphBox";
import { mqHook } from "@/styles/mq";

const CareerShiftSection = () => {
    const theme = useTheme();
    const lgScreen = useMediaQuery(mqHook.LG);

    return (
        <section>
            {Title({
                text: "career shift",
                color: theme.palette.text.primary,
                extraSX: {
                    mt: 5,
                },
            })}
            {ImageBox({
                src: "/images/ltucPhoto.jpg",
                alt: "avatar",
                width: { xs: "90vw", md: "50vw", lg: "35vw" },
                height: { xs: "51vw", md: "28vw", lg: "20vw" },
                shadowColor: theme.palette.secondary.main,
                extraSX: {
                    float: { xs: "none", md: "right" },
                    ml: { xs: 0, md: 5 },
                    mt: { xs: 0, md: 5 },
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
        </section>
    );
};

export default CareerShiftSection;

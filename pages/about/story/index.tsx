import { Box, useTheme } from "@mui/material";
import AboutMeSection from "@/components/aboutPage/story/aboutMeSection";
import CollegeSection from "@/components/aboutPage/story/collegeSection";
import CareerShiftSection from "@/components/aboutPage/story/careerShiftSection";
import FirstJobSection from "@/components/aboutPage/story/firstJobSection";

export default function Story() {
    const theme = useTheme();

    return (
        <Box
            pt={{ xs: "12vh", md: "20vh" }}
            pb={10}
            px={{ xs: 3, lg: 18 }}
            position="relative"
            bgcolor={theme.palette.secondary.main}
            letterSpacing="3px"
            lineHeight="1"
        >
            <AboutMeSection />
            <hr/>
            <CollegeSection />
            <hr/>
            <CareerShiftSection />
            <hr/>
            <FirstJobSection />
        </Box>
    );
}

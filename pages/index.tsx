import MainSection from "@/components/landingPage/mainSection";
import ProductSection from "@/components/landingPage/productSection";
import SkillsSection from "@/components/landingPage/skillsSection";
import { Stack } from "@mui/material";

export default function Home() {
    return (
        <Stack>
            <MainSection />
            <ProductSection />
            <SkillsSection />
        </Stack>
    );
}

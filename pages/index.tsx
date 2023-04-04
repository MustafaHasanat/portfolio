import MainSection from "@/components/landingPage/mainSection";
import ProductSection from "@/components/landingPage/productSection";
import { Stack } from "@mui/material";

export default function Home() {
    return (
        <Stack>
            <MainSection />
            <ProductSection />
        </Stack>
    );
}

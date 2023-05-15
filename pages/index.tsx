import MainSection from "@/components/landingPage/mainSection";
import ProductSection from "@/components/landingPage/productSection";
import QuotesSection from "@/components/landingPage/quotesSection";
import SkillsSection from "@/components/landingPage/skillsSection";
import { navigationBarActions } from "@/utils/store/store";
import { Box, Stack } from "@mui/material";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Quote } from "@/types/quote";
import { getAllQuotes } from "@/utils/sanity/quote";
import { AvatarIcon } from "@/types/avatarIcon";
import { getAllAvatarIcons } from "@/utils/sanity/avatarIcon";
import { getAllProducts } from "@/utils/sanity/product";
import { Product } from "@/types/product";
import { SkillSet } from "@/types/skillSet";
import { getAllSkillSets } from "@/utils/sanity/skillSet";
import TestimonialSection from "@/components/landingPage/successStoriesSection";
import sortByOrder from "@/utils/helpers/sortByOrder";

export const getStaticProps = async (): Promise<{
    props: {
        quotes: Quote[];
        avatarIcons: AvatarIcon[];
        products: Product[];
        skillSets: SkillSet[];
    };
}> => {
    const quotes = await getAllQuotes();
    const avatarIcons = await getAllAvatarIcons();
    const products = await getAllProducts();
    const skillSets = await getAllSkillSets();

    return {
        props: { quotes, avatarIcons, products, skillSets },
    };
};

interface HomeProps {
    quotes: Quote[];
    avatarIcons: AvatarIcon[];
    products: Product[];
    skillSets: SkillSet[];
}

export default function Home({
    quotes,
    avatarIcons,
    products,
    skillSets,
}: HomeProps) {
    const currentView = useSelector(
        (state: { navigationBarReducer: { currentView: string } }) =>
            state.navigationBarReducer.currentView
    );

    const mainSecRef = useRef(null);
    const productSecRef = useRef(null);
    const skillsSecRef = useRef(null);
    const quotesSecRef = useRef(null);

    const mainSecInView = useInView(mainSecRef);
    const productSecInView = useInView(productSecRef);
    const skillsSecInView = useInView(skillsSecRef);
    const quotesSecInView = useInView(quotesSecRef);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            navigationBarActions.setHomeView({
                main: currentView === "home-main" ? true : false,
                product: currentView === "home-product" ? true : false,
                skills: currentView === "home-skills" ? true : false,
                quotes: currentView === "home-quotes" ? true : false,
            })
        );
    }, [currentView, dispatch]);

    useEffect(() => {
        if (mainSecInView)
            dispatch(navigationBarActions.setCurrentView("home-main"));
        if (productSecInView)
            dispatch(navigationBarActions.setCurrentView("home-product"));
        if (skillsSecInView)
            dispatch(navigationBarActions.setCurrentView("home-skills"));
        if (quotesSecInView)
            dispatch(navigationBarActions.setCurrentView("home-quotes"));
    }, [
        mainSecInView,
        productSecInView,
        skillsSecInView,
        quotesSecInView,
        dispatch,
    ]);

    return (
        <Stack>
            <Box
                id="home-main"
                ref={mainSecRef}
                sx={{
                    position: "relative",
                    height: "101vh",
                    width: " 100%",
                }}
            >
                <Box
                    sx={{
                        position: "absolute",
                        top: "30%",
                        width: " 100%",
                    }}
                />
            </Box>

            <MainSection avatarIcons={avatarIcons} />
            <ProductSection
                inViewRef={productSecRef}
                products={sortByOrder(products)}
            />
            <SkillsSection inViewRef={skillsSecRef} skillSets={skillSets} />
            {/* <TestimonialSection /> */}
            <QuotesSection inViewRef={quotesSecRef} quotes={quotes} />
        </Stack>
    );
}

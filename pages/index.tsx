/* eslint-disable react-hooks/exhaustive-deps */
import MainSection from "@/components/landingPage/mainSection";
import ProductSection from "@/components/landingPage/productSection";
import QuotesSection from "@/components/landingPage/quotesSection";
import SkillsSection from "@/components/landingPage/skillsSection";
import { navigationBarActions } from "@/utils/store/store";
import { Stack } from "@mui/material";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Quote } from "@/types/quote";
import { getAllQuotes } from "@/utils/sanity/quote";
import { AvatarIcon } from "@/types/avatarIcon";
import { getAllAvatarIcons } from "@/utils/sanity/avatarIcon";

export const getStaticProps = async (): Promise<{
    props: { quotes: Quote[]; avatarIcons: AvatarIcon[] };
}> => {
    const quotes = await getAllQuotes();
    const avatarIcons = await getAllAvatarIcons();

    return {
        props: { quotes, avatarIcons },
    };
};

interface HomeProps {
    quotes: Quote[];
    avatarIcons: AvatarIcon[];
}

export default function Home({ quotes, avatarIcons }: HomeProps) {
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
    }, [currentView]);

    useEffect(() => {
        if (mainSecInView)
            dispatch(navigationBarActions.setCurrentView("home-main"));
        if (productSecInView)
            dispatch(navigationBarActions.setCurrentView("home-product"));
        if (skillsSecInView)
            dispatch(navigationBarActions.setCurrentView("home-skills"));
        if (quotesSecInView)
            dispatch(navigationBarActions.setCurrentView("home-quotes"));
    }, [mainSecInView, productSecInView, skillsSecInView, quotesSecInView]);

    return (
        <Stack>
            <MainSection inViewRef={mainSecRef} avatarIcons={avatarIcons} />
            <ProductSection inViewRef={productSecRef} />
            <SkillsSection inViewRef={skillsSecRef} />
            <QuotesSection inViewRef={quotesSecRef} quotes={quotes} />
        </Stack>
    );
}

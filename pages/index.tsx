/* eslint-disable react-hooks/exhaustive-deps */
import MainSection from "@/components/landingPage/mainSection";
import ProductSection from "@/components/landingPage/productSection";
import QuotesSecction from "@/components/landingPage/quotesSection";
import SkillsSection from "@/components/landingPage/skillsSection";
import { navigationBarActions } from "@/utils/store/store";
import { Stack } from "@mui/material";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
    const currentView = useSelector(
        (state: { navigationBarReducer: { currentView: string } }) =>
            state.navigationBarReducer.currentView
    );

    // const [currentView, setCurrentView] = useState("home-main");

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
    }, [mainSecInView]);

    useEffect(() => {
        if (productSecInView)
            dispatch(navigationBarActions.setCurrentView("home-product"));
    }, [productSecInView]);

    useEffect(() => {
        if (skillsSecInView)
            dispatch(navigationBarActions.setCurrentView("home-skills"));
    }, [skillsSecInView]);

    useEffect(() => {
        if (quotesSecInView)
            dispatch(navigationBarActions.setCurrentView("home-quotes"));
    }, [quotesSecInView]);

    return (
        <Stack>
            <MainSection inViewRef={mainSecRef} />
            <ProductSection inViewRef={productSecRef} />
            <SkillsSection inViewRef={skillsSecRef} />
            <QuotesSecction inViewRef={quotesSecRef} />
        </Stack>
    );
}

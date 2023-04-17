import { createSlice } from "@reduxjs/toolkit";

interface HomePageProps {
    main: boolean;
    product: boolean;
    skills: boolean;
    quotes: boolean;
}

const initialNavigationBarState: {
    bars: string[];
    currentView: string;
    homePage: HomePageProps;
} = {
    bars: [],
    currentView: "",
    homePage: {
        main: true,
        product: false,
        skills: false,
        quotes: false,
    },
};

export const navigationBarSlice = createSlice({
    name: "modal",
    initialState: initialNavigationBarState,
    reducers: {
        setBars(state, action: { payload: string[] }) {
            state.bars = action.payload;
        },
        setCurrentView(state, action: { payload: string }) {
            state.currentView = action.payload;
        },
        setHomeView(state, action: { payload: HomePageProps }) {
            state.homePage = action.payload;
        },
    },
});

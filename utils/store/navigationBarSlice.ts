import { createSlice } from "@reduxjs/toolkit";

export interface HomePageProps {
    main: boolean;
    product: boolean;
    skills: boolean;
    quotes: boolean;
}

export interface AboutPageProps {
    bio: boolean;
    education: boolean;
    experience: boolean;
    certificates: boolean;
    languages: boolean;
}

export interface DocsPageProps {
    fundamentals: boolean;
    frontend: boolean;
    backend: boolean;
    tools: boolean;
}

const initialNavigationBarState: {
    bars: string[];
    currentView: string;
    homePage: HomePageProps;
    aboutPage: AboutPageProps;
    docsPage: DocsPageProps;
} = {
    bars: [],
    currentView: "",

    homePage: {
        main: true,
        product: false,
        skills: false,
        quotes: false,
    },
    aboutPage: {
        bio: true,
        education: false,
        experience: false,
        certificates: false,
        languages: false,
    },
    docsPage: {
        fundamentals: true,
        frontend: false,
        backend: false,
        tools: false,
    },
};

export const navigationBarSlice = createSlice({
    name: "navigationBar",
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
        setAboutView(state, action: { payload: AboutPageProps }) {
            state.aboutPage = action.payload;
        },
        setDocsView(state, action: { payload: DocsPageProps }) {
            state.docsPage = action.payload;
        },
    },
});

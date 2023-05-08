import { FooterSocial } from "@/types/footerSocial";
import { createSlice } from "@reduxjs/toolkit";

export interface BackgroundsProps {
    [key: string]: {
        src: string;
        alt: string;
    };
}

const initialGlobalAssetsState: {
    backgrounds: BackgroundsProps;
    footerSocials: FooterSocial[];
} = {
    backgrounds: {
        example: {
            src: "",
            alt: "",
        },
    },
    footerSocials: [],
};

export const globalAssetsSlice = createSlice({
    name: "globalAssets",
    initialState: initialGlobalAssetsState,
    reducers: {
        setBackgrounds(state, action) {
            state.backgrounds = action.payload;
        },
        setFooterSocials(state, action) {
            state.footerSocials = action.payload;
        },
    },
});

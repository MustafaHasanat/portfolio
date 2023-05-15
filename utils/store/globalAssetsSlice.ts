import { FooterSocial } from "@/types/footerSocial";
import { createSlice } from "@reduxjs/toolkit";

export interface GlobalAssetProps {
    [key: string]: {
        src: string;
        alt: string;
    };
}

const initialGlobalAssetsState: {
    globalAssets: GlobalAssetProps;
    footerSocials: FooterSocial[];
} = {
    globalAssets: {
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
        setGlobalAssets(state, action) {
            state.globalAssets = action.payload;
        },
        setFooterSocials(state, action) {
            state.footerSocials = action.payload;
        },
    },
});

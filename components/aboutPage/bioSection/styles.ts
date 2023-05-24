import { MutableRefObject } from "react";

export const MainBoxStyles = (bgcolor: string) => {
    return {
        position: "relative",
        bgcolor: bgcolor,
        height: { xs: "auto", lg: "100vh" },
        pt: { xs: "10vh", lg: "20vh" },
        pb: { xs: 5, lg: 10 },
        px: { xs: 5, md: 10, lg: 18 },
    };
};

// interfaces

export interface BioSectionProps {
    inViewRef: MutableRefObject<null>;
}

export interface ImageBoxProps {
    src: string;
    alt: string;
    width: any;
    height: any;
    shadowColor: string;
    extraSX?: any;
}

export interface TitleProps {
    text: string;
    color: string;
    extraSX?: any;
}

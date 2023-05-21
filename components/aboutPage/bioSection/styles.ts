export const MainBoxStyles = (bgcolor: string) => {
    return {
        position: { xs: "relative", lg: "fixed" },
        bgcolor: bgcolor,
        height: { xs: "auto", lg: "100vh" },
        pt: { xs: "10vh", lg: "20vh" },
        pb: { xs: 5, lg: 10 },
        pl: { xs: 10, lg: 18 },
        pr: { xs: 5, lg: 18 },
    };
};

// interfaces

export interface BioSectionProps {}

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

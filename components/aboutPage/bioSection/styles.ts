export const MainBoxStyles = (bgcolor: string) => {
    return {
        position: "fixed",
        bgcolor: bgcolor,
        height: "100vh",
        pt: "20vh",
        pb: 10,
        px: 18,
    };
};

// interfaces

export interface BioSectionProps {}

export interface ImageBoxProps {
    src: string;
    alt: string;
    width: string;
    height: string;
    shadowColor: string;
    extraSX?: any;
}

export interface TitleProps {
    text: string;
    color: string;
    variant: any;
    extraSX?: any;
}
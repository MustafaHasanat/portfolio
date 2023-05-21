import { Course } from "@/types/course";
import constants from "@/utils/constants";
import { Dispatch, SetStateAction } from "react";

export const chartDataConfig = (coursesData: number[]) => {
    return {
        labels: constants.about.categories,
        datasets: [
            {
                label: "courses",
                data: coursesData,
                backgroundColor: constants.about.chartTypes.colors,
            },
        ],
    };
};

export const radialChartOptions = {
    scales: {
        r: {
            beginAtZero: true,
            ticks: {
                display: false,
            },
        },
    },
};

export const chartStyles = (bgcolor: string) => {
    return {
        width: "100%",
        height: "auto",
        backgroundColor: bgcolor,
    };
};

export const ListBoxStyles = (bgcolor: string) => {
    return {
        bgcolor: bgcolor,
        width: "100%",
        height: { xs: "auto", md: "28rem" },
        alignItems: "center",
        borderRadius: 3,
        p: 4,
        zIndex: 2,
    };
};

export const ChartControllerStyles = (extraSX: any) => {
    return {
        alignItems: "flex-end",
        position: { xs: "relative", lg: "absolute" },
        right: { xs: 0, lg: -20 },
        borderRadius: 2,
        py: 1,
        px: 2,
        my: { xs: 2, lg: 0 },
        spacing: 1,
        width: { xs: "100%", sm: "50%", md: "30%", lg: 200 },
        zIndex: 1,
        ...extraSX,
    };
};

export const CourseCardStyles = (bgcolor: string) => {
    return {
        bgcolor: bgcolor,
        borderRadius: 2,
        overflow: "hidden",
        width: "100%",
        alignItems: "center",
    };
};

export const CourseCardUpperBoxStyles = (bgcolor: string) => {
    return {
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        bgcolor: bgcolor,
        cursor: "pointer",
        transition: "opacity 0.3s ease",
        minHeight: "4rem",
        maxHeight: "4rem",
        position: "relative",

        ":hover": {
            opacity: 0.5,
        },
    };
};

export const CourseCardImageStyles = {
    width: "auto",
    height: "auto",
    cursor: "pointer",
    transition: "transform 0.3s ease",
    display: "flex",
    justifyContent: "center",

    "&:hover": {
        transform: "scale(1.1)",
    },
};

// interfaces

export interface CertsChartProps {
    courses: Course[];
    chartType: string;
    setFilterPhrase: Dispatch<SetStateAction<string>>;
    setGlobalIndex: (currentIndex: number) => void;
}

export interface CertsListProps {
    courses: Course[];
    chartType: string;
    filterPhrase: string;
    toggleCard: (currentIndex: number) => void;
    isCardOpened: (index: number) => boolean;
    setChartType: Dispatch<SetStateAction<string>>;
    setModalPhoto: Dispatch<SetStateAction<string>>;
}

export interface ChartControllerProps {
    values: string[];
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
    extraSX: any;
}

export interface CourseCardProps {
    course: Course;
    index: number;
    toggleCard: (currentIndex: number) => void;
    isCardOpened: (index: number) => boolean;
    setModalPhoto: Dispatch<SetStateAction<string>>;
}

/* eslint-disable react-hooks/exhaustive-deps */
import { Course } from "@/types/course";
import { Stack, useTheme } from "@mui/material";
import {
    Dispatch,
    MouseEvent,
    SetStateAction,
    useEffect,
    useRef,
    useState,
} from "react";
import constants from "@/utils/constants";
import { InteractionItem } from "chart.js/dist/core/core.interaction";
import {
    Radar,
    Doughnut,
    Pie,
    PolarArea,
    getElementAtEvent,
} from "react-chartjs-2";

interface CertsChartProps {
    courses: Course[];
    chartType: string;
    setFilterPhrase: Dispatch<SetStateAction<string>>;
    setGlobalIndex: (currentIndex: number) => void;
}

const CertsChart = ({
    courses,
    chartType,
    setFilterPhrase,
    setGlobalIndex,
}: CertsChartProps) => {
    const theme = useTheme();
    const chartRef = useRef(null);

    const [coursesData, setCoursesData] = useState<number[]>(
        Array(constants.about.categories.length).fill(0)
    );

    const chartData = {
        labels: constants.about.categories,
        datasets: [
            {
                label: "courses",
                data: coursesData,
                backgroundColor: constants.about.chartTypes.colors,
            },
        ],
    };

    const radialChartOptions = {
        scales: {
            r: {
                beginAtZero: true,
                ticks: {
                    display: false,
                },
            },
        },
    };

    const chartStyles = {
        width: "100%",
        height: "auto",
        backgroundColor: theme.palette.text.primary,
    };

    const chartComponent = (chartType: string) => {
        switch (chartType) {
            case "radar":
                return (
                    <Radar
                        ref={chartRef}
                        onClick={handleClick}
                        data={chartData}
                        options={radialChartOptions}
                        style={chartStyles}
                    />
                );
            case "polar":
                return (
                    <PolarArea
                        ref={chartRef}
                        onClick={handleClick}
                        data={chartData}
                        options={radialChartOptions}
                        style={chartStyles}
                    />
                );
            case "doughnut":
                return (
                    <Doughnut
                        ref={chartRef}
                        onClick={handleClick}
                        data={chartData}
                        style={chartStyles}
                    />
                );
            case "pie":
                return (
                    <Pie
                        ref={chartRef}
                        onClick={handleClick}
                        data={chartData}
                        style={chartStyles}
                    />
                );
        }
    };

    const handleClick = (event: MouseEvent<HTMLCanvasElement>) => {
        const { current: chart } = chartRef;
        if (!chart) return;

        const element: InteractionItem[] = getElementAtEvent(chart, event);
        if (!element.length) return;

        const { datasetIndex, index } = element[0];
        const category = chartData.labels[index];
        const categoryIndex = chartData.datasets[datasetIndex].data[index];

        setGlobalIndex(0);

        setFilterPhrase((prev) => (prev === category ? "" : category));
    };

    useEffect(() => {
        setCoursesData((prev) => Array(prev.length).fill(0));

        courses.map((course) => {
            setCoursesData((prev) => {
                const index = constants.about.categories.indexOf(
                    course.category
                );
                prev[index] += 1;
                return prev;
            });
        });
    }, []);

    return <Stack width="40%">{chartComponent(chartType)}</Stack>;
};

export default CertsChart;

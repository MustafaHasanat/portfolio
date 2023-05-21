import { Stack, useTheme } from "@mui/material";
import { MouseEvent, useEffect, useRef, useState } from "react";
import constants from "@/utils/constants";
import { InteractionItem } from "chart.js/dist/core/core.interaction";
import {
    Radar,
    Doughnut,
    Pie,
    PolarArea,
    getElementAtEvent,
} from "react-chartjs-2";
import {
    CertsChartProps,
    chartDataConfig,
    chartStyles,
    radialChartOptions,
} from "./styles";

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

    const chartData = chartDataConfig(coursesData);

    const chartComponent = (chartType: string) => {
        switch (chartType) {
            case "radar":
                return (
                    <Radar
                        ref={chartRef}
                        onClick={handleClick}
                        data={chartData}
                        options={radialChartOptions}
                        style={chartStyles(theme.palette.text.primary)}
                    />
                );
            case "polar":
                return (
                    <PolarArea
                        ref={chartRef}
                        onClick={handleClick}
                        data={chartData}
                        options={radialChartOptions}
                        style={chartStyles(theme.palette.text.primary)}
                    />
                );
            case "doughnut":
                return (
                    <Doughnut
                        ref={chartRef}
                        onClick={handleClick}
                        data={chartData}
                        style={chartStyles(theme.palette.text.primary)}
                    />
                );
            case "pie":
                return (
                    <Pie
                        ref={chartRef}
                        onClick={handleClick}
                        data={chartData}
                        style={chartStyles(theme.palette.text.primary)}
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
    }, [courses]);

    return (
        <Stack width={{ xs: "70vw", lg: "40%" }}>
            {chartComponent(chartType)}
        </Stack>
    );
};

export default CertsChart;

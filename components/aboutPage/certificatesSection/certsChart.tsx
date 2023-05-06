/* eslint-disable react-hooks/exhaustive-deps */
import { Course } from "@/types/course";
import { Stack, useTheme } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { certificates } from "@/utils/constants/aboutPageConstants";
import {
    Radar,
    Doughnut,
    Pie,
    PolarArea,
    getDatasetAtEvent,
    getElementAtEvent,
    getElementsAtEvent,
} from "react-chartjs-2";

interface CertsChartProps {
    courses: Course[];
    chartType: string;
}

const CertsChart = ({ courses, chartType }: CertsChartProps) => {
    const theme = useTheme();
    const chartRef = useRef(null);

    const [coursesData, setCoursesData] = useState<number[]>(
        Array(certificates.categories.length).fill(0)
    );

    const chartData = {
        labels: certificates.categories,
        datasets: [
            {
                label: "courses",
                data: coursesData,
                backgroundColor: certificates.chartTypes.colors,
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

    const handleClick = (event: any) => {
        const { current: chart } = chartRef;
        if (!chart) return;
        // console.log(getElementAtEvent(chart, event));
    };

    useEffect(() => {
        setCoursesData((prev) => Array(prev.length).fill(0));

        courses.map((course) => {
            setCoursesData((prev) => {
                const index = certificates.categories.indexOf(course.category);
                prev[index] += 1;
                return prev;
            });
        });
    }, []);

    return <Stack width="40%">{chartComponent(chartType)}</Stack>;
};

export default CertsChart;

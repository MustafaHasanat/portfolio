/* eslint-disable react-hooks/exhaustive-deps */
import { Course } from "@/types/course";
import { Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { Radar, PolarArea } from "react-chartjs-2";

interface CertsChartProps {
    courses: Course[];
}

const CertsChart = ({ courses }: CertsChartProps) => {
    const [categories, setCategories] = useState<string[]>([]);

    const [counts, setCounts] = useState<number[]>([]);

    useEffect(() => {
        let cats: Set<string> = new Set();
        courses.map((course) => cats.add(course.category));

        setCategories(Array.from(cats));

        setCounts(Array(cats.size).fill(0));
    }, []);

    useEffect(() => {
        setCounts((prev) => Array(prev.length).fill(0));

        courses.map((course) => {
            setCounts((prev) => {
                const index = categories.indexOf(course.category);
                prev[index] += 1;
                return prev;
            });
        });
    }, [categories]);

    const data = {
        labels: categories,
        datasets: [
            {
                label: "courses",
                data: counts,
                xAxisId: "x-axis-1",
                yAxisId: "y-axis-1",
                backgroundColor: [
                    "rgba(255, 99, 132, 0.5)",
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(255, 206, 86, 0.5)",
                    "rgba(75, 192, 192, 0.5)",
                    "rgba(153, 102, 255, 0.5)",
                    "rgba(255, 159, 64, 0.5)",
                ],
            },
        ],
    };

    return (
        <Stack>
            <Radar
                data={data}
                options={{
                    scales: {
                        r: {
                            beginAtZero: true
                        },
                    },
                }}
                style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "white",
                }}
            />
        </Stack>
    );
};

export default CertsChart;

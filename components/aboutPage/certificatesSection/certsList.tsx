import { Course } from "@/types/course";
import { Divider, Stack, Typography, useTheme } from "@mui/material";
import { Dispatch, Fragment, SetStateAction, useEffect, useState } from "react";
import ChartController from "./chartController";
import CourseCard from "./courseCard";
import constants from "@/utils/constants";

interface CertsListProps {
    courses: Course[];
    chartType: string;
    filterPhrase: string;
    toggleCard: (currentIndex: number) => void;
    isCardOpened: (index: number) => boolean;
    setChartType: Dispatch<SetStateAction<string>>;
    setModalPhoto: Dispatch<SetStateAction<string>>;
}

const CertsList = ({
    courses,
    chartType,
    setChartType,
    filterPhrase,
    toggleCard,
    isCardOpened,
    setModalPhoto,
}: CertsListProps) => {
    const theme = useTheme();
    const [filteredCourses, setFilteredCourses] = useState(courses);

    useEffect(() => {
        if (!filterPhrase) {
            setFilteredCourses(courses);
        } else {
            setFilteredCourses(
                courses.filter((course) => {
                    if (course.category === filterPhrase) {
                        return course;
                    }
                })
            );
        }
    }, [courses, filterPhrase]);

    return (
        <Stack width="40%" height="70vh" position="relative">
            <ChartController
                values={constants.about.chartTypes.names}
                value={chartType}
                setValue={setChartType}
                extraSX={{ top: 50, bgcolor: theme.palette.primary.main }}
            />

            <Stack
                bgcolor={theme.palette.secondary.main}
                width="100%"
                height="70vh"
                alignItems="center"
                borderRadius={3}
                p={4}
                zIndex={2}
            >
                <Typography variant="h5" color={theme.palette.text.primary}>
                    Results: {filteredCourses.length}{" "}
                    {filterPhrase && `(${filterPhrase})`}
                </Typography>

                <Divider
                    sx={{
                        bgcolor: theme.palette.text.primary,
                        width: "60%",
                        marginY: 2,
                    }}
                />

                <Stack
                    width="100%"
                    height="55vh"
                    spacing={2}
                    sx={{
                        overflow: "scroll",
                    }}
                >
                    {filteredCourses.map((course, index) => {
                        return (
                            <Fragment key={`course card number: ${index}`}>
                                <CourseCard
                                    course={course}
                                    index={index}
                                    toggleCard={toggleCard}
                                    isCardOpened={isCardOpened}
                                    setModalPhoto={setModalPhoto}
                                />
                            </Fragment>
                        );
                    })}
                </Stack>
            </Stack>
        </Stack>
    );
};

export default CertsList;

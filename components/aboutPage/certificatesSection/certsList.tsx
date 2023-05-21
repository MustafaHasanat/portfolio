import {
    Divider,
    Stack,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import ChartController from "./chartController";
import CourseCard from "./courseCard";
import constants from "@/utils/constants";
import { CertsListProps, ListBoxStyles } from "./styles";

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
    const lgScreen = useMediaQuery("(min-width:1440px)");

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
        <Stack
            width={{ xs: "70vw", lg: "40%" }}
            height={{ xs: "auto", lg: "70vh" }}
            alignItems="center"
            position="relative"
        >
            <ChartController
                values={constants.about.chartTypes.names}
                value={chartType}
                setValue={setChartType}
                extraSX={{
                    top: { xs: "unset", lg: 50 },
                    bgcolor: theme.palette.primary.main,
                }}
            />

            <Stack sx={ListBoxStyles(theme.palette.secondary.main)}>
                <Typography
                    fontSize={{ xs: "1.3rem", md: "1.8rem" }}
                    color={theme.palette.text.primary}
                >
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
                    height={{ xs: "28rem", lg: "55vh" }}
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

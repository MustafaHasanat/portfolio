/* eslint-disable react-hooks/exhaustive-deps */
import { Project } from "@/types/project";
import { Stack, useTheme } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import Card from "./card";
import SearchField from "./searchField";
import FilterBox from "./filterBox";
import getDateInfo from "@/utils/helpers/getDateInfo";

interface CardsContainerProps {
    projects: Project[];
}

const CardsContainer = ({ projects }: CardsContainerProps) => {
    const theme = useTheme();
    const [projectsCards, setProjectsCards] = useState<Project[]>(projects);
    const [filterIsOpened, setFilterIsOpened] = useState(false);
    const [yearsList, setYearsList] = useState<number[]>([]);

    const [searchTerm, setSearchTerm] = useState<string>("");
    const [yearSelect, setYearSelect] = useState<number>(0);

    useEffect(() => {
        const filteredProjects = projects.filter((project) => {
            const projectYear = getDateInfo(project?.launchedAt).year;

            if (
                project.title.toLowerCase().includes(searchTerm || "") &&
                (yearSelect === 0 || yearSelect === projectYear)
            ) {
                return project;
            }
        });

        setProjectsCards(filteredProjects);
    }, [searchTerm, yearSelect]);

    useEffect(() => {
        const years = new Set<number>();

        projects.map((project) => {
            years.add(getDateInfo(project?.launchedAt).year);
        });

        setYearsList(Array.from(years));
    }, []);

    return (
        <Stack direction="row" justifyContent="center" px={12}>
            <Stack
                justifyContent="center"
                alignItems="center"
                spacing={8}
                p={2}
                width="100%"
            >
                <SearchField
                    setFilterIsOpened={setFilterIsOpened}
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                />

                {projectsCards.map((project, index) => {
                    return (
                        <Fragment key={`project card number: ${index}`}>
                            <Card
                                project={project}
                                filterIsOpened={filterIsOpened}
                            />
                        </Fragment>
                    );
                })}
            </Stack>

            <FilterBox
                filterIsOpened={filterIsOpened}
                yearsList={yearsList}
                yearSelect={yearSelect}
                setYearSelect={setYearSelect}
            />
        </Stack>
    );
};

export default CardsContainer;

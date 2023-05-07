/* eslint-disable react-hooks/exhaustive-deps */
import { Project } from "@/types/project";
import { Stack, useTheme } from "@mui/material";
import { Fragment, useRef, useState } from "react";
import Card from "./card";
import SearchField from "./searchField";
import FilterBox from "./filterBox";

interface CardsContainerProps {
    projects: Project[];
}

const CardsContainer = ({ projects }: CardsContainerProps) => {
    const theme = useTheme();
    const searchFieldRef = useRef<HTMLInputElement | null>(null);
    const [projectsCards, setProjectsCards] = useState<Project[]>(projects);
    const [searchTerm, setSearchTerm] = useState("");
    const [filterIsOpened, setFilterIsOpened] = useState(false);

    const filterCardsSearch = () => {
        const keyWord = searchFieldRef?.current?.value.toLowerCase();

        const results = projects.filter((project) => {
            if (project.title.toLowerCase().includes(keyWord || "")) {
                return project;
            }
        });

        setProjectsCards(results);
    };

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
                    searchFieldRef={searchFieldRef}
                    filterCardsSearch={filterCardsSearch}
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    setFilterIsOpened={setFilterIsOpened}
                />

                {projectsCards.map((project, index) => {
                    return (
                        <Fragment key={`project card number: ${index}`}>
                            <Card project={project} filterIsOpened={filterIsOpened} />
                        </Fragment>
                    );
                })}
            </Stack>

            <FilterBox filterIsOpened={filterIsOpened}/>
        </Stack>
    );
};

export default CardsContainer;

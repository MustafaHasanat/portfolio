import { Project } from "@/types/project";
import { Stack, useTheme } from "@mui/material";
import { Dispatch, Fragment, SetStateAction, useEffect, useState } from "react";
import Card from "./card";
import SearchField from "./searchField";
import FilterBox from "./filterBox";
import getDateInfo from "@/utils/helpers/getDateInfo";

export interface CheckboxesStatesProps {
    web: boolean;
    desktop: boolean;
}

export interface AttributeListsProps {
    year: {
        yearsList: number[];
        yearSelect: number;
        setYearSelect: Dispatch<SetStateAction<number>>;
    };
    tools: {
        toolsList: string[];
        toolsSelect: string[];
        setToolsSelect: Dispatch<SetStateAction<string[]>>;
    };
    type: {
        typesList: string[];
        typeSelected: string[];
        setTypeSelected: Dispatch<SetStateAction<string[]>>;
        checkboxesStates: CheckboxesStatesProps;
        setCheckboxesStates: Dispatch<SetStateAction<CheckboxesStatesProps>>;
    };
}

interface CardsContainerProps {
    projects: Project[];
}

const CardsContainer = ({ projects }: CardsContainerProps) => {
    const theme = useTheme();

    const [projectsCards, setProjectsCards] = useState<Project[]>(projects);
    const [filterIsOpened, setFilterIsOpened] = useState(false);

    const [searchTerm, setSearchTerm] = useState<string>("");

    const [yearsList, setYearsList] = useState<number[]>([]);
    const [yearSelect, setYearSelect] = useState<number>(0);

    const [toolsList, setToolsList] = useState<string[]>([]);
    const [toolsSelect, setToolsSelect] = useState<string[]>([]);

    const [typesList, setTypesList] = useState<string[]>([]);
    const [typeSelected, setTypeSelected] = useState<string[]>([]);
    const checkboxesInitialState = {
        web: true,
        desktop: true,
    };
    const [checkboxesStates, setCheckboxesStates] = useState(
        checkboxesInitialState
    );

    const clearFilter = () => {
        setSearchTerm("");
        setYearSelect(0);
        setTypeSelected(typesList);
        setCheckboxesStates(checkboxesInitialState);
    };

    useEffect(() => {
        const years = new Set<number>();
        const types = new Set<string>();
        const tools = new Set<string>();

        projects.map((project) => {
            years.add(getDateInfo(project?.launchedAt).year);
            types.add(project?.productType.title);
            project?.tools.map((tool) => {
                tools.add(tool);
            });
        });

        setYearsList(Array.from(years));
        setTypesList(Array.from(types));
        setTypeSelected(Array.from(types));
        setToolsList(Array.from(tools));
    }, [projects]);

    useEffect(() => {
        const filteredProjects = projects.filter((project) => {
            const projectYear = getDateInfo(project?.launchedAt).year;

            if (
                project.title.toLowerCase().includes(searchTerm || "") &&
                (yearSelect === 0 || yearSelect === projectYear) &&
                typeSelected.includes(project.productType.title)
            ) {
                return project;
            }
        });

        setProjectsCards(filteredProjects);
    }, [projects, searchTerm, typeSelected, yearSelect]);

    return (
        <Stack direction="row" justifyContent="center" px={12}>
            <Stack
                justifyContent="flex-start"
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
                clearFilter={clearFilter}
                projectsCards={projectsCards}
                attributeLists={{
                    year: {
                        yearsList,
                        yearSelect,
                        setYearSelect,
                    },
                    tools: {
                        toolsList,
                        toolsSelect,
                        setToolsSelect,
                    },
                    type: {
                        typesList,
                        typeSelected,
                        setTypeSelected,
                        checkboxesStates,
                        setCheckboxesStates,
                    },
                }}
            />
        </Stack>
    );
};

export default CardsContainer;

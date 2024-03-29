import { Stack, useMediaQuery } from "@mui/material";
import { useEffect, useReducer } from "react";
import FilterBox from "./filterBox";
import getDateInfo from "@/utils/helpers/getDateInfo";
import { CardsContainerProps } from "./styles";
import { ReducerProps } from "./styles";
import { projectsReducer } from "./projectsReducer";
import CardsContainer from "./cardsContainer";
import { mqHook } from "@/styles/mq";

const ProjectsPage = ({ projects }: CardsContainerProps) => {
    const lgScreen = useMediaQuery(mqHook.LG);

    const reducerInitialValues: ReducerProps = {
        projectsCards: projects,
        filterIsOpened: false,
        searchTerm: "",
        yearsList: [],
        yearSelect: 0,
        toolsList: [],
        toolsSelect: [],
        typesList: [],
        typeSelected: [],
        checkboxesStates: {
            web: true,
            desktop: true,
        },
    };

    const [projectsState, dispatchProject] = useReducer(
        projectsReducer(reducerInitialValues),
        reducerInitialValues
    );

    const clearFilter = () => {
        dispatchProject({ type: "searchTerm", payload: "" });
        dispatchProject({ type: "yearSelect", payload: 0 });
        dispatchProject({
            type: "typeSelected",
            payload: projectsState.typesList,
        });
        dispatchProject({
            type: "checkboxesStates",
            payload: {
                web: true,
                desktop: true,
            },
        });
        dispatchProject({
            type: "toolsSelect",
            payload: projectsState.toolsSelect.map((toolObj) => {
                return { ...toolObj, state: true };
            }),
        });
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

        dispatchProject({ type: "yearsList", payload: Array.from(years) });
        dispatchProject({ type: "typesList", payload: Array.from(types) });
        dispatchProject({ type: "typeSelected", payload: Array.from(types) });

        let newToolsList: string[] = [];
        let newToolsSelect: { tool: string; state: boolean }[] = [];
        Array.from(tools).map((tool) => {
            newToolsList.push(tool);
            newToolsSelect.push({
                tool: tool,
                state: true,
            });
        });

        dispatchProject({ type: "toolsList", payload: newToolsList });
        dispatchProject({
            type: "toolsSelect",
            payload: newToolsSelect,
        });
    }, [projects]);

    useEffect(() => {
        const filteredProjects = projects.filter((project) => {
            const projectYear = getDateInfo(project?.launchedAt).year;

            const filteredTools = projectsState.toolsSelect.filter(
                (toolObj) => {
                    if (toolObj.state) {
                        return toolObj.tool;
                    }
                }
            );

            const intersectedTools = filteredTools
                .map((tool) => tool.tool)
                .filter((value) => project.tools.includes(value));

            if (
                project.title
                    .toLowerCase()
                    .includes(projectsState.searchTerm.toLowerCase() || "") &&
                (projectsState.yearSelect === 0 ||
                    projectsState.yearSelect === projectYear) &&
                projectsState.typeSelected.includes(
                    project.productType.title
                ) &&
                intersectedTools.length !== 0
            ) {
                return project;
            }
        });

        dispatchProject({ type: "projectsCards", payload: filteredProjects });
    }, [
        projects,
        projectsState.searchTerm,
        projectsState.toolsSelect,
        projectsState.typeSelected,
        projectsState.yearSelect,
    ]);

    return (
        <Stack
            direction="row"
            justifyContent="center"
            px={{ xs: 3, lg: 12 }}
            width="100%"
        >
            <CardsContainer
                projectsState={projectsState}
                dispatchProject={dispatchProject}
                clearFilter={clearFilter}
            />

            {lgScreen && (
                <FilterBox
                    projectsState={projectsState}
                    dispatchProject={dispatchProject}
                    clearFilter={clearFilter}
                />
            )}
        </Stack>
    );
};

export default ProjectsPage;

import { Stack, useMediaQuery } from "@mui/material";
import { Dispatch, Fragment } from "react";
import Card from "./card";
import SearchField from "./searchField";
import FilterBox from "./filterBox";
import { ReducerActionProps, ReducerProps } from "./styles";
import { mqHook } from "@/styles/mq";

interface Props {
    projectsState: ReducerProps;
    dispatchProject: Dispatch<ReducerActionProps>;
    clearFilter: () => void;
}

const CardsContainer = ({
    projectsState,
    dispatchProject,
    clearFilter,
}: Props) => {
    const lgScreen = useMediaQuery(mqHook.LG);

    return (
        <Stack
            justifyContent="flex-start"
            alignItems="center"
            spacing={{ xs: 3, lg: 8 }}
            p={2}
            width="100%"
        >
            <SearchField
                projectsState={projectsState}
                dispatchProject={dispatchProject}
            />

            {!lgScreen && (
                <FilterBox
                    projectsState={projectsState}
                    dispatchProject={dispatchProject}
                    clearFilter={clearFilter}
                />
            )}

            {projectsState.projectsCards.map((project, index) => {
                return (
                    <Fragment key={`project card number: ${index}`}>
                        <Card
                            projectsState={projectsState}
                            dispatchProject={dispatchProject}
                            project={project}
                        />
                    </Fragment>
                );
            })}
        </Stack>
    );
};

export default CardsContainer;

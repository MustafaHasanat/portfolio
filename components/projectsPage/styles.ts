import { Project } from "@/types/project";
import { Dispatch, SetStateAction } from "react";

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
        toolsSelect: { tool: string; state: boolean }[];
        setToolsSelect: Dispatch<
            SetStateAction<{ tool: string; state: boolean }[]>
        >;
    };
    type: {
        typesList: string[];
        typeSelected: string[];
        setTypeSelected: Dispatch<SetStateAction<string[]>>;
        checkboxesStates: CheckboxesStatesProps;
        setCheckboxesStates: Dispatch<SetStateAction<CheckboxesStatesProps>>;
    };
}

interface ReducerTools {
    projectsState: ReducerProps;
    dispatchProject: Dispatch<ReducerActionProps>;
}

export interface ReducerProps {
    projectsCards: Project[];
    filterIsOpened: boolean;
    searchTerm: string;
    yearsList: number[];
    yearSelect: number;
    toolsList: string[];
    toolsSelect: { tool: string; state: boolean }[];
    typesList: string[];
    typeSelected: string[];
    checkboxesStates: {
        web: boolean;
        desktop: boolean;
    };
}

export interface CardsContainerProps {
    projects: Project[];
}

export interface CardProps {
    projectsState?: ReducerProps;
    dispatchProject?: Dispatch<ReducerActionProps>;
    project: Project;
}

export type FilterBoxProps = ReducerTools & {
    clearFilter: () => void;
};

export type SearchFieldProps = ReducerTools & {};
export type ToolsSelectionBoxProps = ReducerTools & {};
export type TypeSelectionBoxProps = ReducerTools & {};
export type YearSelectionBoxProps = ReducerTools & {};

export type ReducerActionProps =
    | {
          type: "projectsCards";
          payload: Project[];
      }
    | {
          type: "filterIsOpened";
          payload: boolean;
      }
    | {
          type: "searchTerm";
          payload: string;
      }
    | {
          type: "yearsList";
          payload: number[];
      }
    | {
          type: "yearSelect";
          payload: number;
      }
    | {
          type: "toolsList";
          payload: string[];
      }
    | {
          type: "toolsSelect";
          payload: { tool: string; state: boolean }[];
      }
    | {
          type: "typesList";
          payload: string[];
      }
    | {
          type: "typeSelected";
          payload: string[];
      }
    | {
          type: "checkboxesStates";
          payload: {
              web: boolean;
              desktop: boolean;
          };
      };

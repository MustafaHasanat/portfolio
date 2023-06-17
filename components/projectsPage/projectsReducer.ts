import { ReducerActionProps, ReducerProps } from "./styles";

export const projectsReducer = (initialValues: ReducerProps) => {
    return (state: ReducerProps, action: ReducerActionProps) => {
        switch (action.type) {
            case "projectsCards":
                return {
                    ...state,
                    projectsCards: action.payload,
                };
            case "filterIsOpened":
                return {
                    ...state,
                    filterIsOpened: action.payload,
                };
            case "searchTerm":
                return {
                    ...state,
                    searchTerm: action.payload,
                };
            case "yearsList":
                return {
                    ...state,
                    yearsList: action.payload,
                };
            case "yearSelect":
                return {
                    ...state,
                    yearSelect: action.payload,
                };
            case "toolsList":
                return {
                    ...state,
                    toolsList: action.payload,
                };
            case "toolsSelect":
                return {
                    ...state,
                    toolsSelect: action.payload,
                };
            case "typesList":
                return {
                    ...state,
                    typesList: action.payload,
                };
            case "typeSelected":
                return {
                    ...state,
                    typeSelected: action.payload,
                };
            case "checkboxesStates":
                return {
                    ...state,
                    checkboxesStates: action.payload,
                };

            default:
                return initialValues;
        }
    };
};

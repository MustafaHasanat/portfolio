import {
    Divider,
    Stack,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import YearSelectionBox from "./yearSelectionBox";
import TypeSelectionBox from "./typeSelectionBox";
import IconicButton from "../shared/iconicButton";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import ToolsSelectionBox from "./toolsSelectionBox";
import { FilterBoxProps } from "./styles";

const FilterBox = ({
    projectsState,
    dispatchProject,
    clearFilter,
}: FilterBoxProps) => {
    const theme = useTheme();
    const lgScreen = useMediaQuery("(min-width:1440px)");

    return (
        <Stack
            direction="row"
            sx={{
                overflow: "hidden",
                py: { xs: projectsState.filterIsOpened ? 3 : 0, lg: "20px" },
                height: lgScreen
                    ? "100%"
                    : projectsState.filterIsOpened
                    ? "auto"
                    : 0,
                width: lgScreen
                    ? projectsState.filterIsOpened
                        ? "50%"
                        : 0
                    : "100%",
                pl: projectsState.filterIsOpened ? "20px" : "0px",
                pr: projectsState.filterIsOpened ? "20px" : "0px",
                transition: "width 0.3s ease, padding 0.3s ease",
            }}
        >
            {lgScreen && (
                <Divider
                    orientation="vertical"
                    sx={{
                        bgcolor: theme.palette.primary.main,
                        height: "100%",
                        width: "1px",
                        opacity: 0.4,
                        mr: 2,
                    }}
                />
            )}

            <Stack alignItems="center" width="100%">
                <Typography variant="h5">
                    Filter ({projectsState.projectsCards.length} results)
                </Typography>

                <Divider
                    orientation="vertical"
                    sx={{
                        bgcolor: theme.palette.primary.main,
                        width: "60%",
                        height: "1px",
                        opacity: 0.2,
                        mt: 1,
                        mb: 5,
                    }}
                />

                <Stack spacing={7}>
                    <YearSelectionBox
                        projectsState={projectsState}
                        dispatchProject={dispatchProject}
                    />
                    <TypeSelectionBox
                        projectsState={projectsState}
                        dispatchProject={dispatchProject}
                    />
                    <ToolsSelectionBox
                        projectsState={projectsState}
                        dispatchProject={dispatchProject}
                    />
                </Stack>

                <IconicButton
                    icon={
                        <HighlightOffIcon
                            sx={{
                                color: theme.palette.error.main,
                                height: "60%",
                                width: "auto",
                            }}
                        />
                    }
                    buttonHeight="3rem"
                    color={theme.palette.text.primary}
                    hoverColor={theme.palette.error.main}
                    onClick={clearFilter}
                    extraSX={{
                        width: "90%",
                        mt: 5,
                    }}
                >
                    <Typography textTransform="uppercase" letterSpacing={2}>
                        clear filters
                    </Typography>
                </IconicButton>
            </Stack>
        </Stack>
    );
};

export default FilterBox;

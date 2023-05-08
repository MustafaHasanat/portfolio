import { Divider, Stack, Typography, useTheme } from "@mui/material";
import YearSelectionBox from "./yearSelectionBox";
import { AttributeListsProps } from "./cardsContainer";
import TypeSelectionBox from "./typeSelectionBox";
import IconicButton from "../shared/iconicButton";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import ToolsSelectionBox from "./toolsSelectionBox";
import { Project } from "@/types/project";

interface FilterBoxProps {
    filterIsOpened: boolean;
    attributeLists: AttributeListsProps;
    projectsCards: Project[];
    clearFilter: () => void;
}

const FilterBox = ({
    filterIsOpened,
    attributeLists,
    projectsCards,
    clearFilter,
}: FilterBoxProps) => {
    const theme = useTheme();
    const {} = attributeLists;

    return (
        <Stack
            direction="row"
            sx={{
                overflow: "hidden",
                py: "20px",
                width: filterIsOpened ? "50%" : 0,
                pl: filterIsOpened ? "20px" : "0px",
                pr: filterIsOpened ? "20px" : "0px",
                transition: "width 0.3s ease, padding 0.3s ease",
            }}
        >
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

            <Stack alignItems="center" width="100%">
                <Typography variant="h5">
                    Filter ({projectsCards.length} results)
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
                    <YearSelectionBox attributeLists={attributeLists} />
                    <TypeSelectionBox attributeLists={attributeLists} />
                    <ToolsSelectionBox attributeLists={attributeLists} />
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
                    color={theme.palette.text.primary}
                    hoverColor={theme.palette.error.main}
                    onClick={clearFilter}
                    extraSX={{
                        width: "90%",
                        height: "8vh",
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

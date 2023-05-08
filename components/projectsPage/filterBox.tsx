import {
    Divider,
    Stack,
    Typography,
    useTheme,
} from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import YearSelectionBox from "./yearSelectionBox";

interface FilterBoxProps {
    filterIsOpened: boolean;
    yearsList: number[];
    yearSelect: number;
    setYearSelect: Dispatch<SetStateAction<number>>;
}

const FilterBox = ({
    filterIsOpened,
    yearsList,
    yearSelect,
    setYearSelect,
}: FilterBoxProps) => {
    const theme = useTheme();

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
                <Typography variant="h4">Filter</Typography>

                <Divider
                    orientation="vertical"
                    sx={{
                        bgcolor: theme.palette.primary.main,
                        width: "60%",
                        height: "1px",
                        opacity: 0.2,
                        mt: 1,
                        mb: 3,
                    }}
                />

                <YearSelectionBox
                    yearSelect={yearSelect}
                    setYearSelect={setYearSelect}
                    yearsList={yearsList}
                />
            </Stack>
        </Stack>
    );
};

export default FilterBox;

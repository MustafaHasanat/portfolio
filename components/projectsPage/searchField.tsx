import { Button, TextField, useMediaQuery, useTheme } from "@mui/material";
import { Stack } from "@mui/material";
import FilterAltSharpIcon from "@mui/icons-material/FilterAltSharp";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import { SearchFieldProps } from "./styles";

const SearchField = ({ projectsState, dispatchProject }: SearchFieldProps) => {
    const lgScreen = useMediaQuery("(min-width:1440px)");
    const theme = useTheme();

    return (
        <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{
                width: "100%",
                height: "10vh",
            }}
        >
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                sx={{
                    width: "100%",
                    height: "100%",
                }}
            >
                {lgScreen && (
                    <Stack
                        justifyContent="center"
                        alignItems="center"
                        sx={{
                            borderRadius: 3,
                            p: 1,
                            mr: 2,
                            height: "100%",
                            width: "auto",
                        }}
                    >
                        <SearchSharpIcon
                            sx={{
                                height: "70%",
                                width: "100%",
                            }}
                        />
                    </Stack>
                )}

                <TextField
                    label="Search by title"
                    variant="filled"
                    type="text"
                    color="primary"
                    value={projectsState.searchTerm}
                    onChange={(e) => {
                        dispatchProject({
                            type: "searchTerm",
                            payload: e.target.value,
                        });
                    }}
                    sx={{
                        width: "100%",
                        mr: { xs: 0, lg: 2 },
                        borderRadius: 1,
                        bgcolor: theme.palette.text.primary,

                        "& input": {
                            color: theme.palette.secondary.main,
                        },
                    }}
                />
            </Stack>

            <Button
                sx={{
                    borderRadius: 3,
                    p: 0,
                    height: "80%",
                    width: "auto",
                }}
                onClick={() => {
                    dispatchProject({
                        type: "filterIsOpened",
                        payload: !projectsState.filterIsOpened,
                    });
                }}
            >
                <FilterAltSharpIcon
                    sx={{
                        height: "70%",
                        width: "100%",
                    }}
                />
            </Button>
        </Stack>
    );
};

export default SearchField;

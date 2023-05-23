import { Stack, TextField, useTheme } from "@mui/material";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import { Dispatch, SetStateAction } from "react";

interface SearchBoxProps {
    searchTerm: string;
    setSearchTerm: Dispatch<SetStateAction<string>>;
}

const SearchBox = ({ searchTerm, setSearchTerm }: SearchBoxProps) => {
    const theme = useTheme();

    return (
        <Stack
            direction="row"
            alignItems="center"
            sx={{
                justifyContent: "center",
                width: { xs: "80%", lg: "100%" },
                height: "100%",
                px: { xs: 0, lg: 25 },
                mb: { xs: 3, lg: 5 },
            }}
        >
            <Stack
                justifyContent="center"
                alignItems="center"
                sx={{
                    mr: 1,
                    height: "auto",
                    width: "3rem",
                }}
            >
                <SearchSharpIcon
                    sx={{
                        color: theme.palette.primary.main,
                        height: "70%",
                        width: "100%",
                    }}
                />
            </Stack>

            <TextField
                label="Search for a document"
                variant="filled"
                type="text"
                color="primary"
                value={searchTerm}
                onChange={(e) => {
                    setSearchTerm(e.target.value);
                }}
                sx={{
                    width: "80%",
                    borderRadius: 1,
                    bgcolor: theme.palette.text.primary,

                    "& input": {
                        color: theme.palette.secondary.main,
                    },
                }}
            />
        </Stack>
    );
};

export default SearchBox;

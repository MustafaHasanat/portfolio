import { Button, Stack, TextField, useTheme } from "@mui/material";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import { Dispatch, SetStateAction } from "react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

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
                width: "100%",
                height: "100%",
                px: { xs: 0, md: 5, lg: 15 },
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
                    width: "calc(100%)",
                    borderRadius: 1,
                    bgcolor: theme.palette.text.primary,

                    "& input": {
                        color: theme.palette.secondary.main,
                    },
                }}
            />

            <Button
                sx={{
                    ml: 1,
                    height: "auto",
                    width: "3rem",
                }}
                onClick={() => {
                    setSearchTerm("");
                }}
            >
                <HighlightOffIcon
                    sx={{
                        color: theme.palette.error.main,
                        height: "70%",
                        width: "100%",
                    }}
                />
            </Button>
        </Stack>
    );
};

export default SearchBox;

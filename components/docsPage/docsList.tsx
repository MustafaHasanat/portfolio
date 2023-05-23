import { Doc } from "@/types/doc";
import { Stack } from "@mui/material";
import DocCard from "./docCard";
import { Fragment } from "react";

interface DocsListProps {
    docs: Doc[];
}

const DocsList = ({ docs }: DocsListProps) => {
    return (
        <Stack
            direction={{ xs: "column", md: "row" }}
            gap={{ xs: 3, lg: 5 }}
            sx={{
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
                width: "90%",
            }}
        >
            {docs.map((doc, index) => {
                return (
                    <Fragment key={`document ${doc.title} number: ${index}`}>
                        <DocCard doc={doc} />
                    </Fragment>
                );
            })}
        </Stack>
    );
};

export default DocsList;

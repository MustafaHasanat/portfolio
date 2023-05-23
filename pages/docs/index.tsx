import { Doc } from "@/types/doc";
import { getAllDocs } from "@/utils/sanity/doc";
import { Box, Stack, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import AnimatedTitle from "@/components/shared/animatedTitle";
import SearchBox from "@/components/docsPage/searchBox";
import DocsList from "@/components/docsPage/docsList";

interface DocsProps {
    docs: Doc[];
}

export const getStaticProps = async (): Promise<{ props: DocsProps }> => {
    const docs = await getAllDocs();

    return {
        props: { docs },
    };
};

export default function Docs({ docs }: DocsProps) {
    const theme = useTheme();

    const [searchTerm, setSearchTerm] = useState("");
    const [filteredDocs, setFilteredDocs] = useState<Doc[]>([]);

    useEffect(() => {
        setFilteredDocs(
            docs.filter((doc) => {
                if (doc.title.toLowerCase().includes(searchTerm || "")) {
                    return doc;
                }
            })
        );
    }, [docs, searchTerm]);

    return (
        <Stack
            sx={{
                bgcolor: theme.palette.secondary.main,
                alignItems: "center",
                px: { xs: 3, lg: 12 },
                py: "25vh",
            }}
        >
            <Box
                sx={{
                    width: { xs: "100%", md: "80%", lg: "40%", xl: "30%" },
                    height: { xs: "11rem", lg: "13rem" },
                }}
            >
                <AnimatedTitle
                    text="my documents"
                    shadowColor={theme.palette.primary.main}
                    fontSize={{
                        xs: "0.8rem",
                        sm: "1rem",
                        md: "1.2rem",
                        lg: "1.7rem",
                    }}
                />
            </Box>

            <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <DocsList docs={filteredDocs} />
        </Stack>
    );
}

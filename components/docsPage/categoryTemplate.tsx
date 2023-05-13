import { Doc } from "@/types/doc";
import { Box, Stack, useTheme } from "@mui/material";
import AnimatedTitle from "../shared/animatedTitle";
import { Fragment, MutableRefObject } from "react";
import DocCard from "./docCard";

interface CategoryTemplateProps {
    doc: string;
    docs: Doc[];
    inViewRef: MutableRefObject<null> | null;
}

const CategoryTemplate = ({ doc, docs, inViewRef }: CategoryTemplateProps) => {
    const theme = useTheme();

    return (
        <Stack id={`docs-${doc}`} position="relative">
            <Box
                ref={inViewRef}
                sx={{
                    position: "absolute",
                    top: "50%",
                    width: " 100%",
                }}
            />

            <AnimatedTitle
                buttonWidth="40%"
                text={doc}
                tertiary={theme.palette.primary.main}
                shadowColor={theme.palette.primary.main}
            />

            <Stack
                direction="row"
                gap={10}
                mt="10vh"
                mb="20vh"
                justifyContent="center"
                alignItems="center"
                flexWrap="wrap"
            >
                {docs.map((curDoc) => {
                    return (
                        <Fragment key={`docs category card ${curDoc._id}`}>
                            <DocCard doc={curDoc} />
                        </Fragment>
                    );
                })}
            </Stack>
        </Stack>
    );
};

export default CategoryTemplate;

import { Doc } from "@/types/doc";
import { getAllDocs } from "@/utils/sanity/doc";
import { Stack, useTheme } from "@mui/material";
import { useInView } from "framer-motion";
import { Fragment, MutableRefObject, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { navigationBarActions } from "@/utils/store/store";
import ManagementBox from "@/components/docsPage/managementBox";
import constants from "@/utils/constants";
import CategoryTemplate from "@/components/docsPage/categoryTemplate";

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
    const dispatch = useDispatch();

    const currentView = useSelector(
        (state: { navigationBarReducer: { currentView: string } }) =>
            state.navigationBarReducer.currentView
    );

    const fundamentalsRef = useRef(null);
    const frontendRef = useRef(null);
    const backendRef = useRef(null);
    const toolsRef = useRef(null);

    const fundamentalsRefInView = useInView(fundamentalsRef);
    const frontendRefInView = useInView(frontendRef);
    const backendRefInView = useInView(backendRef);
    const toolsRefInView = useInView(toolsRef);

    useEffect(() => {
        dispatch(
            navigationBarActions.setDocsView({
                fundamentals: currentView === "fundamentals" ? true : false,
                frontend: currentView === "frontend" ? true : false,
                backend: currentView === "backend" ? true : false,
                tools: currentView === "tools" ? true : false,
            })
        );
    }, [currentView, dispatch]);

    useEffect(() => {
        if (fundamentalsRefInView)
            dispatch(navigationBarActions.setCurrentView("fundamentals"));
        if (frontendRefInView)
            dispatch(navigationBarActions.setCurrentView("frontend"));
        if (backendRefInView)
            dispatch(navigationBarActions.setCurrentView("backend"));
        if (toolsRefInView)
            dispatch(navigationBarActions.setCurrentView("tools"));
    }, [
        fundamentalsRefInView,
        dispatch,
        frontendRefInView,
        backendRefInView,
        toolsRefInView,
    ]);

    const getFilteredData = (
        currentDoc: string
    ):
        | {
              docs: Doc[];
              inView: MutableRefObject<null>;
          }
        | undefined => {
        const docsArray = docs.filter((doc) => {
            return doc.category === currentDoc && doc;
        });

        if (currentDoc === "fundamentals")
            return {
                docs: docsArray,
                inView: fundamentalsRef,
            };
        else if (currentDoc === "frontend")
            return {
                docs: docsArray,
                inView: frontendRef,
            };
        else if (currentDoc === "backend")
            return {
                docs: docsArray,
                inView: backendRef,
            };
        else if (currentDoc === "tools")
            return {
                docs: docsArray,
                inView: toolsRef,
            };
    };

    return (
        <Stack
            sx={{
                bgcolor: theme.palette.secondary.main,
                px: 12,
                py: "25vh",
            }}
        >
            <ManagementBox />

            {constants.docs.categories.map((doc, index) => {
                const filteredDocs = getFilteredData(doc)?.docs;
                const inViewObj = getFilteredData(doc)?.inView;

                return (
                    <Fragment key={`docs category number: ${index}`}>
                        <CategoryTemplate
                            doc={doc}
                            docs={filteredDocs || []}
                            inViewRef={inViewObj || null}
                        />
                    </Fragment>
                );
            })}
        </Stack>
    );
}

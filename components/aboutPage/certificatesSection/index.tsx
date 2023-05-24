/* eslint-disable react-hooks/exhaustive-deps */
import { MutableRefObject, ReactNode, useState } from "react";
import { Avatar, Box, Stack, useTheme } from "@mui/material";
import AnimatedTitle from "@/components/shared/animatedTitle";
import CertsChart from "./certsChart";
import CertsList from "./certsList";
import { Course } from "@/types/course";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "@/utils/store/store";
import useMultiControl from "@/hooks/useMultiControl";

interface CertificatesSectionProps {
    inViewRef: MutableRefObject<null>;
    courses: Course[];
}

const CertificatesSection = ({
    inViewRef,
    courses,
}: CertificatesSectionProps) => {
    const theme = useTheme();

    const [chartType, setChartType] = useState("radar");
    const [filterPhrase, setFilterPhrase] = useState("");
    const [modalPhoto, setModalPhoto] = useState("");

    const dispatch = useDispatch();
    const setModalContent = (state: ReactNode) =>
        dispatch(modalActions.setModalContent(state));

    const isModalActive = useSelector(
        (state: { modalReducer: { isActive: boolean } }) =>
            state.modalReducer.isActive
    );

    const {
        updateState: toggleCard,
        isActive: isCardOpened,
        setGlobalIndex,
    } = useMultiControl();

    const modalBox = modalPhoto && (
        <Avatar
            src={modalPhoto}
            alt={modalPhoto}
            variant="rounded"
            sx={{
                width: { xs: "80vw", lg: "auto" },
                height: { xs: "auto", lg: "80vh" },
                bgcolor: theme.palette.text.primary,
                zIndex: 200,
            }}
        />
    );

    useEffect(() => {
        if (!isModalActive) {
            setModalPhoto("");
        } else {
            if (modalPhoto) {
                setModalContent(modalBox);
            } else {
                setModalContent(<Stack></Stack>);
            }
        }
    }, [modalPhoto, isModalActive, modalBox, setModalContent]);

    return (
        <Stack
            id="about-certificates"
            px={{ xs: 5, md: 12 }}
            py={10}
            position="relative"
            alignItems="center"
            bgcolor={theme.palette.text.primary}
        >
            <Box
                ref={inViewRef}
                sx={{
                    position: "absolute",
                    top: "50%",
                    width: " 100%",
                }}
            />

            <Box
                sx={{
                    width: { xs: "100%", md: "80%", lg: "40%", xl: "30%" },
                    height: { xs: "11rem", lg: "13rem" },
                }}
            >
                <AnimatedTitle
                    text="courses"
                    tertiary={theme.palette.secondary.main}
                    shadowColor={theme.palette.primary.main}
                    fontSize={{
                        xs: "0.8rem",
                        sm: "1rem",
                        md: "1.2rem",
                        lg: "1.7rem",
                    }}
                />
            </Box>

            <Stack
                direction={{ xs: "column", lg: "row" }}
                justifyContent="space-evenly"
                alignItems="center"
                width="100%"
                spacing={{ xs: 5, lg: 0 }}
                p={5}
            >
                <CertsChart
                    courses={courses}
                    chartType={chartType}
                    setFilterPhrase={setFilterPhrase}
                    setGlobalIndex={setGlobalIndex}
                />

                <CertsList
                    courses={courses}
                    chartType={chartType}
                    setChartType={setChartType}
                    filterPhrase={filterPhrase}
                    setModalPhoto={setModalPhoto}
                    toggleCard={toggleCard}
                    isCardOpened={isCardOpened}
                />
            </Stack>
        </Stack>
    );
};

export default CertificatesSection;

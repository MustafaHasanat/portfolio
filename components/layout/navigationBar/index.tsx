import {
    AboutPageProps,
    HomePageProps,
} from "@/utils/store/navigationBarSlice";
import { Box, Stack } from "@mui/material";
import { motion } from "framer-motion";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import getViewDetails from "../../../utils/helpers/getViewDetails";
import { useTheme } from "@mui/material/styles";

interface NavigationBarProps {
    landingSectionInView: boolean;
}

const NavigationBar = ({ landingSectionInView }: NavigationBarProps) => {
    const theme = useTheme();

    const bars = useSelector(
        (state: { navigationBarReducer: { bars: string[] } }) =>
            state.navigationBarReducer.bars
    );

    const { homePage, aboutPage } = useSelector(
        (state: {
            navigationBarReducer: {
                homePage: HomePageProps;
                aboutPage: AboutPageProps;
            };
        }) => {
            return {
                homePage: state.navigationBarReducer.homePage,
                aboutPage: state.navigationBarReducer.aboutPage,
            };
        }
    );

    const handleClick = (bar: string) => {
        document.getElementById(bar)?.scrollIntoView({
            behavior: "smooth",
        });
    };

    const getView = (bar: string) =>
        getViewDetails(bar, { homePage, aboutPage });

    return (
        <Stack
            spacing={3}
            sx={{
                padding: { xs: 1, md: 4 },
                position: "fixed",
                bottom: "50vh",
                left: 0,
                zIndex: 20,
                transform: "translateY(50%)",
                bgcolor: "transparent",
            }}
        >
            {bars.map((bar, index) => {
                return (
                    <Fragment key={`${bar} bar number: ${index}`}>
                        <Box
                            component={motion.button}
                            initial={{
                                opacity: 0.3,
                                background: theme.palette.primary.main,
                            }}
                            animate={{
                                height: getView(bar) ? "80px" : "30px",
                                background: landingSectionInView
                                    ? theme.palette.primary.main
                                    : theme.palette.primary.main,
                                borderRadius: 3,
                                transition: {
                                    type: "spring",
                                },
                            }}
                            whileHover={{
                                scale: 1.2,
                                opacity: 1,
                                transition: {
                                    type: "spring",
                                },
                            }}
                            whileTap={{
                                scale: 0.7,
                                opacity: 1,
                                transition: {
                                    type: "spring",
                                },
                            }}
                            onClick={() => {
                                handleClick(bar);
                            }}
                            sx={{
                                width: "20px",
                                cursor: "pointer",
                                border: 0,
                            }}
                        />
                    </Fragment>
                );
            })}
        </Stack>
    );
};

export default NavigationBar;

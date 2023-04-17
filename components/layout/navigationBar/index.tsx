import { Box, Stack, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { Fragment } from "react";
import { useSelector } from "react-redux";

interface NavigationBarProps {
    landingSectionInView: boolean;
}

const NavigationBar = ({ landingSectionInView }: NavigationBarProps) => {
    const theme = useTheme();

    const bars = useSelector(
        (state: { navigationBarReducer: { bars: string[] } }) =>
            state.navigationBarReducer.bars
    );

    const homePageState = useSelector(
        (state: {
            navigationBarReducer: {
                homePage: {
                    main: boolean;
                    product: boolean;
                    skills: boolean;
                    quotes: boolean;
                };
            };
        }) => state.navigationBarReducer.homePage
    );

    const handleClick = (bar: string) => {
        document.getElementById(bar)?.scrollIntoView({
            behavior: "smooth",
        });
    };

    const getView = (bar: string) => {
        switch (bar) {
            case "home-main":
                return homePageState.main;
            case "home-product":
                return homePageState.product;
            case "home-skills":
                return homePageState.skills;
            case "home-quotes":
                return homePageState.quotes;
            default:
                return false;
        }
    };

    return (
        <Stack
            spacing={3}
            sx={{
                padding: 4,
                position: "fixed",
                bottom: "50%",
                left: 0,
                zIndex: 20,
                transform: "translateY(50%)",
            }}
        >
            {bars.map((bar, index) => {
                return (
                    <Fragment key={`${bar} bar number: ${index}`}>
                        <Box
                            component={motion.button}
                            initial={{
                                opacity: 0.5,
                                background: theme.palette.blue.light,
                            }}
                            animate={{
                                height: getView(bar) ? "80px" : "30px",
                                background: landingSectionInView
                                    ? theme.palette.blue.light
                                    : theme.palette.blue.main,
                                borderRadius: landingSectionInView ? 0 : 5,
                                transition: {
                                    type: "spring",
                                },
                            }}
                            whileHover={{
                                scale: 1.3,
                                opacity: 1,
                                transition: {
                                    type: "spring",
                                },
                            }}
                            whileTap={{
                                scale: 0.8,
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

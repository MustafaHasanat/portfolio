import { Stack, Typography, useMediaQuery } from "@mui/material";
import constants from "@/utils/constants";
import { Fragment, useEffect } from "react";
import NavbarButton from "@/components/layout/navbar/navbarButton";
import { AnimationControls } from "framer-motion";
import { navigationBarActions } from "@/utils/store/store";
import { useDispatch } from "react-redux";
import useGetRoute from "@/hooks/useGetRoute";
import BMCBox from "../header/bmcBox";
import theme from "@/styles/theme";
import { mqHook } from "@/styles/mq";

interface NavbarProps {
    animation: AnimationControls;
}

const Navbar = ({ animation }: NavbarProps) => {
    const dispatch = useDispatch();
    const { path, number: pathNumber } = useGetRoute();
    const mdScreen = useMediaQuery(mqHook.MD);

    useEffect(() => {
        dispatch(
            navigationBarActions.setBars(
                pathNumber === -1
                    ? []
                    : constants.header.navbarItems[pathNumber].navigationBars
            )
        );
    }, [dispatch, path, pathNumber]);

    return (
        <Stack
            direction={{ xs: "column", lg: "row" }}
            spacing={{ xs: 4, lg: 2 }}
            height={{ xs: "100%", md: "fit-content" }}
            justifyContent={{ xs: "space-evenly", md: "start" }}
        >
            {constants.header.navbarItems.map((item, index) => (
                <Fragment key={`${index}`}>
                    <NavbarButton
                        animation={animation}
                        item={{ ...item, id: index }}
                    />
                </Fragment>
            ))}

            {!mdScreen && (
                <Stack
                    direction="row"
                    p={3}
                    mt={3}
                    spacing={3}
                    justifyContent="center"
                    alignItems="center"
                >
                    <BMCBox />

                    <Typography
                        variant="h6"
                        color={theme.palette.text.primary}
                        width="50%"
                    >
                        Buy me a coffee !
                    </Typography>
                </Stack>
            )}
        </Stack>
    );
};

export default Navbar;

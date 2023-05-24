import { Stack } from "@mui/material";
import constants from "@/utils/constants";
import { Fragment, useEffect } from "react";
import NavbarButton from "@/components/layout/navbar/navbarButton";
import { AnimationControls } from "framer-motion";
import { navigationBarActions } from "@/utils/store/store";
import { useDispatch } from "react-redux";
import useGetRoute from "@/hooks/useGetRoute";

interface NavbarProps {
    animation: AnimationControls;
}

const Navbar = ({ animation }: NavbarProps) => {
    const dispatch = useDispatch();
    const { path, number: pathNumber } = useGetRoute();

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
        >
            {constants.header.navbarItems.map((item, index) => (
                <Fragment key={`${index}`}>
                    <NavbarButton
                        animation={animation}
                        item={{ ...item, id: index }}
                    />
                </Fragment>
            ))}
        </Stack>
    );
};

export default Navbar;

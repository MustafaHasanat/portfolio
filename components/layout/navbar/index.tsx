import { Stack, Avatar, Typography, Box, Button } from "@mui/material";
import HeaderConstants from "@/utils/constants/header";
import { Fragment, useEffect } from "react";
import NavbarButton from "@/components/layout/navbar/navbarButton";
import { useAnimation, motion, AnimationControls } from "framer-motion";

interface NavbarProps {
    animation: AnimationControls;
    landingSectionInView: boolean;
}

const Navbar = ({ animation, landingSectionInView }: NavbarProps) => {
    return (
        <Stack direction="row" spacing={2}>
            {HeaderConstants.navbarItems.map((item) => (
                <Fragment key={`${item.id}`}>
                    <NavbarButton
                        landingSectionInView={landingSectionInView}
                        animation={animation}
                        item={{ ...item }}
                    />
                </Fragment>
            ))}
        </Stack>
    );
};

export default Navbar;

import { Stack } from "@mui/material";
import LayoutConstants from "@/utils/constants/global/layout";
import { Fragment } from "react";
import NavbarButton from "@/components/layout/navbar/navbarButton";
import { AnimationControls } from "framer-motion";

interface NavbarProps {
    animation: AnimationControls;
    landingSectionInView: boolean;
}

const Navbar = ({ animation, landingSectionInView }: NavbarProps) => {
    return (
        <Stack direction="row" spacing={2}>
            {LayoutConstants.navbarItems.map((item, index) => (
                <Fragment key={`${index}`}>
                    <NavbarButton
                        landingSectionInView={landingSectionInView}
                        animation={animation}
                        item={{ ...item, id: index }}
                    />
                </Fragment>
            ))}
        </Stack>
    );
};

export default Navbar;

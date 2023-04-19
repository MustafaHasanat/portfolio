import { useTheme } from "@mui/material";
import { Typography, Button } from "@mui/material";
import { motion, AnimationControls } from "framer-motion";
import { navButtonStyles, navTextStyles } from "./styles";
import Link from "next/link";

interface ItemProps {
    landingSectionInView: boolean;
    animation: AnimationControls;
    item: {
        id: number;
        title: string;
        link: string;
    };
}

const NavbarButton = ({ item, animation, landingSectionInView }: ItemProps) => {
    const { id, title, link } = item;
    const theme = useTheme();

    return (
        <Button
            sx={navButtonStyles(
                landingSectionInView
                    ? theme.palette.blue.light
                    : theme.palette.base.light
            )}
            component={motion.div}
            animate={animation}
            whileTap={{ scale: 0.9 }}
            whileHover={{
                scale: 1.2,
            }}
        >
            <Link href={link}>
                <Typography
                    component={motion.div}
                    whileHover={{
                        opacity: 1,
                        color: theme.palette.base.dark,
                    }}
                    sx={navTextStyles(theme.palette.base.light)}
                >
                    {title}
                </Typography>
            </Link>
        </Button>
    );
};

export default NavbarButton;

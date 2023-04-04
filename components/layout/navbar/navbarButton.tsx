import { useTheme } from "@mui/material";
import { Typography, Button } from "@mui/material";
import { motion, AnimationControls } from "framer-motion";
import { navButtonStyles, buttonVariants, navTextStyles } from "./styles";

interface ItemProps {
    switchPointInView: boolean;
    animation: AnimationControls;
    item: {
        id: number;
        title: string;
        link: string;
    };
}

const NavbarButton = ({ item, animation, switchPointInView }: ItemProps) => {
    const { id, title, link } = item;
    const theme = useTheme();

    return (
        <Button
            sx={navButtonStyles(
                switchPointInView
                    ? theme.palette.blue.light
                    : theme.palette.base.dark
            )}
            component={motion.div}
            animate={animation}
            initial="visible"
            whileTap={{ scale: 0.9 }}
            variants={buttonVariants(
                theme.palette.base.light,
                theme.palette.blue.dark
            )}
            whileHover={{
                scale: 1.2,
            }}
            transition={{
                duration: 3,
                type: "spring",
                stiffness: 400,
                damping: 15,
            }}
        >
            <Typography
                component={motion.div}
                whileHover={{
                    opacity: 1,
                    color: theme.palette.base.dark
                }}
                sx={navTextStyles(theme.palette.base.light)}
            >
                {title}
            </Typography>
        </Button>
    );
};

export default NavbarButton;

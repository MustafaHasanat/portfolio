import { useTheme } from "@mui/material";
import { Stack, Avatar, Typography, Box, Button } from "@mui/material";
import { motion, AnimationControls } from "framer-motion";

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

    const buttonVariants = {
        visible: {
            backgroundColor: "transparent",
            color: theme.palette.blue.dark,
            transition: {
                type: "Spring",
                duration: 0.1,
            },
        },
        hidden: {
            backgroundColor: "transparent",
            color: theme.palette.base.light,
            transition: {
                type: "Spring",
                duration: 0.1,
            },
        },
    };

    const textStyles = {
        paddingX: 1.5,
        paddingY: 0.8,
        fontWeight: "bold",
        fontSize: {
            xs: "1.5vw",
        },

        "&:hover": {
            color: switchPointInView
                ? theme.palette.base.light
                : theme.palette.purple.dark,
        },
    };

    return (
        <Button
            sx={{ padding: 0, marginRight: 2, borderRadius: 2.5 }}
            component={motion.div}
            animate={animation}
            initial="visible"
            variants={buttonVariants}
            whileHover={{
                scale: 1.2,
                backgroundColor: switchPointInView
                    ? theme.palette.blue.main
                    : theme.palette.base.light,
            }}
            whileTap={{ scale: 0.9 }}
            transition={{
                duration: 3,
                type: "spring",
                stiffness: 400,
                damping: 15,
            }}
        >
            <Typography sx={textStyles}>{title}</Typography>
        </Button>
    );
};

export default NavbarButton;

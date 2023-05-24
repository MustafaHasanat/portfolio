import { Box, useTheme, Typography, Button } from "@mui/material";
import { motion, AnimationControls } from "framer-motion";
import { navButtonStyles, navTextStyles } from "./styles";
import Link from "next/link";

interface ItemProps {
    animation: AnimationControls;
    item: {
        id: number;
        title: string;
        link: string;
    };
}

const NavbarButton = ({ item, animation }: ItemProps) => {
    const { id, title, link } = item;
    const theme = useTheme();

    return (
        <Button
            sx={navButtonStyles(theme.palette.primary.main)}
            component={motion.div}
            animate={animation}
            whileTap={{ scale: 0.9 }}
            whileHover={{
                scale: 1.2,
            }}
        >
            <Box>
                <Link href={link}>
                    <Typography
                        component={motion.div}
                        whileHover={{
                            opacity: 1,
                            color: theme.palette.secondary.main,
                        }}
                        fontSize={{ xs: "1.3rem", sm: "1.1rem", lg: "0.9rem" }}
                        sx={navTextStyles(theme.palette.text.primary)}
                    >
                        {title}
                    </Typography>
                </Link>
            </Box>
        </Button>
    );
};

export default NavbarButton;

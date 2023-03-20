// import { Stack } from "@mui/material";

import { Stack, Avatar, Typography, Box, Button } from "@mui/material";
import { motion } from "framer-motion";
import HeaderConstants from "@/utils/constants/header";
import { Fragment } from "react";
import NavbarButton from "@/components/shared/navbarButton";


export default function Home() {
    return (
        <Stack>
            {Array(100).fill(0).map((i) => (
                <div>hello</div>
            ))}

        </Stack>
    );
}

import { Stack } from "@mui/material";
import { ReactNode } from "react";

interface GlassBoxProps {
    children: ReactNode;
    id: string;
    extraSX?: any;
}

const GlassBox = ({ children, id, extraSX }: GlassBoxProps) => {
    return (
        <Stack
            id={id}
            sx={{
                width: "100%",
                height: "100%",
                position: "absolute",
                backfaceVisibility: "hidden",
                borderRadius: "30px",
                background: "rgba(255,255,255,.05)",
                boxShadow: "0 0 5px rgb(255, 255, 255)",
                backdropFilter: "blur(10px)",
                ...extraSX,
            }}
        >
            {children}
        </Stack>
    );
};

export default GlassBox;

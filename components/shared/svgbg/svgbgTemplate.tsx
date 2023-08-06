import { Stack } from "@mui/material";

const SVGBG = ({
    position,
    SVGElement,
}: {
    position: "top" | "bottom" | "right" | "left";
    SVGElement: () => JSX.Element;
}) => {
    return (
        <Stack
            sx={{
                position: "absolute",
                top: position === "top" ? 0 : "unset",
                bottom: position === "bottom" ? 0 : "unset",
                right: position === "right" ? 0 : "unset",
                left: position === "left" ? 0 : "unset",
                width: ["top", "bottom"].includes(position) ? "100%" : "unset",
                height: ["right", "left"].includes(position) ? "100%" : "unset",
            }}
        >
            <SVGElement />
        </Stack>
    );
};

export default SVGBG;

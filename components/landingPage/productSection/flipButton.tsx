import { Button, Fade, Tooltip } from "@mui/material";
import { useTheme } from "@mui/material";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import { useState } from "react";

interface FlipButtonProps {
    index: number;
    face: string;
    flipCard: (card: number, face: string) => void;
}

const FlipButton = ({ index, face, flipCard }: FlipButtonProps) => {
    const theme = useTheme();
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Tooltip
            title="Flip to See Frameworks"
            arrow
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 400 }}
        >
            <Button
                sx={{
                    width: "8vh",
                    height: "8vh",
                    borderRadius: "100%",
                }}
                onClick={() => flipCard(index + 1, face)}
                onMouseEnter={() => {
                    setIsHovered(true);
                }}
                onMouseLeave={() => {
                    setIsHovered(false);
                }}
            >
                <SwapHorizIcon
                    sx={{
                        transition: "0.3s ease",
                        color: isHovered
                            ? theme.palette.primary.main
                            : theme.palette.primary.main,
                        width: "100%",
                        height: "100%",
                    }}
                />
            </Button>
        </Tooltip>
    );
};

export default FlipButton;

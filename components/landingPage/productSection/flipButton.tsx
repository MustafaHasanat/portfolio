import { Button, Fade, Tooltip } from "@mui/material";
import { useTheme } from "@mui/material";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";

interface FlipButtonProps {
    index: number;
    face: string;
    flipCard: (card: number, face: string) => void;
}

const FlipButton = ({ index, face, flipCard }: FlipButtonProps) => {
    const theme = useTheme();

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
            >
                <SwapHorizIcon
                    sx={{
                        color: theme.palette.blue.dark,
                        width: "100%",
                        height: "100%",
                    }}
                />
            </Button>
        </Tooltip>
    );
};

export default FlipButton;

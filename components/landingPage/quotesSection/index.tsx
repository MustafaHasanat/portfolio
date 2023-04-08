import InteractiveTitle from "@/components/shared/title";
import { Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material";

const QuotesSecction = () => {
    const theme = useTheme();

    return (
        <Stack>
            <InteractiveTitle
                primary={theme.palette.blue.dark}
                secondary={theme.palette.base.dark}
                tertiary={theme.palette.base.dark}
                containerHeight="30vh"
                buttonWidth="40%"
                buttonHeight="50%"
                linesSpace={15}
                buttonCuttingRatio={0.13}
            >
                <Typography
                    fontSize="2.7vw"
                    color={theme.palette.base.light}
                    textTransform="uppercase"
                    letterSpacing={3}
                    fontWeight="bold"
                >
                    favorite quotes
                </Typography>
            </InteractiveTitle>

            <Stack sx={{height: "60vh"}}>
            </Stack>
        </Stack>
    );
};

export default QuotesSecction;

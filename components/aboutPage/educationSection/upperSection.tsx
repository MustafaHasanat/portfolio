import { Avatar, Stack, Typography, useTheme } from "@mui/material";

interface UpperSectionProps {
    cert: {
        src: string;
        facility: string;
        degree: string;
        date: string;
    };
}

const UpperSection = ({ cert }: UpperSectionProps) => {
    const theme = useTheme();

    const textItem = (key: string, value: string) => {
        return (
            <Stack direction="row" spacing={1}>
                <Typography color={theme.palette.base.light} fontWeight="bold">
                    {key}
                </Typography>
                <Typography
                    color={theme.palette.base.light}
                    sx={{ opacity: 0.8 }}
                >
                    {value}
                </Typography>
            </Stack>
        );
    };

    return (
        <Stack
            direction="row"
            height="25vh"
            justifyContent="start"
            alignItems="center"
        >
            <Avatar
                variant="square"
                src={cert.src}
                sx={{
                    width: "25%",
                    height: "fit-content",
                }}
            />

            <Stack
                ml={3}
                justifyContent="space-between"
                sx={{
                    width: "fit-content",
                    height: "70%",
                }}
            >
                {textItem("Facility:", cert.facility)}
                {textItem("Degree:", cert.degree)}
                {textItem("Duration:", cert.date)}
            </Stack>
        </Stack>
    );
};

export default UpperSection;
